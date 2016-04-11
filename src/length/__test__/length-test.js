/**
 * Created by Dale on 4/10/16.
 */

import Length from '../length';

describe('Class Length', () => {

    let lengthOne;
    let lengthOneUnitM;
    let lengthTwoUnitM;
    let lengthOneUnitCM;
    let lengthTwoUnitCM;

    beforeEach(() => {
        lengthOne = new Length(1);
        lengthOneUnitM = new Length(1, 'm');
        lengthTwoUnitM = new Length(2, 'm');
        lengthOneUnitCM = new Length(1, 'cm');
        lengthTwoUnitCM = new Length(2, 'cm');
    });

    describe('#isEqual: ', () => {

        it('Judging two length whether equal with the same units and length should be return true', () => {
            let resultSameUnit = lengthOneUnitM.isEqual(lengthOne);
            expect(resultSameUnit).toBeTruthy();
        });

        it('Judging two length whether equal with the same units and different length should be return false', () => {
            let resultSameUnitDifferentLength = lengthOne.isEqual(lengthTwoUnitM);
            expect(resultSameUnitDifferentLength).toBeFalsy();
        });

        it('Judging two length whether equal with the different units and same length should be return false', () => {
            let resultDifferentUnitSameLength = lengthOne.isEqual(lengthOneUnitCM);
            expect(resultDifferentUnitSameLength).toBeFalsy();
        });

        it('Judging two length whether equal with the different units and length should be return false', () => {
            let resultDifferentUnitDifferentLength = lengthTwoUnitCM.isEqual(lengthOne);
            expect(resultDifferentUnitDifferentLength).toBeFalsy();
        });
    });

    describe('#transformUnit: ', () => {

        it('Transforming the unit should be return the length of appoint unit', () => {
            let resultLength = lengthOneUnitM.transformUnit('cm');
            expect(resultLength).toEqual(100);
        });
    });

    describe('#add: ', () => {

        it('Adding two length with the same unit', () => {
            let result = lengthOne.add(lengthTwoUnitM);
            expect(result.length).toEqual(3);
        });

        it('Adding two length with the different unit', () => {
            let result = lengthTwoUnitM.add(lengthTwoUnitCM);
            expect(result.length).toEqual(202);
            expect(result.unit).toEqual(lengthTwoUnitCM.unit);
        });
    });

    describe('#subtraction: ', () => {

        it('Substracting two length with the same unit', () => {
            let result = lengthTwoUnitM.subtract(lengthOneUnitM);
            expect(result.length).toEqual(1);
        });

        it('Substracting two length with the different unit', () => {
            let result = lengthTwoUnitM.subtract(lengthTwoUnitCM);
            expect(result.length).toEqual(198);
            expect(result.unit).toEqual(lengthTwoUnitCM.unit);
        });
    });

    describe('#getLengthByUnit: ', () => {

        it('Getting the length when given the unit with the input length', () => {
            let result = lengthTwoUnitM.getLengthByUnit('cm');
            expect(result).toEqual(200);
        });
    });


});


