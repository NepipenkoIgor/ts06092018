/*
1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
 */


function isInArray(array: any[], ...args: any[]): boolean {

    /*  не  очень уверен что сработает для такого.
        let test = [1, [1,2], 3, 4]
        let test2 = [1, [1,2], 3, 4];
     */
    return args.every((value: any) => {
        return array.includes(value);
    });


}

/*
2)
 писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */

function summator(...args: (string | number)[]): number {


    return args.reduce((total_value: number, current_value: string | number) => {

        if (is_string(current_value)) {
      //  if (typeof (current_value) === 'string'){
            current_value = parseInt(current_value);
        }

        return total_value + current_value;
    }, 0);
}


//не понял честно говоря какой толк таки - это же обычный js.
function is_string(value: string | number): value is string
{
    return typeof value === 'string';
}



/*
3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.

 */

function getUnique(...args: any[]): any[] {

    return args.filter((number: any, index: number, mass) => {
        return mass.indexOf(number) === index;
    });

}

/*
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */

//возможно не самый лучший способ, но ничего другого в гоову не лезет пока что
function toMatrix(data: any[], rowSize: number): any[] {

    let new_data = [];
    let current = 0;
    let cicles = Math.ceil(data.length / rowSize);

    while (current < cicles) {
        let from = current * rowSize;
        let to = from + rowSize;

        new_data[current] = data.slice(from, to);
        current++;
    }

    return new_data;
}

console.log('isInArray');
console.log(isInArray([1, 2, 3, 4, 5], 1));

console.log('summator');
console.log(summator(1, 2, 5, 6, 10));

console.log('getUnique');
console.log(getUnique(1, 2, 3, 4, 4, 4, 4, 't'));

console.log('toMatrix');
console.log(toMatrix([1, 'u', 3, 4, 5, 6, 7], 3));