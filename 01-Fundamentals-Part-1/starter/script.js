/*
let js = 'amazing';
console.log(40 + 8);

let firstName = 'Matilda';
console.log(firstName)

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 'Jonas');

let year;
console.log(year)
console.log(typeof year)

const birthYear = 1996
birthYear = 1990

const firstName = 'Achille'
const lastName = 'Pellissier'
console.log(firstName + ' ' + lastName)

let x, y;
x = y = 25 - 15;
console.log(x, y)

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95

let bmiMark = massMark / (heightMark ** 2)
let bmiJohn = massJohn / (heightJohn ** 2)

markHigherBMI = bmiMark > bmiJohn

console.log(bmiMark, bmiJohn, markHigherBMI)

const firstName = 'Jonas';
console.log(`I'm ${firstName}`)

console.log(`String
multiple
lines`)

const age = 17

if (age >= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young, wait another ${yearsLeft} years`)
}

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95

let BMIMark = massMark / (heightMark ** 2)
let BMIJohn = massJohn / (heightJohn ** 2)

if (BMIMark >= BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is lower than John's (${BMIJohn})`)
}

age = 18

const favourite = prompt("What's your favorite number?")
console.log(favourite)
console.log(typeof favourite)

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision)

console.log(!hasDriversLicense || hasGoodVision)

let scoreDolphins = (110 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win, with ${scoreDolphins} against ${scoreKoalas}`)
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Dolphins lose, with ${scoreDolphins} against ${scoreKoalas}`)
} else if (scoreDolphins == scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`Draw, with ${scoreDolphins} `)
} else {
    console.log(`Minimum score not reached`)
}

const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
        break;
}

const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

let bill = 275
let tip = 50 < bill < 300 ? 0.15 * bill : 0.2 * bill

console.log(`The bill was ${bill}, the tip was ${tip}, the total value was ${tip + bill}`)
*/