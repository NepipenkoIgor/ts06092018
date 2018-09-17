// 1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

function isInArray (arr: any[], arg1: any, ...args: any[]): boolean {
    args = [arg1, ...args];
    return args.every((arg: any) => (arr.includes(arg)));
}

// 2) писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function isString (dataToCheck: number|string): dataToCheck is string {
    return typeof dataToCheck === 'string';
}

function summator (...args: string[]): number;
function summator (...args: number[]): number;
function summator (...args: (number|string)[]): number {
    return args.reduce((acc: number, arg: (number|string)) => {
        if (isString(arg)) {
            arg = +arg;
        }
        return acc += arg;
    }, 0);
}

// 3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.

function getUnique (...args: any[]): any[] {
    return [...new Set(args)];
}

// 4) Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//     возвращает новый массив. Число показывает количество элементов в подмассивах,
//     элементы подмассивов беруться из массива data.
//     Оригинальный массив не должен быть изменен.

function toMatrix (data: any[] = [], rowSize: number = 0) {
    return data.reduce((matrix: any[][], element: any, index: number) => {
        if (index % rowSize === 0) {
            matrix.push([element]);
        } else {
            matrix[matrix.length - 1].push(element);
        }
        return matrix;
    }, []);
}
