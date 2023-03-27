"use strict";
let cl = console.log;
// public :- it will accessible in class and there extends class as well as there instance
// protected : it will accesible in class and there extends class but not on there instance
// private :- it will accessible in within a that class
class Department {
    constructor(dname, dID) {
        this.dname = dname;
        this.dID = dID;
        this.empArr = [];
    }
    describe() {
        cl(`the department name is ${this.dname}`);
    }
    addEmp(name) {
        this.empArr.push(name);
    }
    someMetod() {
    }
}
class Accounting extends Department {
    // carryforword   (dn, id)
    constructor(dn, id, reports, dmember) {
        super(dn, id);
        this.reports = reports;
        this.dmember = dmember;
    }
    addReport(rep) {
        this.reports.push(rep);
    }
    printReport() {
        return this.reports.toString();
    }
    addEmp(emp) {
        if (emp === 'Jhon') {
            return;
        }
        else {
            this.empArr.push(emp);
        }
    }
}
let accounting = new Accounting('accountin', 'd-123', ['TDS', 'Salary'], 55);
cl(accounting);
// accounting.describe()
// accounting.reports[2] = 'form 16'
accounting.addReport('form-16');
cl(accounting.printReport());
// inheritance
class School {
    constructor(schoolName, schoolId) {
        this.schoolName = schoolName;
        this.schoolId = schoolId;
        this.studentArray = [];
    }
    describe() {
        cl(`The name of school is ${this.schoolName}`);
    }
}
class UpdateSchool extends School {
    constructor(sname, id, currentYr) {
        super(sname, id);
        this.currentYr = currentYr;
    }
    addStudent(sName) {
        this.studentArray.push(sName);
    }
}
let hiTech = new UpdateSchool('hiTech', '#6689', 2023);
// hiTech.describe()
hiTech.addStudent('Mangesh');
cl(hiTech);
