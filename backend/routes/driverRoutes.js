import express from 'express';
import { getDrivers, addDriver } from '../models/driverModel.js';

const router = express.Router();

router.get('/drivers', async (req, res) => {
  try {
    const drivers = await getDrivers();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/drivers', async (req, res) => {
  try {
    const newDriver = req.body;
    const result = await addDriver(newDriver);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
