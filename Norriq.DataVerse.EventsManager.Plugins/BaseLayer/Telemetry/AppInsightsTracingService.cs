using Microsoft.Crm.Sdk.Messages;
using Microsoft.SqlServer.Server;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.PluginTelemetry;
using System;
using System.Collections.Generic;
using System.ServiceModel.Channels;

namespace Norriq.DataVerse.Plugins.BaseLayer.Telemetry
{
    public class AppInsightsTracingService
    {
        private readonly ILogger _logger;
        private readonly ITracingService _tracingService;

        public AppInsightsTracingService(ILogger logger, ITracingService tracingService)
        {
            _logger = logger;
            _tracingService = tracingService;
        }

        public IDisposable BeginScope(Dictionary<string, object> tracingAttributes)
        {
            return _logger.BeginScope(tracingAttributes);
        }

        public void LogCritical(EventId eventId, Exception exception, string message, params object[] args)
        {
            _logger.LogCritical(eventId, exception, message, args);
            TraceError(exception, message, eventId, args);
        }

        public void LogCritical(EventId eventId, string message, params object[] args)
        {
            _logger.LogCritical(eventId, message, args);
            TraceError(message, eventId, args);
        }

        public void LogCritical(Exception exception, string message, params object[] args)
        {
            _logger.LogCritical(exception, message, args);
            TraceError(exception, message, args: args);
        }

        public void LogCritical(string message, params object[] args)
        {
            _logger.LogCritical(message, args);
            TraceError(message, args: args);
        }

        public void LogError(EventId eventId, Exception exception, string message, params object[] args)
        {
            _logger.LogError(eventId, exception, message, args);
            TraceError(exception, message, eventId, args);
        }

        public void LogError(EventId eventId, string message, params object[] args)
        {
            _logger.LogError(eventId, message, args);
            TraceError(message, eventId, args);
        }

        public void LogError(Exception exception, string message, params object[] args)
        {
            _logger.LogError(exception, message, args);
            TraceError(exception, message, args: args);
        }

        public void LogError(string message, params object[] args)
        {
            _logger.LogError(message, args);
            TraceError(message, args: args);
        }

        public void LogTrace(string message, params object[] args)
        {
            _logger.LogTrace(message, args);
            _tracingService.Trace(message, args);
        }

        public void LogTrace(EventId eventId, string message, params object[] args)
        {
            _logger.LogTrace(eventId, message, args);
            Trace(eventId, message, args);
        }

        public void LogWarning(string message, params object[] args)
        {
            _logger.LogWarning(message, args);
            _tracingService.Trace(message, args);
        }

        public void LogWarning(EventId eventId, string message, params object[] args)
        {
            _logger.LogWarning(eventId, message, args);
            Trace(eventId, message, args);
        }

        private void Trace(EventId eventId, string message, params object[] args)
        {
            _tracingService.Trace($"EventId:{eventId.Id}\r\n{string.Format(message, args)}");
        }

        private void TraceError(Exception exception, string message, EventId eventId = null, params object[] args)
        {
            if (eventId == null)
            {
                _tracingService.Trace($"---------------ERROR---------------\r\r{message}\r\n---------------EXCEPTION---------------\r\n{exception.Message}\r\n---------------END---------------", args);
            }
            Trace(eventId, $"---------------ERROR---------------\r\r{message}\r\n---------------EXCEPTION---------------\r\n{exception.Message}\r\n---------------END---------------", args);
        }

        private void TraceError(string message, EventId eventId = null, params object[] args)
        {
            if (eventId == null)
            {
                _tracingService.Trace($"---------------ERROR---------------\r\r{message}\r\n---------------END---------------", args);
            }
            Trace(eventId, $"---------------ERROR---------------\r\r{message}\r\n---------------END---------------", args);
        }
    }
}