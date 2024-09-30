import { Router } from 'express';
import { productsController } from './product.controller';

const router = Router();

router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProductsHandler);
router.get('/:id', productsController.getProductByIdHandler);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

export const productRoutes = router;
