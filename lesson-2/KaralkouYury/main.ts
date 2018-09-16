/* -------------------------------- 1 -------------------------------- */
type allowed = string | number | boolean;

function isInArray(a: allowed[], ...b: allowed[]): boolean {
    const restParamsQty: number = b.length;
    const result = b.reduce((sum: number, next: allowed) => {
        if (!a.includes(next)) {
            return sum;
        }
        return sum += 1;
    }, 0);

    return result === restParamsQty;
}

/* --- call 1 --- */
/* tslint:disable-next-line */
console.log(isInArray([1, 'hoh', 3, 4, 5, 6], 2, 3, 4));

/* *** ВОПРОС: *** */
/* пишет ошибку */
/* lesson-2/KaralkouYury/main.ts(7,16): error TS2339: Property 'includes' does not exist on type 'allowed[]'. */
/* Но я ведь подключил в tsconfig нужную либу. Почему тогда пишет ошибку? */


/* -------------------------------- 2 -------------------------------- */
function isNumber(a: string | number): a is number {
    return typeof a !== 'string';
}

const summator = (...args: (number | string)[]): number => {
    return args.reduce<number>((acc: number, next: number | string) => {
        if (isNumber(next)) {
            return acc += next;
        } else {
            if (!isNaN(parseInt(next))) {
                return acc += parseInt(next);
            } else {
                return acc;
            }
        }
    }, 0);
};

/* --- call 2 --- */
/* tslint:disable-next-line */
console.log(summator(1, 'hoh', 2, '3'));

/* *** ВОПРОС: *** */
/* Раньше писало ошибку */
/*
    lesson-2/KaralkouYury/main.ts(31,5): error TS2322: Type 'string | number' is not assignable to type 'number'.
        Type 'string' is not assignable to type 'number'.
*/
/* Я точно знаю что возвращать буду number. Потому использовал дженерик reduce<U>. Правильно ли это? */


/* -------------------------------- 3 -------------------------------- */
function getUnique(...arr: allowed[]): allowed[] {
    const result: any = [];
    let k: number = 0;

    for (let i = 0; i < arr.length; i++) {
        let j = 0;

        while (j < k && result[j] !== arr[i]) {
            j++;
        }

        if (j === k) {
            result[k++] = arr[i];
        }
    }

    return result;
}

/* --- call 3 --- */
/* tslint:disable-next-line */
console.log(getUnique(1, 2, 3, 3, 'four', 5, 'four', true, 'six', true));


/* -------------------------------- 4 -------------------------------- */

/*
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */
function toMatrix(_data: any[], _rowSize: number): void {}