let cl = console.log;


// Class : - it is a blueprint for creating instance

class Department {

    dname: String;
    dId: String;

    constructor(dname: string, dId: string) {
        this.dname = dname;
        this.dId = dId
    }


    describe() {
        cl(`the department is ${this.dname}`)
    }


}


let dep1 = new Department('Assembly', '#3232');

cl(dep1)


dep1.describe()


let dep2 = new Department('Marketing', '#8732');

cl(dep2)

dep2.describe();




class School {
    sname: string;
    sId: string;
    city: string

    constructor(sn: string, ct: string, id: string) {
        this.sname = sn;
        this.sId = id;
        this.city = ct;
    }

    describe() {
        cl(`the school name is ${this.sname} and it's located in ${this.city} (id is ${this.sId})`)
    }
}




let sc1 = new School('Annapurna International School', 'Hingoli', '#87873');


cl(sc1);

sc1.describe()

let sc2 = new School('Hi-Tech English School', 'Nanded', '#898353');

cl(sc2)

sc2.describe()