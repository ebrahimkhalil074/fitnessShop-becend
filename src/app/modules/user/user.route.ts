import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidations } from './user.validation';
const router =express.Router();

router.post('/signup',validateRequest(userValidations.createUserValidationSchema),userController.createUser)

router.get('/users',userController.getAllUsersFromDB)

 
export const userRoutes =router