/**
 * Created by Dale on 4/10/16.
 */

import Length from '../length';
import {Unit, UnitMap} from '../unit';

describe('Class Length', () => {

    let lengthOneUnitM;
    let lengthTwoUnitM;
    let lengthOneUnitKM;
    let lengthOneUnitCM;
    let lengthTwoUnitCM;
    let lengthOneHundredUnitCM;
    let lengthOneThousandUnitM;

    beforeEach(() => {
        lengthOneUnitM = new Length(1, 'm');
        lengthTwoUnitM = new Length(2, 'm');
        lengthOneUnitKM = new Length(1, 'km');
        lengthOneUnitCM = new Length(1, 'cm');
        lengthTwoUnitCM = new Length(2, 'cm');
        lengthOneHundredUnitCM = new Length(100, 'cm');
        lengthOneThousandUnitM = new Length(1000, 'm');
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
            let result = lengthOneUnitM.isEqual(lengthOneThousandUnitM);
            expect(result).toBeFalsy();
        });

        it('one m is equal one hundred cm', () => {
            let result = lengthOneUnitM.isEqual(lengthOneHundredUnitCM);
            expect(result).toBeTruthy();
        });

        it('one m is equal one hundred cm', () => {
            let result = lengthOneUnitKM.isEqual(lengthOneThousandUnitM);
            expect(result).toBeTruthy();
        });

    });

    describe('#add: ', () => {

        it('one m add one m equal two m', () => {
            let result = lengthOneUnitM.add(lengthOneUnitM);
            expect(result.len).toEqual(2);
        });

        it('one m add one hundred cm equal one hundred and one cm ', () => {
            let result = lengthOneUnitM.add(lengthOneHundredUnitCM);
            expect(result.len).toEqual(200);
            expect(result.unit.unit).toEqual('cm');
        });


    });

    describe('#subtract: ', () => {

        it('two m subtracte one m equal one m', () => {
            let result = lengthTwoUnitM.subtract(lengthOneUnitM);
            expect(result.len).toEqual(1);
        });

    });


});


