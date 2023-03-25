// let cl = console.log;

// readonly on interface :- if we use readonly property Descriptor in interface, we can not change value of that property on instace / object
// readonly on inside class :- we can not change value of that property inside class



// interface Iperson {
//     readonly name: string,
//     readonly age: number,
//     describe(pharse: string): void
// }



// class person implements Iperson {


//     constructor(
//         public name: string,
//         public age: number
//     ) { }

//     describe(pharse: string): void {
//         cl(`${pharse} ${this.name} `)
//         this.name = 'james'
//     }
// }



// let p1 = new person('Jhon', 33)

// p1.fname = 'fsdf'