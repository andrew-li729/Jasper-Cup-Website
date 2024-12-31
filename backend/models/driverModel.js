import poolPromise from '../config/db.js';
import sql from 'mssql'; // Import sql from mssql

//get all drivers
export const getDrivers = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM drivers');
    return result.recordset;
  } catch (err) {
    throw new Error(`Error fetching drivers: ${err.message}`);
  }
};

//get driver by id
export const getDriverByID = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM drivers where DriverGUID = ?');
    return result.recordset;
  } catch (err) {
    throw new Error(`Error fetching driver: ${err.message}`);
  }
};

// Add or update a driver
export const addDriver = async (driver) => {
  const { DriverGuid, Name } = driver; // Removed Team and Nation

  if (!DriverGuid) {
    throw new Error('DriverGuid is required');
  }

  try {
    const pool = await poolPromise;

    // Use a MERGE query to either insert or update
    await pool.request()
      .input('DriverGuid', sql.VarChar, DriverGuid)
      .input('Name', sql.VarChar, Name)
      .query(`
        MERGE INTO Drivers AS target
        USING (SELECT @DriverGuid AS DriverGuid) AS source
        ON target.DriverGuid = source.DriverGuid
        WHEN MATCHED THEN
          UPDATE SET Name = @Name
        WHEN NOT MATCHED BY TARGET THEN
          INSERT (Name, DriverGuid)
          VALUES (@Name, @DriverGuid);
      `);

    return { message: 'Driver added or updated successfully' };
  } catch (err) {
    throw new Error(`Error processing driver: ${err.message}`);
  }
};

export default addDriver;
