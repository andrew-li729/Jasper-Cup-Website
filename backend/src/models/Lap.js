class Lap {
  constructor() {
    if (!id) throw new Error('');

    this.id = id;
    this.driverId = driverId; // reference to RaceDriver

    this.lapNumber = lapNumber; // lap number
    this.lapTimeMS = lapTimeMS; // lap time in milliseconds

    this.sector1MS = sector1MS || 0; // sector 1 time in milliseconds
    this.sector2MS = sector2MS || 0; // sector 2 time in milliseconds
    this.sector3MS = sector3MS || 0; // sector 3 time in milliseconds

    this.cuts = cuts || false; // whether the lap had cuts
    this.tyre = tyre || ''; // tyre used, e.g., "H", "S"
    
  }

}

module.exports = Lap;