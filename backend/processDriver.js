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
      // Prepare the driver object
      const driverData = {
        DriverGuid: driver.DriverGuid,
        Name: driver.DriverName,
        Team: null,
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

// Function to process all JSON files in the racefiles folder
const processAllRaceFiles = async (directoryPath) => {
  try {
    // Read the directory to get all files
    const files = await fs.readdir(directoryPath);

    // Loop through each file in the directory
    for (const file of files) {
      const filePath = path.join(directoryPath, file); // Create full file path

      // Ensure only JSON files are processed
      if (path.extname(file) === '.json') {
        console.log(`Processing file: ${file}`);
        await processRaceFile(filePath); // Call processRaceFile for each JSON file
      } else {
        console.warn(`Skipping non-JSON file: ${file}`);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${directoryPath}: ${err.message}`);
  }
};

// Call the function with the path to the racefiles folder


//processAllRaceFiles('./racefiles');

//processRaceFile('./racefiles/test.json')