import type { Request, Response, NextFunction } from 'express';
import { type AnyZodObject, ZodError } from 'zod';
import { AppError } from './errorHandler.js';

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      req.body = parsed.body || req.body;
      req.query = parsed.query || req.query;
      req.params = parsed.params || req.params;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const details = error.errors.map((e) => ({
          field: e.path.join('.').replace(/^(body|query|params)\./, ''),
          message: e.message,
          rule: e.code,
        }));
        next(new AppError('Request validation failed. Please check input parameters.', 422, 'VALIDATION_ERROR', details));
      } else {
        next(error);
      }
    }
  };
};
