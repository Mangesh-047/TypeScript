let cl = console.log;

// Static:- a member those are only available on className


class Department {
    static yr: number = 2023
    static id: string = '#3232';

    constructor(
        public dname: string
    ) { }

    static describe() {
        cl('this is static method')
    }
}



let acc = new Department('Accounting')

cl(Department.yr)

cl(Department.id)

Department.describe()