import { Router } from 'express';

import { categoryController } from './category.controller';

const router = Router();

router.post('/', categoryController.createCategoryHandler);
router.get('/', categoryController.getAllCategoryHandler);


export const categoryRoutes = router;