import type { Request, Response, NextFunction } from 'express';
import { HubService } from '../services/hubService.js';

export class HubController {
  public static getAll(req: Request, res: Response, next: NextFunction): void {
    try {
      const hubs = HubService.getAllHubs();
      res.status(200).json({
        success: true,
        data: hubs,
        meta: { total: hubs.length, timestamp: new Date().toISOString() },
      });
    } catch (error) {
      next(error);
    }
  }

  public static getById(req: Request, res: Response, next: NextFunction): void {
    try {
      const id = req.params.id as string;
      const hub = HubService.getHubById(id);
      res.status(200).json({
        success: true,
        data: hub,
        meta: { timestamp: new Date().toISOString() },
      });
    } catch (error) {
      next(error);
    }
  }
}
