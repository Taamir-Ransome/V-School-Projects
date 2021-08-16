const readlineSync = require("readline-sync")

const num1 = (readlineSync.questionInt('Give Me a Number: '));
console.log(num1);
const num2 = (readlineSync.questionInt('Give Me Another Number: '));
console.log(num2);
const operation = readlineSync.question('What Do You Wish To Do? add, sub, mul, div? ')
console.log(operation);

if (operation === "add"){
    console.log('The result is:')
    console.log(num1 + num2)
}
else if (operation === "mul"){
    console.log('The result is:')
    console.log(num1 * num2)
}
else if (operation === "div"){
    console.log('The result is:')
    console.log(num1 / num2)
}
else if (operation === "sub"){
    console.log('The result is:')
    console.log(num1 - num2)
}
else {console.log('You Did Not Input The Correct Thing')}

