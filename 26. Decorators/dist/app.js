"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let cl = console.log;
// function showMsg(target: Function) {
//     cl('Instance is crated using class Person')
// }
function showMsg(className) {
    return function showMsg(target) {
        cl(`Instance is crated using class ${className}`);
    };
}
let Person = class Person {
    constructor() { }
};
Person = __decorate([
    showMsg('Person')
], Person);
let p = new Person();
let Department = class Department {
    constructor() { }
};
Department = __decorate([
    showMsg('Department')
], Department);
