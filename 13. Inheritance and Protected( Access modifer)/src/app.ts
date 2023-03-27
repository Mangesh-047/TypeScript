let cl = console.log;

// public :- it will accessible in class and there extends class as well as there instance
// protected : it will accesible in class and there extends class but not on there instance
// private :- it will accessible in within a that class

class Department {

    protected empArr: Array<string> = []

    constructor(public dname: string, private readonly dID: string) {

    }

    describe(): void {
        cl(`the department name is ${this.dname}`)
    }
    addEmp(name: string): void {
        this.empArr.push(name)
    }
    protected someMetod() {

    }
}

class Accounting extends Department {

    // carryforword   (dn, id)
    constructor(dn: string, id: string, private reports: Array<string>, public dmember: number) {
        super(dn, id)
    }

    addReport(rep: string): void {
        this.reports.push(rep)
    }

    printReport(): string {
        return this.reports.toString()
    }

    addEmp(emp: string): void {   // method overrinding
        if (emp === 'Jhon') {
            return
        } else {
            this.empArr.push(emp)
        }
    }
}






let accounting = new Accounting('accountin', 'd-123', ['TDS', 'Salary'], 55);

cl(accounting)

// accounting.describe()


// accounting.reports[2] = 'form 16'
accounting.addReport('form-16')


cl(accounting.printReport())




// inheritance
class School {

    protected studentArray: Array<string> = [];

    constructor(
        public schoolName: string,
        public schoolId: string
    ) { }

    describe() {
        cl(`The name of school is ${this.schoolName}`)
    }
}

class UpdateSchool extends School {

    constructor(
        sname: string,
        id: string,
        public currentYr: number
    ) {
        super(sname, id)
    }

    addStudent(sName: string) {
        this.studentArray.push(sName)
    }
}

let hiTech = new UpdateSchool('hiTech', '#6689', 2023)


// hiTech.describe()

hiTech.addStudent('Mangesh')
cl(hiTech)
