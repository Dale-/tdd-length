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
        return this.length * (Length.UnitMap[this.unit] / Length.UnitMap[unit]);
    }

    add(lengthInstance) {
        let myLength = this.getLengthByUnit(lengthInstance.unit);
        return new Length(myLength + lengthInstance.length, lengthInstance.unit);
    }

    subtract(lengthInstance) {
        let myLength = this.getLengthByUnit(lengthInstance.unit);
        return new Length(myLength - lengthInstance.length, lengthInstance.unit);
    }

    getLengthByUnit(unit) {
        let length = this.length;
        if (this.unit !== unit) {
            length = this.transformUnit(unit);
        }
        return length;
    }
}

Length.UnitMap = {
    "cm": 1,
    "m": 100,
    "km": 100000
};
