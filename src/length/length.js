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
}

