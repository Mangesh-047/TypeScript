"use strict";
// let cl = console.log;
class person {
    constructor(fn, age) {
        this.fname = fn;
        this.age = age;
    }
    describe(pharse) {
        cl(`${pharse} ${this.fname}`);
    }
}
let p1 = new person('Jhon', 33);
p1.fname = 'fsdf';
