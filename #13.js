let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

let romanToInteger = function (str) {
    let count = 0

    for (let i = 0; i < str.length; ++i) {
        if (roman[str[i]] < roman[str[i + 1]]) {
            count -= roman[str[i]]
        } else {
            count += roman[str[i]]
        }
    }

    return count
}

