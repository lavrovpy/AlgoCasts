// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return Math.abs(n).toString().split('').reverse().join('') * Math.sign(n)
}

console.log(typeof reverseInt(15))
console.log(typeof reverseInt(-51))

module.exports = reverseInt;
