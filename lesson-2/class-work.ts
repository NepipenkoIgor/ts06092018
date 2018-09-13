// function getAverage(a: number, b: number, c: number): string {
//     const total = a + b + c;
//     const average = total / 3;
//     return `Average is ${average}`;
// }
//
// getAverage(1, 2);
// getAverage(1, '2', 4);
// getAverage(1, 2, 3);


// function getAverage(a: number, b: number, c?: number): string {
//     let total = a + b;
//     let count = 2;
//     if (typeof c !== 'undefined') {
//         total += c;
//         count++;
//     }
//     const average = total / count;
//     return `Average is ${average}`;
// }
//
// getAverage(1, 2);
// getAverage(1, '2', 4);
// getAverage(1, 2, 3);

// function getAverage(a: number, b: number, c: number = 0): string {
//     const total = a + b + c;
//     const average = total / 3;
//     return `Average is ${average}`;
// }
//
// getAverage(1, 2);
// getAverage(1, '2', 4);
// getAverage(1, 2, 3);

// function getAverage(...a: number[]): string {
//     const average = a.reduce((sum: number, el: number) => {
//         return sum += el;
//     }, 0) / a.length;
//     return `Average is ${average}`;
// }
//
// getAverage(1, 2);
// getAverage(1, 2, 4, 5);
// getAverage(1, '2', 4, 5);
// let arr: [number, string] = ['a', 1];
//
// function getAverage({ value }: { value: string }): string {
//     const result = `${value}`;
//     // let [c, d] = a;
//     // const average = a.reduce((sum: number, el: number) => {
//     //     return sum += el;
//     // }, 0) / a.length;
//     // return `Average is ${average}`;
// }
//
// getAverage(1, 2);
// getAverage(1, 2, 4, 5);
// getAverage(1, '2', 4, 5);

// function isString(a: string | number): a is number {
//     return typeof a !== 'string';
// }
//
// function getAverage(a: string, b: string): number;
// function getAverage(a: number, b: number): string;
// function getAverage(a: string | number, b: string | number): string | number {
//     let total;
//     if (isString(a)) {
//
//         let d = a.toFixed();
//     } else {
//         total = parseInt(a);
//     }
//
//
// }
//
// // getAverage('s', 's');
// // getAverage('s', 's', 1);
// // getAverage(1, 1);
// // getAverage(1, 1, 1);
// getAverage('s', 1);
// getAverage(1, 1);
// getAverage('1', '1');

// function getAverage(a: string | number, b: string | number, c?: number): string | number {
//
// }
//
// getAverage('s', 1);
// getAverage(1, 1);
// getAverage('s', 's');

// class Point {
//     public constructor(
//         public x: number,
//         public y: number
//     ) {
//         this.x = x;
//         this.y = y;
//     }
//
//     // sum(): number {
//     //     this.y = 1;
//     // }
// }

// class SuperPoint {
//     public x: number = 1;
//     protected y: number = 1;
//    // private z: number = 1;
// }
//
// const p1 = new SuperPoint();
// p1.y;
//
// class Point extends SuperPoint {
//     public constructor() {
//         super();
//     }
// }

// class Singleton {
//     private static readonly  instance: Singleton;
//
//     private constructor() {}
//
//     public static getInstance() {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
//
// }
//
// let inst1 = Singleton.getInstance();
// let inst2 = Singleton.getInstance();

interface IX {
    x: number;
}

interface IY {
    y: number;
}

abstract class AbstractPoint implements IX {
    public x: number = 0;

    public abstract sum(): number;

    public getX(): number {
        return this.x;
    }
}

class Point1 extends AbstractPoint {
    public x: number = 1;

    public sum(): number {
        return 100;
    }
}

class Point2 extends AbstractPoint {
    public x: number = 1;

    public sum(): number {
        return this.x * 10;
    }
}