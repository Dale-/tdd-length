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
        let myLength = this.getLength(lengthInstance);
        return new Length(myLength + lengthInstance.length, lengthInstance.unit);
    }

    subtract(lengthInstance) {
        let myLength = this.getLength(lengthInstance);
        return new Length(myLength - lengthInstance.length, lengthInstance.unit);
    }

    getLength(lengthInstance) {
        let length = this.length;
        if (this.unit !== lengthInstance.unit) {
            length = this.transformUnit(lengthInstance.unit);
        }
        return length;
    }
}

Length.UnitMap = {
    "cm": 1,
    "m": 100,
    "km": 100000
};
