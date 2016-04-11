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
        return this.length * (UnitMap[this.unit] / UnitMap[unit]);
    }

    add(lengthInstance) {
        let length = this.length;
        if(this.unit !== lengthInstance.unit) {
            length = this.transformUnit(lengthInstance.unit);
        }
        return new Length(length + lengthInstance.length, lengthInstance.unit);
    }

    subtract(lengthInstance) {
        let length = this.length;
        if(this.unit !== lengthInstance.unit) {
            length = this.transformUnit(lengthInstance.unit);
        }
        return new Length(length - lengthInstance.length, lengthInstance.unit);
    }
}

const UnitMap = {
    "cm": 1,
    "m": 100,
    "km": 100000
};
