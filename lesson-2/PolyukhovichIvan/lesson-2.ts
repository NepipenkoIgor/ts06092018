// 1)
//     Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

export function isInArray(arr: any[], ...args: any[]): boolean {
    const preparedArrForMap = arr.map(item => [item, true] as [any, boolean]);
    const argsMap = new Map(preparedArrForMap);

    return args.length ? args.every(arg => argsMap.has(arg)) : false;
}

// 2)
//     писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

export function summator<T>(...args: T[]): number {
    return args.reduce((acc: number, item: T) => {
        acc += typeof item === 'number' ? item : (parseInt(String(item), 10) || 0);

        return acc;
    }, 0);
}

type StringOrNumber = string | number;

export function summatorOverload(...args: number[]): number;
export function summatorOverload(...args: string[]): number;
export function summatorOverload(...args: StringOrNumber[]): number {
    return args.reduce((acc: number, item: StringOrNumber) => {
        acc += typeof item === 'number' ? item : (parseInt(String(item), 10) || 0);

        return acc;
    }, 0);
}

// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.

export function getUnique(...args: StringOrNumber[]): StringOrNumber[] {
    const uniqSet: {[key: string]: boolean} = Object.create(null);
    const uniq: StringOrNumber[] = [];

    args.forEach(arg => {
        if (!(arg in uniqSet)) {
            uniqSet[arg] = true;
            uniq.push(arg);
        }
    });

    return uniq;
}

export function getUniqueSet(...args: any[]): any[] {
    return [...new Set(args)];
}

// 4)
//
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//     возвращает новый массив. Число показывает количество элементов в подмассивах,
//     элементы подмассивов беруться из массива data.
//     Оригинальный массив не должен быть изменен.

export function toMatrix(data: number[], rowSize: number): number[][] {
    const matrix: number[][] = [];

    for (let cursor = 0; cursor < data.length; cursor += rowSize) {
        const row: number[] = data.slice(cursor, cursor + rowSize);
        matrix.push(row);
    }

    return matrix;
}
