var cl = console.log;
var p1 = {
    fname: 'jhon',
    lname: 'doe',
    age: 35,
    skills: ['html', 'css', 'js'] // enums
};
// enum 
var role;
(function (role) {
    role["admin"] = "Admin";
})(role || (role = {}));
role.admin;
//              0    ,    1    ,   2
var Role;
(function (Role) {
    Role[Role["candidate"] = 0] = "candidate";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
// interface Iperson {
//     fname: string;
//     lname: string;
//     age: number;
//     email: string;
//     role: string;
// }
var person = {
    fname: 'Mangesh',
    lname: 'Dhole',
    age: 35,
    email: 'mangesh@mail.com',
    role: Role.candidate
};
if (person.role === Role.candidate) {
    cl('redirect to candidate dashboard');
}
if (person.role === Role.Admin) {
    cl('redirect to Admin dashboard');
}
if (person.role === Role.SuperAdmin) {
    cl('redirect to SuperAdmin dashboard');
}
;
// if (person.role === 0) {
//     cl('redirect to candidate dashboard')
// } if (person.role === 1) {
//     cl('redirect to Admin dashboard')
// } if (person.role === 2) {
//     cl('redirect to SuperAdmin dashboard')
// };
var subscription;
(function (subscription) {
    subscription[subscription["basic"] = 199] = "basic";
    subscription[subscription["standard"] = 299] = "standard";
    subscription[subscription["Premium"] = 399] = "Premium";
})(subscription || (subscription = {}));
var user = {
    fname: 'joe',
    lname: 'doe',
    mail: 'joedoe@mail.com',
    sub: subscription.standard
};
if (user.sub === 199) {
    cl('redirect to user Basic plan dashboard');
}
if (user.sub === 299) {
    cl('redirect to user Standard plan dashboard');
}
if (user.sub === 399) {
    cl('redirect to user Premium plan dashboard');
}
;
