// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe('describeArray', () => {
  it('Takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(describeArray(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.
// To create this function, I will first need to  take in the given array as an argument. Then, I will map over that array, where each element will be an object. I will take the value associated with the name key from the current element, and split it into an array of strings, based on where a space is. Then, with this new array, I will want to capitalize each value, so I will use another map to capitalize each word and then join them back into one string. From there, I only need to add on the rest of the sentance using string interpolation. I will then return this entire statement.
const describeArray = (array) => {
  return array.map((element) => element.name.split(" ").map((value) => value = (value[0].toUpperCase()) + value.slice(1)).join(" ") + ` is ${element.occupation}.`)
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe('onlyRemainders', () => {
  it('Takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(onlyRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(onlyRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.
// To create this function, I will first take in an array as an argument, and then filter out any values whose typeof does not return "number". Then, I will map over this filtered array, using the modulo operator to find the remainder of eachvalue divided by 3. I will return the new mapped array.
const onlyRemainders = (array) => {
  return array.filter((value) => typeof value === 'number').map((num) => num % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe('sumOfCubes', () => {
  it('Takes in an array of numbers and returns the sum of all the numbers cubed.', () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumOfCubes(cubeAndSum1)).toEqual(99)
    expect(sumOfCubes(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
// To create this function, I will first take in an array as an argument. Then I will create a variable called sum. I will use foreach on the array to iterate through and cube each value, adding it to sum after. Then I will return sum.

// const sumOfCubes = (array) => {
//   let sum = 0
//   array.forEach((num) => sum += (num ** 3));
//   return sum
// }


// After some research, I was able to refactor my code using the .reduce method. This method will initialize a 'beginning' variable, which I call sum. It initializes to a given value, where I chose 0. Then, it will iterate over the array performing the defined function for each value(I called num) and return sum, the beginning variable.
const sumOfCubes = (array) => {
  return array.reduce((sum, num) => sum + (num ** 3), 0)
}