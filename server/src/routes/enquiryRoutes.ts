import { Router } from 'express';
import { z } from 'zod';
import { EnquiryController } from '../controllers/enquiryController.js';
import { validateRequest } from '../middleware/validate.js';

const router = Router();

const createEnquirySchema = z.object({
  body: z.object({
    clientName: z.string().min(2, 'Client name must be at least 2 characters.'),
    companyName: z.string().min(2, 'Company name must be at least 2 characters.'),
    email: z.string().email('Please provide a valid official email address.'),
    phone: z.string().min(8, 'Please provide a valid contact number.'),
    serviceType: z.string().min(2, 'Service type is required.'),
    locationHub: z.string().optional(),
    headcountEstimate: z.number().int().nonnegative().optional(),
    requirementDetails: z.string().min(5, 'Requirement details must be at least 5 characters.'),
    source: z.enum(['WEBSITE_CONTACT_FORM', 'QUICK_CONSULTATION_MODAL', 'COMPLIANCE_AUDIT_PACK', 'DIRECT_INQUIRY']).optional(),
  }),
});

const createConsultationSchema = z.object({
  body: z.object({
    clientName: z.string().min(2, 'Client name is required.'),
    companyName: z.string().min(2, 'Company name is required.'),
    email: z.string().email('Valid email is required.'),
    phone: z.string().min(8, 'Valid phone number is required.'),
    serviceCategory: z.string().min(2, 'Service category is required.'),
    message: z.string().optional(),
  }),
});

router.post('/', validateRequest(createEnquirySchema), EnquiryController.create);
router.post('/consultations', validateRequest(createConsultationSchema), EnquiryController.createConsultation);
router.get('/:referenceNo', EnquiryController.getByReference);

export default router;
