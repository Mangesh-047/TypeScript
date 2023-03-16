let cl = console.log;



const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;
const btn = document.getElementById('btn')!;
const result = document.getElementById('result')!;

function add(n1: number, n2: number) {
    return n1 + n2
}

btn.addEventListener('click', function () {
    cl(add(+num1.value, +num2.value))



    if (typeof add(+num1.value, +num2.value) === 'number') {
        result.innerHTML = '' + add(+num1.value, +num2.value)
    }

    if (result.innerHTML === 'NaN') {
        result.innerHTML = 'Please Enter Vaild Number'
    }
    num1.value = ''
    num2.value = ''
})



