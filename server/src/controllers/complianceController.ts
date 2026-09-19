import type { Request, Response, NextFunction } from 'express';
import { ComplianceService } from '../services/complianceService.js';
import type { ApiResponse } from '../types/index.js';

export class ComplianceController {
  public static getActs(req: Request, res: Response, next: NextFunction): void {
    try {
      const data = ComplianceService.getStatutoryActs();
      res.status(200).json({
        success: true,
        data,
        meta: { timestamp: new Date().toISOString() },
      });
    } catch (error) {
      next(error);
    }
  }

  public static async requestAuditPack(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await ComplianceService.requestAuditPack(req.body);
      const response: ApiResponse = {
        success: true,
        message: 'Compliance audit pack requested successfully. Digital dossier reference issued.',
        data: result,
        meta: { timestamp: new Date().toISOString() },
      };
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
