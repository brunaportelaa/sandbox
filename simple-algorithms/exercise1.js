// Challenge 1: Guess and Check (Exhaustive Enumeration)
// Problem:
// You're organizing a treasure hunt! The treasure is hidden in one of the 100 boxes lined up in a row. Each box is numbered from 1 to 100. You know that the treasure is in box number X but you forgot which one it is. Use the guess and check method to find the treasure

const treasure = Math.ceil(Math.random()* 100) 
console.log(treasure)
guess = 0

while(guess<=treasure) {
    if (guess === treasure) {
        console.log(`Treasure is at box number ${guess}`)
        break
    } else {
        guess++
    }
}

// Challenge 2: Approximation
// Problem:
// You're baking a cake and you need exactly 200 grams of sugar. However, you only have a scale that measures in increments of 5 grams. Use the approximation method to measure as close to 200 grams as possible without exceeding it.

let sugar = 0
const sugarNeeded = 200
const increment = 7

while (sugar <= sugarNeeded) {
    if (sugar < sugarNeeded) {
        sugar += increment
        console.log(`You now have ${sugar} grams of sugar`)
    }
}

console.log(`Perfect! Now you have ${sugar} grams of sugar, which is close enough to the required amount`)


// Challenge 3: Bisection Method
// Problem:
// You are trying to find the square root of a number using the bisection method. You know that the square root of X lies between 0 and X for any positive number X.