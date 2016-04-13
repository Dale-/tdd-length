/**
 * Created by Dale on 4/10/16.
 */

import Length from '../length';
import {Unit, UnitMap} from '../unit';

describe('Class Length', () => {

    let lengthOneUnitM;
    let lengthTwoUnitM;
    let lengthOneUnitCM;
    let lengthTwoUnitCM;
    let lengthHundredUnitCM;

    beforeEach(() => {
        lengthOneUnitM = new Length(1, 'm');
        lengthTwoUnitM = new Length(2, 'm');
        lengthOneUnitCM = new Length(1, 'cm');
        lengthTwoUnitCM = new Length(2, 'cm');
        lengthHundredUnitCM = new Length(100, 'cm');
    });

    describe('#isEqual: ', () => {

        it('one m is equal one m', () => {
            let result = lengthOneUnitM.isEqual(lengthOneUnitM);
            expect(result).toBeTruthy();
        });

        it('one m is not equal two m', () => {
            let result = lengthOneUnitM.isEqual(lengthTwoUnitM);
            expect(result).toBeFalsy();
        });

        it('one m is not equal one cm', () => {
            let result = lengthOneUnitM.isEqual(lengthOneUnitCM);
            expect(result).toBeFalsy();
        });

        it('one m is equal one hundred cm', () => {
            let result = lengthOneUnitM.isEqual(lengthHundredUnitCM);
            expect(result).toBeTruthy();
        });

    });


});


