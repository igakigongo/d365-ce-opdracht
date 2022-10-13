using System;
using System.Runtime.Caching;

namespace Norriq.DataVerse.BaseLayer.EnvironmentSettingsProvider
{
    public class CachingService
    {
        private static MemoryCache Cache => MemoryCache.Default;

        public void Add(string key, object data, int seconds)
        {
            if (seconds < 0) { seconds = 0; }
            Add(key, data, TimeSpan.FromSeconds(seconds));
        }

        public void Add(string key, object data, TimeSpan lifetime)
        {
            if (lifetime == default(TimeSpan)) { lifetime = new TimeSpan(0, 5, 0); }
            var policy = new CacheItemPolicy { AbsoluteExpiration = DateTime.Now + lifetime };
            Cache.Add(key, data, policy);
        }

        public void Add<T>(string key, T data, int seconds)
        {
            if (seconds < 0) { seconds = 0; }
            Add(key, data, TimeSpan.FromSeconds(seconds));
        }

        public void Add<T>(string key, T data, TimeSpan lifetime)
        {
            if (lifetime == default(TimeSpan)) { lifetime = new TimeSpan(0, 5, 0); }
            var policy = new CacheItemPolicy { AbsoluteExpiration = DateTime.Now + lifetime };
            Cache.Add(key, data, policy);
        }

        public object Get(string key) => Cache.Get(key);

        public T Get<T>(string key) => (T)Get(key);

        public void Remove(string key)
        {
            if (Exists(key))
            {
                Cache.Remove(key);
            }
        }

        public bool Exists(string key) => !string.IsNullOrEmpty(key) && Cache[key] != null;
    }
}