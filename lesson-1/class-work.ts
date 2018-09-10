// interface IAccount {
//     firstName: string;
// }
//
// const person = IAccount;

// const account =  {
//     fitstName: 'Igor',
// };
//
// let person: typeof account ;
//
// person = {
//     fitstName: 'Igor',
// };

// class Account {
//
// }
//
// let person: Account;
// let person1  = new Account();

// let a: string = 'sdas';
// let b: string;
// b = 'sdas';
//
// let c = 'sda';
//
// c = 1;

// let myName: string | null = 'Igor';
// myName  = null;

// TODO unknow ???
// let a: any;
// a = 1;
// a = function () {
//
// }

// let b: void = undefined;
//
// function f(): void {
//
// }

// const account: {
//     readonly firstName: string,
//     readonly age?: number;
// } = {
//     firstName: 'Igor',
// };
// account.firstName = 'Vlad';
// account.age = 25;

// account = {
//     firstName: 'Igor',
//     age: 32,
//     male: true
// };

// let list: ReadonlyArray<string | number> = ['s', 1];
// list.push(1);
// list[100] = 1;
//
// interface IAccount {
//     firstName: string;
// }
//
// let a: Partial<IAccount>;
//
// let cb: new (a: number) => void;
// let cb1: { new (a: number): void };
// type AccountType = {
//     info: string;
//     // readonly firstName: string,
//     // readonly age?: number;
//     // getFullName: () => string;
// };
// const account: AccountType = {
//     firstName: 'Igor',
// };
//
// const account1: AccountType = {
//     firstName: 'Igor',
// };
//
// interface IFistName {
//     readonly firstName: string;
// }
//
// interface IAge {
//     readonly age: number;
// }

//
// interface IAccount extends IFistName, IAge, AccountType {
//     getFullName?: () => string;
// }
// let propNumber:  IAccount['age'] = 1;
//
// class Person implements IAccount {
//     public readonly firstName = 'Igor';
//     public readonly age = 32;
//     public  info = 'asdasd';
// }


// let obj: { [key: string]: IAge } = {
//     igor: {
//         age: 35
//     },
//     dmitry: {
//         age: 30
//     },
// }

// type Person<T, U> = {
//     id: U,
//     account: T;
// };
//
// interface IAdmin {
//     users: IUser[];
// }
//
// interface IUser {
//     firstName: string;
// }
//
// let admin: Person<IAdmin, number> = {
//     id: 1,
//     account: {
//         users: [{ firstName: 'Igor' }]
//     }
// };
// let user: Person<IUser, string> = {
//     id: 'asdasd',
//     account: { firstName: 'Igor' }
// };
//
// let a: Array<string>;