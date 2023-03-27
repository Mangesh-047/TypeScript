




interface addFun {
    (n1: number, n2: number): number
}


// function add(n1: number, n2: number): number {
//     return n1 + n2
// }


let add1: addFun;

add1 = (n1: number, n2: number): number => {
    return n1 + n2
}

cl(add1(10, 10))