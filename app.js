// ========= STRING DATA TYPE ========

console.log("Am super excited");
console.log("My name is Abdul Afeez");
console.log("I'm 19 years old");
console.log("I'm a front-end developer");

// ======== NUMBER ========

console.log(6387439);
console.log(342309820);
console.log(342307893);
console.log(34230123);

// ====== Boolean ====== //

console.log(true);
console.log(false);

// ====== Arithmetics Operators ====== //

console.log(20 + 50);
console.log(200 + 150);
console.log(150 * 40);
console.log(500 - 45);
console.log(20 / 50);
console.log(120 / 30);
console.log(350 / 35);
console.log(30 % 35);
console.log(350 % 35);

// ===== Variable ===== //

var myBag = "Laptop";
const myHouse = "18 Odutolu Street"
let myBestFriend = "BabaTunde"

// ===== Incremetal Operators ======= //
let orange = 120;
orange++;
console.log(orange);

// ===== Decremental Operators ====== //
let banana = 20;
banana-- - console.log(banana);

// ===== String Concatenation ===== //
// first method
let myFirstName = "Abdul Azeez";
let myLastName = "Abdul Afeez";
let myMiddleName = "Olamilaken";
let fullName = `${myFirstName} ${myLastName}`;
console.log(fullName);
// secound //
fullName = myFirstName + " " + myLastName;
console.log(fullName);
// Inbuilt Methods //

// length //
let myLastNameLength = myLastName.length;
console.log(myLastNameLength);

// uppercase //
let lastNameToUpperCase = myLastName.toUpperCase();
console.log(lastNameToUpperCase);


// lowercase //
let myMiddleNameToUpperCase = myMiddleName.toLowerCase();
console.log(myMiddleNameToUpperCase);


// Index of string //
const firstCharacter = myFirstName[9];
console.log(firstCharacter);


let abbriviatingMyMiddleName = `${myFirstName}, ${myMiddleName[0]}. ${myLastName}`;
console.log(abbriviatingMyMiddleName);
// Comparision Operation //

let x = 50;
let y = 15;
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);
console.log(x === y);
console.log(x !== y);

//  Logical Operators //

// and Operator &&
const mySchoolName = "Unity High School";
const myPrimarySchool = "Junior Academy";
const checkBothSchoolLength =
  (mySchoolName.length && myPrimarySchool.length) === 40;
console.log("checkBothSchoolLength =", checkBothSchoolLength);

//  Or Operator ||

const checkEitherSchoolLength =
  (mySchoolName.length || myPrimarySchool.length) === 17;
console.log("checkEitherSchoolLength =", checkEitherSchoolLength);

// not Operator !

const myNumber = 22;
const notMyNumber = !myNumber;
console.log("notMyNumber", notMyNumber);

//  Control Flow //

// example 1
let myAge = 33;
if (myAge) {
  console.log("This is my age");
} else {
  console.log("This is not my age");
}

// Control Flow
// example 2
let a = 10;
let b = 30;
const answer = a + b;

if (!answer) {
  console.log("This is the correct answer");
} else {
  console.log("This is the wrong answer");
}

//  example 3

let myFavouriteClub = "Chelsea";

if (myFavouriteClub.length < 6) {
  console.log("This is my favourite club name");
} else {
  console.log("This is not my favourite club name");
}

// If elseif & else  statement//
let p = 10;
const multiplybyfive = p * 5;
if (multiplybyfive < 55) {
  console.log("this is not the real number");
} else if (multiplybyfive >= 55) {
  console.log("there can be real answer in this region");
} else {
  console.log("there is no idea");
}

// Class Work //
let hungerLevel = 7;
if (hungerLevel.length <= 7) {
  console.log("Time to eat");
} else {
  console.log("We can eat later");
}

// Swich Statement //

// random number //
const randomNum = Math.round(Math.random() * 5);
console.log(randomNum);

switch (randomNum) {
  case 0:
    console.log("This is Zero");
    break;
  case 1:
    console.log("This is one");
    break;
  case 2:
    console.log("This is two");
    break;
  case 3:
    console.log("This is three");
    break;
  case 4:
    console.log("This is four");
    break;
  case 5:
    console.log("This is five");
    break;

  default:
    break;
}

const dayOfTheWeek = new Date().getMonth();
console.log(dayOfTheWeek);

switch (dayOfTheWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    break;
}
// Tenary Operators //
// ()? console.log("do something") : console.log("do another thing");

"Olamilekan".length === 10
  ? console.log("this is the lenth of my name")
  : console.log("this is not the length of my name");

// Assainment //
let examScore = 100;
if (examScore > 70) {
  console.log("I performed excellently in my exam!");
} else {
  console.log("I didn't performed excellently in my exam!");
}

let Score = 100;
Score > 70
  ? console.log("I performed well in my exam!")
  : console.log("I did not performe well in my exam!");

// Functions //
const addNumber = (a, b) => {
  return a + b;
};
console.log(addNumber (10, 20));
const multiplyNumber = (x, y) => {
  return a * b;
};
console.log(multiplyNumber (10, 20));

const subtractNumber = (m, n) => {
  return m - n;
};
console.log(subtractNumber (10, 20));

const modulosNumber = (a, b) => {
  return a % b;
};
console.log(modulosNumber (50, 20));

// Assianment //

const perimeterOfRectangle = (a, b) => {
  return 2 * (a + b)
};
console.log("perimeterOfRectangle =" ,   perimeterOfRectangle (4, 15));



const perimeterOfSquare = (a) => {

  return 4 * (a + a + a + a)
};
console.log("perimeterOfSquare =" ,   perimeterOfSquare (4));



const circumferenceOfCircle = (radius) => {

  return 2 * Math.PI * radius
};
console.log("circumferenceOfCircle =" ,   circumferenceOfCircle (20));



const volumeOfSphere = (radius) => {

  return 4/3 * Math.PI * radius * radius * radius
};
console.log("volumeOfSphere =" ,   volumeOfSphere (10));