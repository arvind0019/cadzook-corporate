import { app } from './app.js';
import { ENV } from './config/env.js';

const server = app.listen(ENV.PORT, () => {
  console.log(`
=====================================================
🚀 CADZOOK Manpower Enterprise Backend API Live
=====================================================
📡 Port:        ${ENV.PORT}
🌐 Environment: ${ENV.NODE_ENV}
🔗 API Base:    http://localhost:${ENV.PORT}${ENV.API_PREFIX}
🩺 Health:      http://localhost:${ENV.PORT}${ENV.API_PREFIX}/health
📋 Enquiries:   http://localhost:${ENV.PORT}${ENV.API_PREFIX}/enquiries
📊 Admin Stats: http://localhost:${ENV.PORT}${ENV.API_PREFIX}/admin/stats
=====================================================
  `);
});

// Graceful Shutdown
const handleShutdown = (signal: string) => {
  console.log(`\n🛑 Received ${signal}. Gracefully terminating Cadzook backend server...`);
  server.close(() => {
    console.log('✅ HTTP server closed successfully.');
    process.exit(0);
  });

  // Force close after 10s timeout
  setTimeout(() => {
    console.error('⚠️ Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
