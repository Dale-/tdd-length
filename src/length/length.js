/**
 * Created by Dale on 4/10/16.
 */
export default class Length {

    constructor(length, unit) {
        this.length = length || 0;
        this.unit = unit || "m";
    }

    isEqual(length_instance) {
        return this.length == length_instance.length && this.unit === length_instance.unit;
    }
}
