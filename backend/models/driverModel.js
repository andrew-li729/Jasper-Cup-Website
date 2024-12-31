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


export const addDriver = async (driver) => {
  const { DriverGuid, Name, Team, Nation } = driver;
  try {
    const pool = await poolPromise;

    // Use a MERGE query to either insert or update
    await pool.request()
      .input('DriverGuid', sql.VarChar, DriverGuid)
      .input('Name', sql.VarChar, Name)
      .input('Team', sql.VarChar, Team)
      .input('Nation', sql.VarChar, Nation)
      .query(`
        MERGE INTO Drivers AS target
        USING (SELECT @DriverGuid AS DriverGuid) AS source
        ON target.DriverGuid = source.DriverGuid
        WHEN MATCHED THEN
          UPDATE SET Name = @Name, Team = @Team, Nation = @Nation
        WHEN NOT MATCHED BY TARGET THEN
          INSERT (Name, DriverGuid, Team, Nation)
          VALUES (@Name, @DriverGuid, @Team, @Nation);
      `);

    return { message: 'Driver added or updated successfully' };
  } catch (err) {
    throw new Error(`Error processing driver: ${err.message}`);
  }
};


export default addDriver