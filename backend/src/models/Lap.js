class Lap {
  constructor(raceId, driverGuid, lapNumber, lapTime) {
    if (!raceId || !driverGuid || lapNumber == null || lapTime == null) {
      throw new Error('All Lap fields are required');
    }

    this.raceId = raceId;
    this.driverGuid = driverGuid;
    this.lapNumber = lapNumber;
    this.lapTime = lapTime; // in seconds
  }
}

module.exports = Lap;