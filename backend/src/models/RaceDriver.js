class RaceDriver {
  constructor(raceId, driver, username, nationality, car) {
    if (!raceId || !driver) throw new Error('Race ID and Driver are required');

    this.raceId = raceId;           // reference to Race
    this.driver = driver;           // instance of Driver
    this.username = username || ''; // display name
    this.nationality = nationality || ''; // e.g., "ITA"
    this.car = car // e.g, ks_alfa_romeo_155_v6
  }
}

module.exports = RaceDriver;