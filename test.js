


// const word = "skateboard"; //Don't change this line!

// // YOUR CODE BELOW THIS LINE:
// var facialHair=word.slice(5, 10);

// facialHair = facialHair.replace("o", "e");
// console.log(facialHair)



// const message = "    TASTE THE RAINBOW!  ";
// var whisper = message.trim().toLowerCase();
// console.log(whisper);

// let word1 = null;
// word1 = "vishva";
// console.log(typeof word1);

// let a=Math.random();
// let b =a * 5;
// console.log(Math.floor(b));


// const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
// const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// // YOUR CODE BELOW THIS LINE:
// let roll = die1 + die2;
// let str = roll.toString();

// console.log(`"You rolled a ${die1} and a ${die2}. They sum to ${str}"`);

// let arr1 = ["V0", "df", "fde"];
// let arr2 = ["hdfj", "fdjk", "dfjks"];
// arr1.concat(arr2);

// // DO NOT TOUCH!!! (please)
// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];

// // YOUR CODE GOES BELOW THIS LINE:

// airplaneSeats[3][1] = "Hugo";
// console.log(airplaneSeats);



// const test = [
//     { username: 'vishva', numbder: 44 },
//     {username : "sid", number : 55}
// ]
// const v = test[1].number;
// console.log(v);


// for (i = 25; i>=0; i-=5)
// {
//     console.log(i);
// }
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// const test = () =>
// {
//     console.log("hello");
// }
// setTimeout(test, 100)



// setInterval(() => {
//     console.log("welcome");
// }, 2000);

// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];
// const firstNames = fullNames.map((First) => First.first) 

// console.log(firstNames)

const greet = (name) =>
(
    console.log(`"Hey ${name}!"`)
);

greet("Hagrid") //"Hey Hagrid!"

const test = (first, last) => {
    console.log(`${this.first} ${last}`);
}
test("vishva", "patel")

console.log(..."hello");