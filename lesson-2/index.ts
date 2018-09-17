/*
1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.


 */


function isInArray(item1: any[], ...args: any[]): any {

    console.log('item:');
    console.log(item1);

    return item1;
}

console.log(isInArray([1,2,3,4], 1));