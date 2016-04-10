/**
 * Created by Dale on 4/10/16.
 */

import Length from '../length';

describe('Class Length', () => {

    let length_one;
    let length_one_unit_m;
    let length_two_unit_m;
    let length_one_unit_cm;
    let length_two_unit_cm;

    beforeEach(() => {
        length_one = new Length(1);
        length_one_unit_m = new Length(1, 'm');
        length_two_unit_m = new Length(2, 'm');
        length_one_unit_cm = new Length(1, 'cm');
        length_two_unit_cm = new Length(2, 'cm');
    });

    describe('#isEqual: ', () => {

        it('Judging two length whether equal with the same units and length should be return true', () => {

            let result_same_unit = length_one_unit_m.isEqual(length_one);
            expect(result_same_unit).toBeTruthy();
        });

        it('Judging two length whether equal with the same units and different length should be return false', () => {

            let result_same_unit_different_length = length_one.isEqual(length_two_unit_m);
            expect(result_same_unit_different_length).toBeFalsy();
        });

        it('Judging two length whether equal with the different units and same length should be return false', () => {

            let result_different_unit_same_length = length_one.isEqual(length_one_unit_cm);
            expect(result_different_unit_same_length).toBeFalsy();
        });

        it('Judging two length whether equal with the different units and length should be return false', () => {

            let result_different_unit_different_length = length_two_unit_cm.isEqual(length_one);
            expect(result_different_unit_different_length).toBeFalsy();
        });
    });

});


