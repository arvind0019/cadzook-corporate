import type { Request, Response, NextFunction } from 'express';

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    const logColor = status >= 500 ? '🔴' : status >= 400 ? '🟡' : '🟢';

    console.log(
      `${logColor} [${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${status} (${duration}ms)`
    );
  });

  next();
}
