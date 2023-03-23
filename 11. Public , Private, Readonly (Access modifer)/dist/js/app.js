"use strict";
let cl = console.log;
// Access Modifer
// 1) public :- It will be available in class and there extended class and there instance
// 2) private:- That property/method will be accessble within a that class only
// 3) readonly:- once initilz then cant change
class Department {
    constructor(dname, dId) {
        this.empArray = [];
        this.dname = dname;
        this.dId = dId;
    }
    describe() {
        cl(`the department is ${this.dname}`);
    }
    hireEmp(name) {
        this.empArray.push(name);
    }
}
let Accounting = new Department('Accounting', 'd-7');
Accounting.hireEmp('Mangesh');
cl(Accounting);
