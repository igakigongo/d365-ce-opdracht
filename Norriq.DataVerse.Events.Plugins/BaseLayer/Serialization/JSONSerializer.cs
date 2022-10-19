using System.IO;
using System.Text;
using System.Runtime.Serialization;
using System;
using System.Runtime.Serialization.Json;

namespace Norriq.DataVerse.Plugins.BaseLayer.Serialization
{
    public class JSONSerializer
    {
        public T Deserialize<T>(string json, string dateTimeFormat = "yyyy-MM-dd'T'HH:mm:ssK")
        {
            var instance = Activator.CreateInstance<T>();
            using (var ms = new MemoryStream(Encoding.Unicode.GetBytes(json)))
            {
                var serializer = new DataContractJsonSerializer(instance.GetType(),
                    new DataContractJsonSerializerSettings
                    {
                        DateTimeFormat = new DateTimeFormat(dateTimeFormat)
                    });
                return (T)serializer.ReadObject(ms);
            }
        }

        public string Serialize<T>(T items, string dateTimeFormat = "yyyy-MM-dd'T'HH:mm:ssK")
        {
            var instance = Activator.CreateInstance<T>();
            using (var ms = new MemoryStream())
            {
                var serializer = new DataContractJsonSerializer(instance.GetType(),
                    new DataContractJsonSerializerSettings
                    {
                        DateTimeFormat = new DateTimeFormat(dateTimeFormat)
                    });
                serializer.WriteObject(ms, items);
                ms.Position = 0;
                var sr = new StreamReader(ms);
                return sr.ReadToEnd();
            }
        }
    }
}