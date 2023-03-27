"use strict";
let cl = console.log;
class Department {
    constructor(dname, dId) {
        this.dname = dname;
        this.dId = dId;
        this.empArray = [];
        this.accessCode = 4747;
    }
    addEmp(empName) {
        this.empArray.push(empName);
    }
}
let dep = new Department('Accounting', '#8932');
cl(dep);
class Accounting extends Department {
    constructor(dn, id, currentYr) {
        super(dn, id);
        this.currentYr = currentYr;
        this.accessCode = 5050;
    }
    addEmp(empName) {
        if (empName === 'Jhon') {
            return;
        }
        else {
            this.empArray.push(empName);
        }
    }
    showAcCode() {
        return this.accessCode;
    }
}
let dep2 = new Accounting('Manegement', '#787d', 2023);
dep2.addEmp('Jhon');
dep2.addEmp('Raju');
cl(dep2.showAcCode());
cl(dep2);
