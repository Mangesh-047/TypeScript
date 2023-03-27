let cl = console.log;




// let userInput: any;
let userInput: unknown;
let username: string;


userInput = 'qwer';
userInput = 8988;
userInput = true;
userInput = 'qeqerwer'



if (typeof userInput === 'string') {
    username = userInput
    cl(username)
}


cl(typeof userInput)