let cl = console.log;


// Access Modifer

// 1) public :- It will be available in class and there extended class and there instance
// 2) private:- That property/method will be accessible within a that class only
// 3) readonly:- once initialize then cant change value


class Department {

    public readonly dname: String;
    private readonly dId: String;
    // empArray: string[] = [];
    private empArray: Array<string> = [];

    constructor(dname: string, dId: string) {
        this.dname = dname;
        this.dId = dId
    }

    public describe() {  // prototype member (method)
        cl(`the department is ${this.dname} with ${this.dId}`)
    }
    addEmp(name: string) {

        this.empArray.push(name)
    }

}

let accounting = new Department('Accounting', 'd-7');


accounting.addEmp('Mangesh')

// accounting.empArray.push('Pavan')

cl(accounting)





