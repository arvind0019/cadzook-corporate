import type { Request, Response, NextFunction } from 'express';
import { EnquiryService } from '../services/enquiryService.js';
import type { ApiResponse } from '../types/index.js';

export class EnquiryController {
  public static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const enquiry = await EnquiryService.createEnquiry(req.body);
      const response: ApiResponse = {
        success: true,
        message: 'Requirement enquiry successfully registered. Reference ID generated.',
        data: enquiry,
        meta: {
          timestamp: new Date().toISOString(),
        },
      };
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  public static async createConsultation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const consultation = await EnquiryService.createConsultation(req.body);
      const response: ApiResponse = {
        success: true,
        message: 'Staffing consultation request registered successfully.',
        data: consultation,
        meta: {
          timestamp: new Date().toISOString(),
        },
      };
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  public static async getByReference(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const refNo = req.params.referenceNo as string;
      const enquiry = await EnquiryService.getEnquiryByRef(refNo);
      res.status(200).json({
        success: true,
        data: enquiry,
        meta: { timestamp: new Date().toISOString() },
      });
    } catch (error) {
      next(error);
    }
  }
}
