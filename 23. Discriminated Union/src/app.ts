let cl = console.log;

interface Ibird {
    type: 'bird'     // type literal
    flyingSpeed: number
}

interface Ihorse {
    type: 'horse'     // type literal
    runningSpeed: number
}

type Animal = Ibird | Ihorse // Discriminated Union

let b1: Animal = { type: 'bird', flyingSpeed: 100 }

let h1: Animal = { type: 'horse', runningSpeed: 900 }


function moveAnimal(an: Animal) {
    if (an.type === 'bird') {
        cl(`the ${an.type} flying speed is ${an.flyingSpeed}`)
    }
    if (an.type === 'horse') {
        cl(`the ${an.type} running speed is ${an.runningSpeed}`)
    }
}


moveAnimal(b1)
moveAnimal(h1)


function moveAnimalS(an: Animal) {
    switch (an.type) {
        case 'bird': cl(`the ${an.type} flying speed is ${an.flyingSpeed}`)
            break;
        case 'horse': cl(`the ${an.type} flying speed is ${an.runningSpeed}`)
    }
}

moveAnimalS(h1)
moveAnimalS(b1)