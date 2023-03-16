let cl = console.log;


// tuples :- a fixed length array.



type Tperson = {
    fname: string,
    lname: string,
    age: number
    skills: [string, string, string]   // tuple
};


let p1: Tperson = {
    fname: 'jhon',
    lname: 'doe',
    age: 35,
    skills: ['html', 'css', 'js']   // tuple
}








// enum 

enum role {
    admin = 'Admin'
}


role.admin




//              0    ,    1    ,   2
enum Role { candidate, Admin, SuperAdmin }

// interface Iperson {
//     fname: string;
//     lname: string;
//     age: number;
//     email: string;
//     role: string;
// }



let person = {
    fname: 'Mangesh',
    lname: 'Dhole',
    age: 35,
    email: 'mangesh@mail.com',
    role: Role.candidate
};


if (person.role === Role.candidate) {
    cl('redirect to candidate dashboard')
} if (person.role === Role.Admin) {
    cl('redirect to Admin dashboard')
} if (person.role === Role.SuperAdmin) {
    cl('redirect to SuperAdmin dashboard')
};


// if (person.role === 0) {
//     cl('redirect to candidate dashboard')
// } if (person.role === 1) {
//     cl('redirect to Admin dashboard')
// } if (person.role === 2) {
//     cl('redirect to SuperAdmin dashboard')
// };





enum subscription {
    basic = 199,
    standard = 299,
    Premium = 399
}



let user = {
    fname: 'joe',
    lname: 'doe',
    mail: 'joedoe@mail.com',
    sub: subscription.standard
};


if (user.sub === 199) {
    cl('redirect to user Basic plan dashboard')
} if (user.sub === 299) {
    cl('redirect to user Standard plan dashboard')
} if (user.sub === 399) {
    cl('redirect to user Premium plan dashboard')
};


