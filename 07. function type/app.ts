let cl = console.log;


// fucntion type

function add(n1: number, n2: number): number {
    return n1 + n2
}

function print(str: string): string {
    return str
}

let combine: (n1: number, n2: number) => number = add;



// combine = print

combine(20, 20)




function printmsg(str1: string, str2: string, age: number): string {
    let result = `Hellow there, my name is ${str1} ${str2} and i am ${age}yr old`

    return result

}


cl(printmsg('Mangesh', 'Dhole', 25))



let someMsg: (str1: string, str2: string, age: number) => string;


someMsg = printmsg

cl(someMsg('peter', 'parker', 27));





type addFun = (n1: number, n2: number) => number

function add2(n1: number, n2: number): number {
    return n1 + n2
}


let add1: addFun;

add1 = add2
