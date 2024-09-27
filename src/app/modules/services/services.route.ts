import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { servicesController } from './services.controller';
import { servicesValidations } from './services.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
const router =express.Router();

router.post('/create-services',auth(USER_ROLE.admin) ,validateRequest(servicesValidations.createServicesValidationSchema),servicesController.createServices);
// router.post('/slots',servicesController.createServices)
router.get("/" ,servicesController.getAllServices)
router.get("/:id" ,servicesController.getSingleServices)
router.put("/:id",auth(USER_ROLE.admin) ,servicesController.updateServices)
router.delete("/:id",auth(USER_ROLE.admin) ,servicesController.deleteServices)
 
export const servicesRoutes =router