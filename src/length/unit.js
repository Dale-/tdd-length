/**
 * Created by Dale on 4/13/16.
 */

class Unit {

    constructor(unit, magnitude) {
        this.unit = unit;
        this.magnitude = magnitude;
    }

    getLengthByUnit(length) {
        return length.len * (length.unit.magnitude / this.magnitude);
    }
}

const UnitMap = {
    cm: new Unit("cm", 1),
    m: new Unit("m", 100),
    km: new Unit("km", 100000)
};

export {Unit, UnitMap};
