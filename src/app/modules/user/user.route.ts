import express from 'express';
import { userController } from './user.controller';

const router =express.Router();

router.post('/signup',userController.createUser)

router.get('/users',userController.getAllUsersFromDB)
router.put('/users/:id/role',userController.updateUserRole)
router.put('/users/:id/user',userController.updateUser)

 
export const userRoutes =router