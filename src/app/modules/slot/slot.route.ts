import express from 'express';
import { slotController } from './slot.controller';




const router =express.Router();

router.post('/',slotController.createSlot)
router.get('/availability',slotController.getAllAvailableSlotsFromDB)
router.get('/:id/slots', slotController.singleServiceAllSlots);
router.put('/:id/status', slotController.updateSlotsStstus);
export const slotRoutes =router