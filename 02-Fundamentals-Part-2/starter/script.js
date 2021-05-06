'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';
// const private = 2;

function logger() {
    console.log('My name is Jonas')
}

const calcAgge2 = function (birthYear) {
    return 2037 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear;

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0])
console.log(friends.length)

const friends = ['Michael', 'Steven', 'Peter'];

friends.push('Jay')
console.log(friends)

friends.unshift('John')
console.log(friends)

friends.pop();
console.log(friends)

friends.shift()
console.log(friends)

console.log(friends.indexOf('Bob'))

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))

const jonasArray = [
    'Jonas',
    'Pel',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]


const achille = {
    firstName: 'Achille',
    lastName: 'Pellissier',
    birthYear: 1996,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2021 - this.birthYear
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year-old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}

// console.log(jonas)

// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job and friends')
// console.log(interestedIn)
// console.log(jonas[interestedIn])

console.log(achille.calcAge())
console.log(achille.age)
console.log(achille['age'])
console.log(achille.getSummary())
*/
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetion ${rep}`)
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetion ${rep}`)
    rep++
}
