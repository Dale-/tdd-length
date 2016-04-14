/**
 * Created by Dale on 4/14/16.
 */
import Length from '../length';
import {Unit, UnitMap} from '../unit';

describe('Class Unit', () => {

    describe('.getLengthByUnit: ', () => {

        it('one m is equal one m', () => {
            let unit = UnitMap['cm'];
            let length = new Length(2, 'm');
            let result = unit.getLengthByUnit(length);
            expect(result).toEqual(200);
        });
    });
});

