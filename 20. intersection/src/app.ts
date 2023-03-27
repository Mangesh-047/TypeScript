let cl = console.log;

type comb = number | string;


type Admin = {
    name: string,
    privilages: Array<string>
}

type Emp = {
    name: string,
    startDate: Date
}

type ELevetedEmp = Admin & Emp;

let emp1: ELevetedEmp;

emp1 = {
    name: 'Jhon',
    privilages: ['can hire'],
    startDate: new Date(2023, 5)
}

type Combinable = string | number;
type Numeric = number | boolean;  // number is common in both type


type ComNum = Combinable & Numeric

let x: ComNum; // datatype of x is number

x = 123;
// x = 'fsdaf'
// x = true

