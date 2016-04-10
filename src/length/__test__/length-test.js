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
            expect(resultLength.length).toEqual(100);
        });
    });


});


