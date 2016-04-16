/**
 * Created by Dale on 4/13/16.
 */

class Unit {

    constructor(magnitude) {
        this.magnitude = magnitude;
    }

    getLengthByUnit(length) {
        return length.len * (length.unit.magnitude / this.magnitude);
    }
}

const UnitMap = {
    m: new Unit(100),
    cm: new Unit(1),
    km: new Unit(100000)
};

export {Unit, UnitMap};
