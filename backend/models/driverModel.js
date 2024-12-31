import poolPromise from '../config/db.js';

export const getDrivers = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM drivers');
    return result.recordset;
  } catch (err) {
    throw new Error(`Error fetching drivers: ${err.message}`);
  }
};

export const addDriver = async (driver) => {
  const { DriverName, DriverGuid } = driver;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('DriverName', sql.VarChar, DriverName)
      .input('DriverGuid', sql.VarChar, DriverGuid)
      .query(
        `INSERT INTO drivers (DriverName, DriverGuid) VALUES (@DriverName, @DriverGuid)`
      );
    return { message: 'Driver added successfully' };
  } catch (err) {
    throw new Error(`Error adding driver: ${err.message}`);
  }
};
