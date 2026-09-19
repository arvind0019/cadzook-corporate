import { Router } from 'express';
import enquiryRoutes from './enquiryRoutes.js';
import complianceRoutes from './complianceRoutes.js';
import hubRoutes from './hubRoutes.js';
import adminRoutes from './adminRoutes.js';
import healthRoutes from './healthRoutes.js';

const apiRouter = Router();

apiRouter.use('/enquiries', enquiryRoutes);
apiRouter.use('/compliance', complianceRoutes);
apiRouter.use('/hubs', hubRoutes);
apiRouter.use('/admin', adminRoutes);
apiRouter.use('/', healthRoutes);

export default apiRouter;
