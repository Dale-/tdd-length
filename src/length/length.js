/**
 * Created by Dale on 4/10/16.
 */

import {Unit, UnitMap} from './unit';

export default class Length {

    constructor(len, unitString) {
        this.len = len;
        this.unit = UnitMap[unitString];
    }

    isEqual(length) {
        return this.unit === length.unit ? this.len === length.len : this.getLengthOfSameUnit(length);
    }

    getLengthOfSameUnit(length) {
        return this.len * this.unit.magnitude === length.len * length.unit.magnitude;
    }

    add(length) {
        if(this.unit === length.unit) {
            return new Length(this.len + length.len, this.unit);
        } else {
            return new Length(length.unit.getLengthByUnit(this) + length.len, length.unit.unit);
        }
    }

    subtract(length) {
        return new Length(this.len - length.len, this.unit.unit);
    }
}

