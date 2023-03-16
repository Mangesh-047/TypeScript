let cl = console.log;

// interface 


interface Iperson {
    fname: string;
    lname: string;
    age: number;
    skills: string[];
    child: number | null;
    dob?: string;
}


let person: Iperson = {
    fname: 'jhon',
    lname: 'doe',
    age: 35,
    skills: ['html', 'css', 'js', 'angular'],
    child: 2
};

let person2: Iperson = {
    fname: 'jhonny',
    lname: 'doe',
    age: 39,
    skills: ['html', 'css', 'js', 'angular'],
    child: null
};


let emp: Iperson[] = [
    {
        fname: 'jhonny',
        lname: 'doe',
        age: 39,
        skills: ['html', 'css', 'js', 'angular'],
        child: null
    },
    {
        fname: 'jhon',
        lname: 'doe',
        age: 35,
        skills: ['html', 'css', 'js', 'react'],
        child: 2
    },
    {
        fname: 'jammie',
        lname: 'roxer',
        age: 29,
        skills: ['html', 'css', 'js', 'angular'],
        child: 1
    }
];






interface Iemployee {
    fname: string;
    lname: string;
    age: number;
    dep: string;
    joiningYr: number;
    isMarried: boolean;
    child?: number | null;
    dob: string;
    skills: string[];
    devloper: string
}

enum dev {
    frontEnd = 'frontEnd Devloper',
    backEnd = 'backEnd Devloper'
};



let emp1: Iemployee = {
    fname: 'harry',
    lname: 'potter',
    age: 25,
    dep: 'webDevlopement',
    joiningYr: 2015,
    isMarried: true,
    child: 2,
    dob: '21 feb 1993',
    skills: ['html', 'css', 'js', 'react'],
    devloper: dev.frontEnd
};


