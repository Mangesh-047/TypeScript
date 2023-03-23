"use strict";
let cl = console.log;
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1 + n2.toString();
    }
}
cl(add(10, 10));
cl(add(10, '10'));
let obj1 = {
    name: 'Jhon',
    privilages: ['can Hire']
};
let obj2 = {
    name: 'james',
    startDate: new Date(2023, 4)
};
function printEmpInfo(empObj) {
    cl(empObj.name);
    if ('privilages' in empObj) {
        cl(empObj.privilages);
    }
    if ('startDate' in empObj) {
        cl(empObj.startDate);
    }
}
printEmpInfo(obj1);
printEmpInfo(obj2);
//////////////
class Car {
    drive() {
        cl('Driving a Car.....');
    }
}
class Truck {
    drive() {
        cl('Driving a Truck.....');
    }
    loadCargo(amt) {
        cl(`Loading a cargo of ${amt}`);
    }
}
let v1 = new Car();
let v2 = new Truck();
function useVehical(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(100);
    }
}
useVehical(v1);
useVehical(v2);
