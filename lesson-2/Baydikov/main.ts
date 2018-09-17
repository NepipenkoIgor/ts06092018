/* isInArray() */
function isInArray(a: number[], b: number, ...c: number[]): boolean;
function isInArray(a: string[], b: string, ...c: string[]): boolean;
function isInArray(a: (number|string)[], b: (number|string), ...c: (number|string)[]): boolean {
    const d = [b, ...c];
    for (let i = 0; i < d.length; i++) {
        if (a.indexOf(d[i]) === -1) {
            return false;
        }
    }
    return true;
}

// console.log(isInArray([1, 2, 3], 2));
// console.log(isInArray(['1', '2', '3'], '2'));
// console.log(isInArray([1, 2, 3], 2, 3));
// console.log(isInArray([1, 2, 3], 2, 4));


/* summator() */
function isString(a: string | number): a is string {
    return typeof a === 'string';
}

function summator(...a: (number|string)[]): number {
    return a.reduce((sum: number, item: (number|string)) => {
        const value = isString(item) ? parseFloat(item) : item;
        return sum + value;
    }, 0);
}

// console.log(summator(1, '2', '3.5', 4.5));


/* getUnique() */
function getUnique(...values: (number|string|boolean|null)[]) {
    return [...new Set(values)];
}

// console.log(getUnique(1, 2, 2));
// console.log(getUnique(1, '2', '2'));
// console.log(getUnique(1, null, null));


/* toMatrix() */
function toMatrix(data: any[], rowSize: number): [][] {
    const res: [][] = [];
    let i = 0;
    let idx = 0;

    if (!data.length) {
        return res;
    }
    data.forEach(item => {
        if (i === rowSize) {
            i = 0;
            idx++;
        }
        if (i === 0) {
            res[idx] = [];
        }
        res[idx].push(item);
        i++;
    });
    return res;
}

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(toMatrix(ar, 2));
