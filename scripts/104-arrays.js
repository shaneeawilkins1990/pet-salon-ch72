//1. Define the array
let nameList = ["Fernanda", "Ryan", "Shanee", "K", "T", "J"];
let gradesList = [8, 9, 10, 7, 8, 7];

//2. Access to an item -> index
//arrayName[index] -> nameslist[0] -> Fernanda 
console.log(namesList[2]);
console.log(neamesList[5]);


//3. Travel the array -> for loop
for(let i=0; i<6; i++){
    console.log(nameList[i]);
}

// or for(let i=0; <nameList.lenght;) if you dont know how many elements


// ==== Array of object ====

let studentsList = [
    {
        name: "Fernanda",
        age: 34
    },

    {
        name: "Luis",
        age: 33
    },

    {
        name: "Samantha",
        age: 20
    }
];

console.log("----------");
console.log(studentsList[0].name);

//consoloe log the third student age
console.log(studentsList[2].age)



// ==== EXERCISE ====
// Create an array called gamesList with 3 game objects.
// Each object should have title, platform, and release year.
// Print the first game's title.
// Print the second game's platform. //switch, PC, etc.
// Print the third game's title, platform, and release year in single sentence.
// Print the total number of games.    

let gamesList = [
    {
        title: "Mario Brothers",
        platform: "Switch",
        year: 2000,
    },

    {
        title: "Blue Bean",
        platform: "xbox",
        year: 1992,
    },

    {
        title: "Car Control",
        platform: "PlayStation",
        year: 2005
    }
]

console.log(gamesList[0].title);
console.log(gamesList[1].platform);
console.log(`${gamesList[2].title} ${gamesList[2].platform} ${gamesList[2].year} `);
console.log(gamesList.length);



