/*1)
Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.


2)
писать функцию summator(), которая сумирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено


3)
Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.

4)

Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
    возвращает новый массив. Число показывает количество элементов в подмассивах,
    элементы подмассивов беруться из массива data.
    Оригинальный массив не должен быть изменен.*/


// 1

function isInArray(arr: [], ...rest: []): boolean {
    let result: boolean = true;
    for (let i: number = 0; i < rest.length; i++) {
        if (arr.indexOf(rest[i]) === -1) {
            result = false;
            break;
        }
    }
    return result;
}

// 2

function summator(...rest: (number | string)[]): number {
    return rest.reduce((sum: number, el: string | number) => {
        if (typeof el === 'string') {
            return sum += parseInt(el);
        } else {
            return sum += el;
        }
    }, 0);
}

// 3

function getUnique(...arr: []): [] {
    const result: [] = [];
    arr.forEach((item) => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    });
    return result;
}

// 4

function toMatrix(data: [], rowSize: number): any[][] {
    const result: any[][] = [];
    data.forEach((item: any) => {
        if (result.length === 0 || result[result.length - 1].length === rowSize) {
            result.push([]);
        }
        result[result.length - 1].push(item);
    });
    return result;
}