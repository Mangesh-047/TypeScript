let cl = console.log;

class Department {

    protected empArray: Array<string> = []

    protected accessCode: number = 4747
    constructor(
        public dname: string,
        public dId: string
    ) { }

    addEmp(empName: string): void {
        this.empArray.push(empName)
    }
}

let dep = new Department('Accounting', '#8932')

cl(dep)



class Accounting extends Department {

    protected accessCode: number = 5050

    constructor(
        dn: string,
        id: string,
        public currentYr: number
    ) {
        super(dn, id)
    }

    addEmp(empName: string): void {

        if (empName === 'Jhon') {
            return
        } else {
            this.empArray.push(empName)
        }

    }

    showAcCode(): number {
        return this.accessCode
    }
}


let dep2 = new Accounting('Manegement', '#787d', 2023)


dep2.addEmp('Jhon')
dep2.addEmp('Raju')



cl(dep2.showAcCode())


cl(dep2)