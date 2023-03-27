var cl = console.log;
//---- function retuen type ----//
function add(n1, n2) {
    return n1 + n2;
}
;
function combine(str1, str2) {
    // return str1 + str2
    return "".concat(str1, " ").concat(str2);
}
;
function combine2(str1, str2) {
    // return str1 + str2
    return "".concat(str1, " ").concat(str2);
}
;
function add2(n1, n2) {
    cl(n1 + n2);
}
add2(1, 1);
function printObj(fn, ln, age) {
    return ({
        fname: fn,
        lname: ln,
        age: age
    });
}
var obj = printObj('mangesh', 'dhole', 25);
cl(obj);
// calculator
function add1wd(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function multi(x, y) {
    return x * y;
}
cl(multi(2, 9));
// function calc(num1: number, num2: number, cb): number {
//     return cb(num1, num2)
// }
// cl(calc(add(2, 2)))
// function return type
function addN(n1, n2) {
    return n1 + n2;
}
function addS(n1, n2) {
    return (n1 + n2).toString();
}
function addx(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1 + n2.toString();
    }
}
cl(addx(10, '10'));
cl(addx(10, 10));
function addv(n1, n2) {
    cl(n1 + n2);
}
function addNub(n1, n2, resultconv) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1 + n2.toString();
    }
    if (resultconv === 'n') {
        return Number(result);
    }
    else {
        return result.toString();
    }
}
cl(addNub(10, 10, 'n'));
