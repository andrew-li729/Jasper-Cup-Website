import fs from 'fs/promises'; // Import fs.promises for async file handling
import path from 'path'; // Import path module to work with file paths
import poolPromise from './config/db.js';
import sql from 'mssql'; // Import sql from mssql
import { addDriver } from './models/driverModel.js'; // Assuming the above code is in driverModel.js

// Function to process a single race file
const processRaceFile = async (filePath) => {
  try {
    // Read and parse the race file
    const data = await fs.readFile(filePath, 'utf-8');
    const raceData = JSON.parse(data);

    // Access the drivers from the 'Result' property
    const drivers = raceData.Result;

    // Check if drivers are available
    if (!Array.isArray(drivers)) {
      throw new Error('No drivers found in the race file.');
    }

    // Iterate over each driver in the Result array
    for (const driver of drivers) {
      // Check if DriverGuid or DriverName is null or missing
      if (!driver.DriverGuid || !driver.DriverName) {
        console.warn(
          `Skipping driver due to missing data. DriverGuid: ${driver.DriverGuid}, DriverName: ${driver.DriverName}`
        );
        continue;
      }

      // Prepare the driver object
      const driverData = {
        DriverGuid: driver.DriverGuid,
        Name: driver.DriverName,
        Team: null,
        Nation: null, // If you have a nation property, you can add it here
      };

      // Add each driver to the database
      const response = await addDriver(driverData);
      console.log(response.message); // Log success message
    }
  } catch (err) {
    console.error(`Error processing race file: ${err.message}`);
  }
};

// Call the function with the path to the racefiles folder
processRaceFile('./racefiles/test.json');
