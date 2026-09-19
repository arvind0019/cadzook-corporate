import type { Request, Response, NextFunction } from 'express';
import { EnquiryService } from '../services/enquiryService.js';
import type { ApiResponse } from '../types/index.js';

export class AdminController {
  public static async getEnquiries(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { status, serviceType, locationHub, search, page = '1', limit = '50' } = req.query;
      const enquiries = await EnquiryService.getEnquiries({
        status: status as string,
        serviceType: serviceType as string,
        locationHub: locationHub as string,
        search: search as string,
      });

      const pageNum = parseInt(page as string, 10);
      const limitNum = parseInt(limit as string, 10);
      const startIndex = (pageNum - 1) * limitNum;
      const paginated = enquiries.slice(startIndex, startIndex + limitNum);

      const response: ApiResponse = {
        success: true,
        data: paginated,
        meta: {
          total: enquiries.length,
          page: pageNum,
          limit: limitNum,
          timestamp: new Date().toISOString(),
        },
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  public static async updateStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = req.params.id as string;
      const { status, notes } = req.body;
      const updated = await EnquiryService.updateStatus(id, status, notes);

      res.status(200).json({
        success: true,
        message: `Enquiry status updated to ${status}.`,
        data: updated,
        meta: { timestamp: new Date().toISOString() },
      });
    } catch (error) {
      next(error);
    }
  }

  public static async getStats(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const stats = await EnquiryService.getAdminStats();
      res.status(200).json({
        success: true,
        data: stats,
        meta: { timestamp: new Date().toISOString() },
      });
    } catch (error) {
      next(error);
    }
  }
}
