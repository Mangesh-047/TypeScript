let cl = console.log;


interface Ierror {
    [prop: string]: string
}


let em: Ierror = {
    email: 'please Enter valid mail'
}

let pass: Ierror = {
    password: 'please Enter valid password'
}



interface Iuser {
    [key: string]: string
}

let userDetail: Iuser[] = [
    {
        fname: 'jhon'
    },
    {
        lname: 'Dhon'
    },
    {
        email: 'jhondoe@mail.com'
    },
    {
        username: 'doe@4'
    },
]


// interface db {
//     [key: string]: {
//         content: string,
//         title: string
//     }
// }


interface content {
    content: string,
    title: string
}

interface dBase {
    [key: string]: content
}



let dataBase: dBase[] = [
    {
        nfhfh343434: {
            content: 'zzz',
            title: 'ssg'
        }
    },
    {
        pjfjr232: {
            content: 'ers',
            title: 'rssg'
        }
    },
    {
        aneuu323: {
            content: 'yrx',
            title: 'rbg'
        }
    },
    {
        nfhtgr6575: {
            content: 'por',
            title: 'mkd'
        }
    }
]



