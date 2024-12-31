import { getDrivers, addDriver } from "../models/driverModel.js";

export const showDrivers = async (req, res) => {
    try {
      const drivers = await getDrivers();
      res.json(drivers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const newDriver = async (req, res) => {
    try {
      const newDriver = req.body;
      const result = await addDriver(newDriver);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }