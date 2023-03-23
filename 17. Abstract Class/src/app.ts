let cl = console.log;

// abstract :- Not available on there parent class, only avilable on there extended (child) class
// 1) Cannot create an instance of an abstract class
// 2) we write methods function type in parent class and implementation is mandatory in child class


abstract class Department {

    abstract yr: number;

    constructor(
        public dname: string,
        public dId: string
    ) { }


    abstract describe(): void
}



// let acc = new Department('Accounting', '#3232')

class Accounting extends Department {

    yr: number = 2023

    constructor(dn: string, did: string, public isActive: boolean) {
        super(dn, did)
    }


    describe(): void {
        cl(`the department name is ${this.dname}`)
    }


}


let acc1 = new Accounting('Accounting1', '#3232', true)



cl(acc1)