let cl = console.log;


//-------- Union --------//

let x: string | number;
x = 10;
x = 'ts';







function add(n1: number | string, n2: number | string) {
    // return n1 + n2

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return n1 + n2.toString()
    }
};



let output = add(10, 10);


cl(output)

let output2 = add('hello', ' typescript');


cl(output)





type combinable = string | number;   // union type



function addS(n1: combinable, n2: combinable) {

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return n1 + n2.toString()
    }
}



cl(addS('hello', 0))

type Passenger = {
    fname: string;
    lname: string;
    age: number;
    child: number | null
}



let p1: Passenger = {
    fname: 'jhon',
    lname: 'Doe',
    age: 35,
    child: null
}

let p2: Passenger = {
    fname: 'ronny',
    lname: 'parker',
    age: 31,
    child: 2
}


