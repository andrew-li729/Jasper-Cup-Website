import express from 'express';
import { showDrivers, newDriver } from '../controllers/driverController.js';
//import { getDrivers, addDriver } from '../models/driverModel.js';

const router = express.Router();

router.get('/drivers', showDrivers);


router.post('/drivers', newDriver);

export default router;
