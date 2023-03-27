let cl = console.log;


// shorthand initializers 

class School {

    private studnetArray: Array<string> = [];


    constructor(
        public readonly schoolName: string,
        public readonly schoolID: number  // readonly (access modifer)
    ) { }

    addStudent(name: string) {
        this.studnetArray.push(name)
    }
}



let hiTech = new School('Hi-Tech', 7746)

hiTech.addStudent('Rajesh')


// hiTech.schoolID = 343434