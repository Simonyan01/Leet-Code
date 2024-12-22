let integerToRoman = function (num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let res = ""

    for (let i = 0; i < values.length; ++i) {
        while (num >= values[i]) {
            res += romanSymbols[i]
            num -= values[i]
        }
    }

    return res
}