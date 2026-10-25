
/******************************************************************************
OPPGAVE 1: LØKKER OG OBJEKTER
******************************************************************************/

const cities = [
  "New York",
  "London",
  "Paris",
  "Berlin",
  "Copenhagen",
  "Rome"
];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"]
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"]
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"]
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"]
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"]
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"]
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"]
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"]
  }
];

let combinedAge = 0;

// Skriv koden for oppgave 1 her

for (let i = 0; i < people.length; i++) {
  if (people[i].name === "Otto") {
    continue;
  }

  const randomCity = Math.floor(Math.random() * cities.length);

  people[i].city = cities[randomCity];

  people[i].title = people[i].male ? "Mr." : "Ms.";

  people[i].age += 2;

  people[i].hobbies.unshift("coding");

  combinedAge += people[i].age;
}

console.log("OPPGAVE 1");
console.log(people);

let averageAge = 0;

averageAge = combinedAge / (people.length - 1);

console.log("Combined age:", combinedAge);
console.log("Average age:", averageAge);


/******************************************************************************
OPPGAVE 2: DICE ROLLER
******************************************************************************/

// Skriv koden for oppgave 2 her

function diceRoller(numberOfDice, numberOfSides = 6) {
  const results = [];

  for (let i = 0; i < numberOfDice; i++) {
    const randomNumber =
      Math.floor(Math.random() * numberOfSides) + 1;

    results.push(randomNumber);
  }

  return results;
}

console.log("OPPGAVE 2");
console.log(diceRoller(4));
console.log(diceRoller(6));
console.log(diceRoller(5, 20));


/******************************************************************************
OPPGAVE 3: CLEAN TEXT
******************************************************************************/

// Skriv koden for oppgave 3 her

function cleanText(words) {
  const cleanedWords = [];

  for (const word of words) {
    const cleanedWord = word.trim().toLowerCase();

    cleanedWords.push(cleanedWord);
  }

  return cleanedWords.join(" ");
}

console.log("OPPGAVE 3");

const textArray = [
  " thIS",
  "teXt  ",
  " nEeds ",
  "to",
  "BE",
  "cleANED   ",
  " Up"
];

console.log(cleanText(textArray));


/******************************************************************************
OPPGAVE 4: DOUBLE SWAP
******************************************************************************/

function doubleSwap(string, charA, charB) {
  let result = "";

  for (const char of string) {
    if (char === charA) {
      result += charB;
    } else if (char === charB) {
      result += charA;
    } else {
      result += char;
    }
  }

  return result;
}

console.log("OPPGAVE 4");

console.log(doubleSwap("this is a string", "i", "s"));

console.log(
  doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
);

console.log(
  doubleSwap("what is the point of this?", "o", "t")
);


/******************************************************************************
OPPGAVE 5: HELLO CHECKER - EKSTRA UTFORDRING
******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!"
];

// Skriv koden for oppgave 5 her

function helloChecker(text) {
  const languages = {
    hello: "engelsk",
    ciao: "italiensk",
    salut: "fransk",
    hallo: "tysk",
    hola: "spansk",
    czesc: "polsk",
    "cześć": "polsk"
  };

  const words = text.toLowerCase().match(/\p{L}+/gu) || [];

  for (const word of words) {
    if (languages[word]) {
      return `HELLO oppdaget på ${languages[word]}.`;
    }
  }

  return "Ingen HELLO oppdaget.";
}

console.log("OPPGAVE 5");

for (const greeting of greetings) {
  console.log(helloChecker(greeting));
}
