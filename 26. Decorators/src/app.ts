let cl = console.log;



// function showMsg(target: Function) {
//     cl('Instance is crated using class Person')
// }


function showMsg(className: string) {
    return function showMsg(target: Function) {
        cl(`Instance is crated using class ${className}`)
    }
}


@showMsg('Person')
class Person {
    constructor() { }
}

let p = new Person()

@showMsg('Department')
class Department {
    constructor() { }
}