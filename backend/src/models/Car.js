class Car {
  constructor(model) {
    if (!model) {
      throw new Error('Car model is required');
    }

    this.model = model; // e.g., "ks_alfa_romeo_155_v6"
    
  }
}

module.exports = Car;