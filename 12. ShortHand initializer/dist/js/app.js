"use strict";
let cl = console.log;
// shorthand initializers 
class School {
    constructor(schoolName, schoolID // readonly (access modifer)
    ) {
        this.schoolName = schoolName;
        this.schoolID = schoolID;
        this.studnetArray = [];
    }
    addStudent(name) {
        this.studnetArray.push(name);
    }
}
let hiTech = new School('Hi-Tech', 7746);
hiTech.addStudent('Rajesh');
// hiTech.schoolID = 343434
