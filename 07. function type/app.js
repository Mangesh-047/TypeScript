var cl = console.log;
// fucntion type
function add(n1, n2) {
    return n1 + n2;
}
function print(str) {
    return str;
}
var combine = add;
// combine = print
combine(20, 20);
function printmsg(str1, str2, age) {
    var result = "Hellow there, my name is ".concat(str1, " ").concat(str2, " and i am ").concat(age, "yr old");
    return result;
}
cl(printmsg('Mangesh', 'Dhole', 25));
var someMsg;
someMsg = printmsg;
cl(someMsg('peter', 'parker', 27));
