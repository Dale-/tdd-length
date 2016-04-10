/**
 * Created by Dale on 4/10/16.
 */
export default class Length {

    constructor(length, unit) {
        this.length = length || 0;
        this.unit = unit || "m";
    }

    isEqual(lengthInstance) {
        return this.length == lengthInstance.length && this.unit === lengthInstance.unit;
    }

    transformUnit(unit) {
        let len = this.length * (UnitMap[this.unit] / UnitMap[unit]);
        return new Length(len, unit);
    }
}

const UnitMap = {
    "cm": 1,
    "m": 100,
    "km": 100000
};
