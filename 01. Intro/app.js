var cl = console.log;
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
var result = document.getElementById('result');
function add(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    cl(add(+num1.value, +num2.value));
    if (typeof add(+num1.value, +num2.value) === 'number') {
        result.innerHTML = '' + add(+num1.value, +num2.value);
    }
    if (result.innerHTML === 'NaN') {
        result.innerHTML = 'Please Enter Vaild Number';
    }
    num1.value = '';
    num2.value = '';
});
