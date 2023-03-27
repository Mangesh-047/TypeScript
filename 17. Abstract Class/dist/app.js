"use strict";
let cl = console.log;
// abstract :- Not avialbe on there parent class, only avilable on there extended (child) class
// 1) Cannot create an instance of an abstract class
// 2) we define method in parent class and implementation in child class
class Department {
    constructor(dname, dId) {
        this.dname = dname;
        this.dId = dId;
    }
}
// let acc = new Department('Accounting', '#3232')
class Accounting extends Department {
    constructor(dn, id) {
        super(dn, id);
        this.yr = 2023;
    }
    describe() {
        cl(`the department name is ${this.dname}`);
    }
    static getInstance(dname) {
        if (Accounting.instance) {
            return this.instance;
        }
        else {
            return this.instance = new Accounting(dname, '#3232');
        }
    }
}
// let acc1 = new Accounting('Accounting1', '#3232')
// let acc2 = new Accounting('Accounting2', '#3333')
let acc1 = Accounting.getInstance('Accountion and Sales1');
let acc2 = Accounting.getInstance('Accountion and Sales2');
cl(Accounting.instance);
cl(acc1);
cl(acc2);
