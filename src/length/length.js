/**
 * Created by Dale on 4/10/16.
 */

//import {Unit, UnitMap} from 'unit';
import {Unit, UnitMap} from './unit';

export default class Length {

    constructor(len, unitString) {
        this.len = len;
        this.unit = UnitMap[unitString];
    }

    isEqual(length) {

        if (this.unit === length.unit) {
            return this.len === length.len;
        } else {
            return this.len * this.unit.magnitude === length.len * length.unit.magnitude;
        }
    }
}

