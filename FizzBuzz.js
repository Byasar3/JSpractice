// Given a number n for each integer i in the range from 1 to n inclusive, 
// print one value per line as follows:

// if i if a multiple of 3 and 5, print FizzBuzz
// if i is a multiple of 3 (but not 5), print Fizz
// if i is a multiple of 5 (but not 3), print Buzz
// if i is not a multiple of 3 or 5, print the value of i

// importing readline module to create an interface for reading lines of text from the standard input
const readline = require('readline');

// interface rl is created
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter a number between 0 and 200000: ", (n) => {
    for (let i = 1; i <= parseInt(n); i++){
        if ( i % 3 == 0 && i % 5 ==0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0){
            console.log("Fizz")
        } else if (i % 5 == 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

    rl.close()
})