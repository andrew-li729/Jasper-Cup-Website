import fs from 'fs/promises'; // Import fs.promises module for async file handling
import poolPromise from './config/db.js';
import sql from 'mssql'; // Import sql from mssql
import { addDriver } from './models/driverModel.js'; // Assuming the above code is in driverModel.js

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
      // Prepare the driver object
      const driverData = {
        DriverGuid: driver.DriverGuid,
        Name: driver.DriverName,
        Team: driver.CarModel,  // Assuming the car model is the team (you can modify this as needed)
        Nation: null,  // If you have a nation property, you can add it here
      };

      // Add each driver to the database
      const response = await addDriver(driverData);
      console.log(response.message); // Log success message
    }
  } catch (err) {
    console.error(`Error processing race file: ${err.message}`);
  }
};

// Call the function with the path to the race file
processRaceFile('test.json');
