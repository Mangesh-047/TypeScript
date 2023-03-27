let cl = console.log;


// singletone | private constructor
// A class which can create only one instance/object


class School {

    static instance: School;

    private constructor(
        public schoolName: string,
        public schoolID: string
    ) { }

    static getInstance(dn: string, id: string) {
        if (School.instance) {
            return this.instance
        } else {
            return this.instance = new School(dn, id)
        }
    }

}



cl(School.instance) // undefined

let sch1 = School.getInstance('HI-Tech', '#3232')
let sch2 = School.getInstance('English', '#3232')

cl(School.instance)


cl(sch1)
cl(sch2)

/////////////////////////////////////////////////////////////////////////////////


abstract class Department {

    constructor(
        public dname: string,
        public dID: string
    ) { }

    abstract describe(): void
}


class Accounting extends Department {

    static instance: Accounting

    private constructor(
        dn: string,
        id: string,
        public yr: number
    ) {
        super(dn, id)
    }

    describe(): void {
        cl(`the name of this Department is ${this.dname}`)
    }

    static getInstance(dn: string, id: string, yr: number) {
        if (Accounting.instance) {
            return this.instance
        } else {
            return this.instance = new Accounting(dn, id, yr)
        }
    }

}


// let acc1 = new Accounting('Accounting-1', '#3232', 2023);


let acc1 = Accounting.getInstance('Accounting_1', '#3232', 2023)
let acc2 = Accounting.getInstance('Accounting_2', '#3333', 2023)

cl(acc1)
cl(acc2)




class Company {

    static instance: Company;

    private constructor(
        public cname: string,
        public cID: string
    ) { }

    static genInstance(cn: string, id: string) {
        if (Company.instance) {
            return this.instance
        } else {
            return this.instance = new Company(cn, id)
        }
    }

}

// let c1 = new Company('MRF', '#2323')

let acc = Company.genInstance('Mrf', '#3232')
let acc11 = Company.genInstance('Mrdasdf', '#3dasda232')

cl(acc, acc11)