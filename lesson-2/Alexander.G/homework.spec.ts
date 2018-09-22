import { isInArray, toMatrix } from './homework';

describe('Test fo my function', () => {
    it('isInArray should wortk', () => {
        expect(isInArray([1, 2, 3], 1, 2, 1, 3))
            .toBeTruthy();
    });

    it('toMatrix should work', () => {
        expect(toMatrix([1, 2, 3, 4, 5], 2))
            .toEqual([[1, 2], [3, 4], [5]]);
        expect(toMatrix([1, 2, 3, 4, 5], 3))
            .toEqual([[1, 2, 3], [4, 5]]);
    });
});