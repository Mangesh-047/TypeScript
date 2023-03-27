let cl = console.log;


//---- function return type ----//


function add(n1: number, n2: number): number {
    return n1 + n2
};



function combine2(str1: string, str2: string): string {
    // return str1 + str2
    return `${str1} ${str2}`
};

function add2(n1: number, n2: number): void {   // function return type void // void:- return ntg
    cl(n1 + n2)
}
add2(1, 1)


function printObj(fn: string, ln: string, age: number): { fname: string; lname: string; age: number } {
    return ({
        fname: fn,
        lname: ln,
        age: age
    })
}


let obj = printObj('Mangesh', 'Dhole', 25);

cl(obj)





function add1wd(x: number, y: number): number {
    return x + y
}

function sub(x: number, y: number): number {
    return x - y
}

function multi(x: number, y: number): number {
    return x * y
}






// 


function addN(n1: number, n2: number): number {
    return n1 + n2
}


function addS(n1: number, n2: number): string {
    return n1 + n2.toString()
}



type combinable = string | number

function addx(n1: combinable, n2: combinable): combinable {

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return n1 + n2.toString()
    }

}


cl(addx(10, '10'))
cl(addx(10, 10))




function addv(n1: number, n2: number): void {   // function return type void
    cl(n1 + n2)
}



function addNub(n1: combinable, n2: combinable, resultconv: 'n' | 's'): number | string {

    let result;

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2
    }
    else {
        result = n1 + n2.toString()
    }

    if (resultconv === 'n') {
        return Number(result)
    } else {
        return result.toString()
    }
}

cl(addNub(10, 10, 'n'))