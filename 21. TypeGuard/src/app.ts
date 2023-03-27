let cl = console.log;


// typeguard :- If there is union type then we use typeguard 


type combinable = number | string;


function add(n1: combinable, n2: combinable): combinable {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return n1 + n2.toString()
    }
}

cl(add(10, 10))
cl(add(10, '10'))

/////////////////

type Admin = {
    name: string,
    privilages: Array<string>
}

type Emp = {
    name: string,
    startDate: Date
}

type ELevetedEmp = Admin | Emp

let obj1: ELevetedEmp = {
    name: 'Jhon',
    privilages: ['can Hire']
}


let obj2: ELevetedEmp = {
    name: 'james',
    startDate: new Date(2023, 4)
}

function printEmpInfo(empObj: ELevetedEmp) {
    cl(empObj.name)

    if ('privilages' in empObj) {
        cl(empObj.privilages)
    }
    if ('startDate' in empObj) {
        cl(empObj.startDate)
    }
}


printEmpInfo(obj1)
printEmpInfo(obj2)

//////////////


class Car {
    drive() {
        cl('Driving a Car.....')
    }
}

class Truck {
    drive() {
        cl('Driving a Truck.....')
    }

    loadCargo(amt: number) {
        cl(`Loading a cargo of ${amt}`)
    }
}


let v1 = new Car();
let v2 = new Truck();

type vehical = Car | Truck


function useVehical(v: vehical) {

    v.drive()

    if (v instanceof Truck) {
        v.loadCargo(100)

    }
}


useVehical(v1)
useVehical(v2)