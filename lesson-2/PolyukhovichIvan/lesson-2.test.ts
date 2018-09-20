import { expect } from 'chai';
import 'mocha';
import {
    getUnique,
    getUniqueSet,
    isInArray,
    summator,
    summatorOverload,
    toMatrix
} from './lesson-2';


describe('lesson-2', () => {
    it('isInArray', () => {
        const exampleObj = { foo: 'bar' };

        [
            {
                input: [[1], 1],
                output: true
            },
            {
                input: [[1, 2], 1],
                output: true
            },
            {
                input: [[false, 2, 'hello'], 'hello', 2, false],
                output: true
            },
            {
                input: [[exampleObj, 2, 'hello'], 'hello', 2, exampleObj],
                output: true
            },
            {
                input: [[1]],
                output: false
            },
            {
                input: [[]],
                output: false
            },
        ].forEach(({ input, output}) => {
            const [arr, ...rest] = input as [any[], any[]];
            expect(isInArray(arr, ...rest)).to.equal(output, [input, output].join(' / '));
        });
    });

    it('summator', () => {
        expect(summator(1, 2, 3)).to.equal(6);
        expect(summator('1', '2', '3')).to.equal(6);
        expect(summator('1', 'bad2string', '3', '4')).to.equal(8);
    });
    it('summatorOverload', () => {
        expect(summatorOverload(1, 2, 3)).to.equal(6);
        expect(summatorOverload('1', '2', '3')).to.equal(6);
        expect(summatorOverload('1', 'bad2string', '3', '4')).to.equal(8);
    });
    it('getUnique', () => {
        expect(getUnique(1, 2, 3)).to.eql([1, 2, 3]);
        expect(getUnique(1, 2, 2, 3, 3, 3)).to.eql([1, 2, 3]);
    });
    it('getUniqueSet', () => {
        const exampleObj = { foo: 'bar' };

        expect(getUniqueSet(1, 2, 3)).to.eql([1, 2, 3]);
        expect(getUniqueSet(1, 2, 2, 3, 3, 3)).to.eql([1, 2, 3]);
        expect(getUniqueSet(exampleObj, exampleObj, exampleObj)).to.eql([exampleObj]);
    });
    it('toMatrix', () => {
        expect(toMatrix([1, 2, 3, 4, 5, 6, 7], 3)).to.eql([[1, 2, 3], [4, 5, 6], [7]]);
        expect(toMatrix([1, 2, 3, 4, 5, 6, 7], 2)).to.eql([[1, 2], [3, 4], [5, 6], [7]]);
        expect(toMatrix([1, 2, 3, 4, 5, 6, 7], 1)).to.eql([[1], [2], [3], [4], [5], [6], [7]]);
    });
});

