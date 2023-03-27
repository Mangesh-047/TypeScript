"use strict";
let cl = console.log;
// getter (get) :- to get a value (must return and can not have any parameter)
// setter (set) :- set a value (must have only one parameter)
// getter: This method comes when you want to access any property of an object. A getter is also called an accessor.
// setter: This method comes when you want to change any property of an object. A setter is also known as a mutator.
class Department {
    constructor() {
        this.report = ['TDS', 'Form-16', 'Salary'];
        this.lastReport = this.report[this.report.length - 1];
    }
    get accessLR() {
        return this.lastReport;
    }
    set setLR(cReport) {
        this.lastReport = cReport;
        this.report[this.report.length - 1] = cReport;
    }
}
Department.dName = 'Accounting';
Department.id = '3223';
cl(Department.dName);
cl(Department.id);
let acc1 = new Department();
cl(acc1.accessLR);
acc1.setLR = 'PF';
cl(acc1);
