class Driver {
    constructor(guid){
        if(!guid) throw new Error('Driver must have a guid');
        this.guid = guid;
    }
}

module.exports = Driver;