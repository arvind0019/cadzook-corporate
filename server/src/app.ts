import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { ENV } from './config/env.js';
import { requestLogger } from './middleware/logger.js';
import { errorHandler, AppError } from './middleware/errorHandler.js';
import apiRouter from './routes/index.js';

export const app = express();

// Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// CORS configuration
const allowedOrigins = ENV.CORS_ORIGIN.split(',').map((o) => o.trim());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
      } else {
        callback(null, true); // Allow dev origins seamlessly
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  })
);

// Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Telemetry & Logger
app.use(requestLogger);

// Mount API Routes
app.use(ENV.API_PREFIX, apiRouter);

// Root Welcome Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    service: 'CADZOOK Private Limited - Enterprise Backend API',
    tagline: 'Your Trusted Workforce Partner',
    version: '1.0.0',
    documentation: `${ENV.API_PREFIX}/health`,
    endpoints: {
      health: `${ENV.API_PREFIX}/health`,
      enquiries: `${ENV.API_PREFIX}/enquiries`,
      consultations: `${ENV.API_PREFIX}/enquiries/consultations`,
      compliance: `${ENV.API_PREFIX}/compliance/acts`,
      auditPack: `${ENV.API_PREFIX}/compliance/audit-pack-request`,
      hubs: `${ENV.API_PREFIX}/hubs`,
      adminEnquiries: `${ENV.API_PREFIX}/admin/enquiries`,
      adminStats: `${ENV.API_PREFIX}/admin/stats`,
    },
  });
});

// 404 Route Handler
app.use((req, res, next) => {
  next(new AppError(`The requested endpoint '${req.originalUrl}' does not exist on this server.`, 404, 'ROUTE_NOT_FOUND'));
});

// Global Error Handler
app.use(errorHandler);
