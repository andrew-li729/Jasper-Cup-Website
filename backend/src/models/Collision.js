class Collision {
  /**
   * @param {number} raceDriverId - ID of the driver involved in this race
   * @param {'ENVIRONMENT'|'CAR'} type - Type of collision
   * @param {number|null} otherRaceDriverId - ID of the other driver if type is CAR
   * @param {number} impactSpeed - Speed at impact
   */
  constructor(raceDriverId, type, otherRaceDriverId = null, impactSpeed, lapNumber = null, timestamp = null) {
    
    this.raceId = raceId;
    this.raceDriverId = raceDriverId;

    this.type = type; //collision with environment or another car

    this.otherRaceDriverId = otherRaceDriverId || null;

    this.impactSpeed = impactSpeed;
  }
}