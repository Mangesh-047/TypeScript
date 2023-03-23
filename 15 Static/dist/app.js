"use strict";
let cl = console.log;
// Static:- a member those are only available on className
class Department {
}
Department.dName = 'Accounting';
Department.id = '3223';
cl(Department.dName);
cl(Department.id);
