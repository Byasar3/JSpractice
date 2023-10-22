// take string as input and prints the string in reverse order

const readline = require('readline');
const stringReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

stringReader.question("Enter a sentence of any length: ", (stringInput) =>{
    const reversedString = reversing(stringInput);
    console.log("Your sentence reversed: " + reversedString);
    stringReader.close();
})

function reversing(input) {
    // split string into an array of characters, reverse it and join it back together 
    return input.split('').reverse().join('');
}
