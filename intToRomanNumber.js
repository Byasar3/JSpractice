// convert an integer to roman number

const intToRomanNumerals = (num) => {
    // mapping the roman numerals to their corresponding numbers
    const romanNumeralMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // initialise an empty string (where the roman numerals will be entered)
    let romanNumeralResult = "";

    for (const symbol in romanNumeralMap) {
        // check if current number is greate than or equal to the value associated with the current 'symbol' 
        while (num >= romanNumeralMap[symbol]) {
            // 'symbol' is added to the empty string already made
            romanNumeralResult += symbol;
            // the value corresponding to 'symbol' is subtracted from number
            num -= romanNumeralMap[symbol];
        }
    }
    return romanNumeralResult;
};

const randomNum = Math.floor(Math.random() * 3999) + 1;
console.log('Random Number:', randomNum);
const romanNumeral = intToRomanNumerals(randomNum);
console.log('Roman Numeral:', romanNumeral);
