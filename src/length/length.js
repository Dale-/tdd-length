/**
 * Created by Dale on 4/10/16.
 */

import {Unit, UnitMap} from './unit';

export default class Length {

    constructor(len, unit) {
        this.len = len;
        this.unit = UnitMap[unit] || unit;
    }

    isEqual(length) {
        return this.unit === length.unit ? this.len === length.len : this.getLengthOfSameUnit(length);
    }

    getLengthOfSameUnit(length) {
        return this.len * this.unit.magnitude === length.len * length.unit.magnitude;
    }

    add(length) {
        return this.calculate('+', length);
    }

    subtract(length) {

        return this.calculate('-', length);
    }

    calculate(opr, length) {
        const operations = {
            '+': (a, b, unit) => new Length(a + b, unit),
            '-': (a, b, unit) => new Length(a - b, unit)
        };

        if (this.unit === length.unit) {
            return operations[opr](this.len, length.len, this.unit);
        } else {
            return operations[opr](length.unit.getLengthByUnit(this), length.len, length.unit);
        }
    }

}

