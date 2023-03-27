"use strict";
let cl = console.log;
let b1 = { type: 'bird', flyingSpeed: 100 };
let h1 = { type: 'horse', runningSpeed: 900 };
function moveAnimal(an) {
    if (an.type === 'bird') {
        cl(`the ${an.type} flying speed is ${an.flyingSpeed}`);
    }
    if (an.type === 'horse') {
        cl(`the ${an.type} running speed is ${an.runningSpeed}`);
    }
}
moveAnimal(b1);
moveAnimal(h1);
function moveAnimalS(an) {
    switch (an.type) {
        case 'bird':
            cl(`the ${an.type} flying speed is ${an.flyingSpeed}`);
            break;
        case 'horse': cl(`the ${an.type} flying speed is ${an.runningSpeed}`);
    }
}
moveAnimalS(h1);
moveAnimalS(b1);
