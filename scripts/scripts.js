//String
console.log("10")
console.log("Portland High School")

//Numbers
console.log(10)
console.log (10.54)

//Booleans
console.log(true)
console.log(false)






//Variables are used to store values for later use
//must choose "let" (the value may change)
//"const" (the value will remaine the same)


let middleSchool = 'king ms'

console.log(schoolName)
console.log(middleSchool)

//schoolName = Deering High School
//middleSchool = Lyman Moore MS




//Interactive User Input

// alert(Message).     -> creates a popup window with message in it
//alert('Welcome to my website')

// input(message).     -> create a popup with message and entry widget
const response1 = prompt("What is your name")
const response2 = promet("What is your favorite food?")





alert("Thanks " + userName + "Enjoy ypur weekend!")


// Arithmetic Operater
// Basic Operater: +, -, *, 
// Modulus Operater a % b -> remainder after dividing a by b
// Exponents: a ** b -> a raised to the b power
// Increment (++) & Decrement (--): Quick +1 or -1 operations 

let lives = 3 
lives = lives - 1 
// console.log(lives) 

// concatenation and template literals
// concatenation: method for combining strings by adding them

const userName = "Sam" 
const userAge = 17
const favoriteSubject = Math

//method 1 concaenation
const message = Hello my name is " + userName +  "

console.log(message)
//method 2: template literals
const messageTwo = `Hello my name is $(userName) and I am $(userAge) years old`
console.log (messageTwo)

// Multi-Lines String without \n
const bio = ``
=== USER PROFILE ===
Name: ${userName}
Age:${userAge} 
``
console.log(bio) 