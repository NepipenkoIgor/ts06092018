/*
Задача 1:
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
 */

const isInArray = (arr: any[], ...rest: any[]): boolean => {
    return rest.every(function(item) {
        return arr.includes(item);
    });
};

const testArray = [1, 'cat', 'dog', 22, '17'];

// console.log(isInArray(testArray, 1, 22, 'dog', 44));


// ==================================================================================================================

/*
2)
писать функцию summator(), которая сумирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

const summator = (...args: any[]): number => {
    return args.reduce((sum: number, current: (string | number)): number => {
        current = isString(current) ? parseFloat(current) : current;
        return sum + (current || 0);
    }, 0);
}

// console.log(summator(2, '12', '22', 3, 'qqq', '1'));

// ==================================================================================================================

/*
3)
Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.
*/

const getUnique = (...args: any[]): any[] => {
    // return [...new Set(args)]; // не работает пока :(
    return args.slice().filter((item, index, self) => {
        return self.indexOf(item) === index;
    });
}

// console.log(getUnique(1, 1, 'w', 's', 'd', 'd', 11, 12));


// ==================================================================================================================

/*
4)

Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
    возвращает новый массив. Число показывает количество элементов в подмассивах,
    элементы подмассивов беруться из массива data.
    Оригинальный массив не должен быть изменен.
*/

const toMatrix = (data: any[], rowSize: number) => {
    return data.slice().reduce((result, item, index) => {
        const chunk = Math.floor(index / rowSize);
        result[chunk] = [].concat((result[chunk] || []), item);
        return result;
    }, []);
}

// console.log(toMatrix([1, 1, 'w', 's', 'd', 'd', 11, 12], 3));

// вспомогательные функции
function isString(a: string | number): a is string {
    return typeof a === 'string';
}