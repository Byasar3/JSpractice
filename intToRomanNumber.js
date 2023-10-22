// convert an integer to roman number

const intToRomanNumerals = (num) => {
    if (num <= 0 || num >= 4000) {
        return "Invalid input. Please enter a number between 0 and 4000"
    }


    // mapping
    const romanNumerals = {
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

    let romanNumeralResult = "";

    for (const symbol in romanNumerals) {
        while (num >= romanNumerals[symbol]) {
            romanNumeralResult += symbol;
            num -= romanNumerals[symbol];
        }
    }

    return romanNumeralResult;

};
