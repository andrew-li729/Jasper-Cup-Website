class Race {
  constructor(id, trackName, type, durationSecs = 0) {
    if (!id || !trackName || !type) throw new Error('Race ID, track, and type are required');

    this.id = id;
    this.trackName = trackName;
    this.type = type; // "RACE", "QUALIFY", etc.
    this.durationSecs = durationSecs;
    this.drivers = []; // array of RaceDriver objects
  }

  addDriver(raceDriver) {
    this.drivers.push(raceDriver);
  }
}

module.exports = Race;