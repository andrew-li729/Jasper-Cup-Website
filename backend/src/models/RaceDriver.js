class RaceDriver {
  constructor(raceId, driver, username, nationality, car, points, bestLapMS, totalTimeMS, crashes) {
    if (!raceId || !driver || points) throw new Error('Race ID and Driver are required');

    this.raceId = raceId;           // reference to Race
    this.driver = driver;           // instance of Driver

    this.username = username || ''; // display name
    this.nationality = nationality || ''; // e.g., "ITA"
    this.car = car // e.g, ks_alfa_romeo_155_v6

    this.bestLapMS = bestLapMS || null;    // best lap time in milliseconds
    this.totalTimeMS = totalTimeMS || 0;

    this.crashes = crashes || 0;        // number of crashes
  }
}

module.exports = RaceDriver;