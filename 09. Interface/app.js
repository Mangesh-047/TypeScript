var cl = console.log;
var person = {
    fname: 'jhon',
    lname: 'doe',
    age: 35,
    skills: ['html', 'css', 'js', 'angular'],
    child: 2
};
var person2 = {
    fname: 'jhonny',
    lname: 'doe',
    age: 39,
    skills: ['html', 'css', 'js', 'angular'],
    child: null
};
var emp = [
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
var dev;
(function (dev) {
    dev["frontEnd"] = "frontEnd Devloper";
    dev["backEnd"] = "backEnd Devloper";
})(dev || (dev = {}));
;
var emp1 = {
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
