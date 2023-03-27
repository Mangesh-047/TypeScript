var cl = console.log;
//-------- Union --------//
var x;
x = 10;
x = 'ts';
function add(n1, n2) {
    // return n1 + n2
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1 + n2.toString();
    }
}
;
var output = add(10, 10);
cl(output);
var output2 = add('hello', ' typescript');
cl(output);
function addS(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1 + n2.toString();
    }
}
cl(addS('hello', 0));
var p1 = {
    fname: 'jhon',
    lname: 'Doe',
    age: 35,
    child: null
};
