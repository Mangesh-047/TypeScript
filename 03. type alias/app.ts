var cl = console.log;




//---- type alias ----//

type Tperson = {    // we use equal to sign in type alias
    fName: string;
    lName: string;
    age: number;
    skills: string[];
    salary?: string;
}


let person: Tperson = {
    fName: 'Jhon',
    lName: 'Doe',
    age: 24,
    skills: ['html', 'css', 'js']
}



person.salary = '60k';

cl(person)

delete person.salary;

cl(person)



type Tstudent = {
    fname: string;
    lname: string;
    age: number;
    std: string;
    id: string;
    subject: string[];
}

let std1: Tstudent = {
    fname: 'joe',
    lname: 'Doe',
    age: 17,
    std: '12th',
    id: '#7321',
    subject: ['Biology', 'Physics', 'Chemistrey', 'mathematics']
}


cl(std1)













