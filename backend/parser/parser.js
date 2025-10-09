const fs = require('fs');
const msToHMS = require('./msToHMS');

function parser(filePath) {
  console.log('Parsing file:', filePath);


  // Read the file
  const fileData = fs.readFileSync(filePath, 'utf-8');

  // Parse JSON
  let jsonData;
  try {
    jsonData = JSON.parse(fileData);
  } catch (err) {
    console.error('Failed to parse JSON:', err);
    return;
  }


  const cars = jsonData.Cars
  .filter(car => car.Driver.Name && car.Driver.Name.trim() !== "")
  .map(car => ({
    
    carId: car.CarId,
    model: car.Model,
    skin: car.Skin,
    driverName: car.Driver.Name,
    driverNation: car.Driver.Nation,
    driverGuid: car.Driver.Guid
}));

// Parse results
const results = jsonData.Result
.filter(r => r.DriverName !== '')
.map(r => ({
    driverName: r.DriverName,
    driverGuid: r.DriverGuid,
    carId: r.CarId,
    carModel: r.CarModel,
    bestLap: r.BestLap,
    totalTime: r.TotalTime
}));

// Parse laps
const laps = jsonData.Laps.map(lap => ({
    driverName: lap.DriverName,
    driverGuid: lap.DriverGuid,
    carId: lap.CarId,
    lapTime: lap.LapTime,
    timestamp: lap.Timestamp,
    sectors: lap.Sectors,
    cuts: lap.Cuts,
    tyre: lap.Tyre,
}));

// Parse events
const events = jsonData.Events.map(ev => ({
    type: ev.Type,
    carId: ev.CarId,
    driverName: ev.Driver.Name,
    driverGuid: ev.Driver.Guid,
    otherCarId: ev.OtherCarId,
    otherDriverName: ev.OtherDriver?.Name || null,
    otherDriverGuid: ev.OtherDriver?.Guid || null,
    impactSpeed: ev.ImpactSpeed,
}));

console.log({ cars, results , laps /*, events */ });


  }

module.exports = parser; // <-- export the function