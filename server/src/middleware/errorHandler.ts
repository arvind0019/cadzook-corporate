import type { Request, Response, NextFunction } from 'express';
import type { ApiErrorResponse } from '../types/index.js';

export class AppError extends Error {
  public statusCode: number;
  public code: string;
  public details?: any[];

  constructor(message: string, statusCode = 400, code = 'BAD_REQUEST', details?: any[]) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode = err.statusCode || (err.status ? err.status : 500);
  const code = err.code || (statusCode === 500 ? 'INTERNAL_SERVER_ERROR' : 'ERROR');
  const message = err.message || 'An unexpected error occurred processing your request.';

  const response: ApiErrorResponse = {
    error: {
      code,
      message,
      details: err.details || undefined,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    },
  };

  if (process.env.NODE_ENV !== 'test' && statusCode === 500) {
    console.error(`❌ [${req.method}] ${req.originalUrl} - 500 Internal Error:`, err);
  }

  res.status(statusCode).json(response);
}
