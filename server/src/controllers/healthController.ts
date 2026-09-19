import type { Request, Response } from 'express';

const startTime = Date.now();

export class HealthController {
  public static check(req: Request, res: Response): void {
    const memory = process.memoryUsage();
    res.status(200).json({
      status: 'UP',
      service: 'Cadzook Manpower API Engine',
      version: '1.0.0',
      uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      memory: {
        rssMb: Math.round(memory.rss / (1024 * 1024)),
        heapUsedMb: Math.round(memory.heapUsed / (1024 * 1024)),
      },
    });
  }
}
