class Race {
  constructor(id, season_id ,trackName, type, durationSecs = 0, date) {
    if (!id || !trackName || !type || !date || !season_id) throw new Error('Race ID, track, date, type, and season are required');

    this.season_id = season_id; // reference to Season
    this.id = id;
    this.trackName = trackName;


    this.type = type; // "RACE", "QUALIFY", etc.

    this.durationSecs = durationSecs;

    this.date = date;
    
  }

}

module.exports = Race;