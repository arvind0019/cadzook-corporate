import { Router } from 'express';
import { z } from 'zod';
import { AdminController } from '../controllers/adminController.js';
import { validateRequest } from '../middleware/validate.js';

const router = Router();

const updateStatusSchema = z.object({
  body: z.object({
    status: z.enum(['NEW', 'CONTACTED', 'ASSESSMENT_SCHEDULED', 'PROPOSAL_SENT', 'CONTRACTED', 'REJECTED']),
    notes: z.string().optional(),
  }),
});

router.get('/enquiries', AdminController.getEnquiries);
router.patch('/enquiries/:id/status', validateRequest(updateStatusSchema), AdminController.updateStatus);
router.get('/stats', AdminController.getStats);

export default router;
