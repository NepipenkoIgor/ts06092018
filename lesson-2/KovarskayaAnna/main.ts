function isInArray(a: any[], ...b: any[]): boolean {
    return b.reduce((res: boolean, el: any) => {
        if (!a.includes(el)) {
            res = false;
        }
        return res;
    }, true);
}


//console.log('trrrrrrrrr' + f.includes(1));
console.log(isInArray([1, 2, 3], 1, 2, 3));
console.log(isInArray([1, 2, 3], 1, 2, 3, 4));
console.log(isInArray([1, '2', 3, 4], 1, '2', 3));

function summator(...args: string[]): string;
function summator(...args: number[]): number;
function summator(...args: (string | number)[]): string | number {
    let result: any;
    args.forEach((el) => {
        result = (result)
            ? result + el
            : el;
    });
    return result;
}


console.log(summator(2, 3, 87));
console.log(summator('2', 'qqqqqqq', 'ee'));
console.log(summator('abc', 'def'));

function getUnique(...arr: any[]): any[] {
    return arr.reduce((res: any[], el: any) => {
        if (!res.includes(el)) {
            res.push(el);
        }
        return res;
    }, []);
}

console.log(getUnique(2));
console.log(getUnique(2, 3));
console.log(getUnique(2, 3, true, 'string'));
console.log(getUnique(2, 'string', 3, true, 'string', 3));

function toMatrix(arr: any[], data: number): any[][] {
    let a: any[][] = [];
    let nextStep: number;
    let i: number = 0;
    while (i < arr.length) {
        nextStep = i + data;
        a.push(arr.slice(i, nextStep));
        i = nextStep;
    }
    return a;
}

console.log(toMatrix([1, 2, 3, 4], 2));
console.log(toMatrix([1, 2, 3, 4, 5], 2));
console.log(toMatrix([1, 2, 3, 4, 5], 3));

