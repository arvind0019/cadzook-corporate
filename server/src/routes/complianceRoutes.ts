import { Router } from 'express';
import { z } from 'zod';
import { ComplianceController } from '../controllers/complianceController.js';
import { validateRequest } from '../middleware/validate.js';

const router = Router();

const requestAuditPackSchema = z.object({
  body: z.object({
    clientName: z.string().min(2, 'Client name is required.'),
    companyName: z.string().min(2, 'Company name is required.'),
    email: z.string().email('Valid official email is required.'),
    phone: z.string().min(8, 'Valid phone is required.'),
  }),
});

router.get('/acts', ComplianceController.getActs);
router.post('/audit-pack-request', validateRequest(requestAuditPackSchema), ComplianceController.requestAuditPack);

export default router;
