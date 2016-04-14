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
    m: new Unit("m", 100),
    cm: new Unit("cm", 1),
    km: new Unit("km", 100000)
};

export {Unit, UnitMap};
