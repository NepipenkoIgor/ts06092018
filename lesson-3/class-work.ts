// class MathLib {
//     @logMethod
//     public areaOfCircle(r: number): number {
//         return Math.PI * r ** 2;
//     }
// }
//
// function logMethod(_target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const originalDescValue = descriptor.value;
//     return {
//         ...descriptor,
//         value: (...args: any[]) => {
//             const b = args.map((a: any) => JSON.stringify(a))
//                 .join();
//             const result = originalDescValue(args);
//             const r = JSON.stringify(result);
//             console.log(`Call : ${key}(${b}) => ${r}`);
//             return result;
//         }
//     };
// }
//
// let m = new MathLib();
// m.areaOfCircle(10);
// m.areaOfCircle(34);


function logProperty(target: any, key: string) {

    let _val = target[key];
    const getter = (): typeof _val => {
        console.log(`Get: ${key}=> ${_val}`);
        return _val;
    };

    const setter = (newVal: typeof _val) => {
        console.log(`Set: ${key}=> ${newVal}`);
        _val = newVal;
    };

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
    });

}

class Account {
    @logProperty
    public firstName = 'Igor';
}

const person = new Account();
person.firstName = 'Vlad';
const firstName = person.firstName;