let pet1 = {
    name:  "Marley",
    age: 2,
    gender: "male",
    service: "wilderness training",
    breed: "pitbull"
}
console.log(pet1.name);
console.log(pet1.age);
console.log(pet1.gender);
console.log(pet1.service);
console.log(pet1.breed);

let pet2 = {
    name: "Totsie",
    age: 3,
    gender: "female",
    service: "wilderness training",
    breed: "shihtzu"

}
console.log(pet2.name);
console.log(pet2.age);
console.log(pet2.gender);
console.log(pet2.service);
console.log(pet2.breed);



let pet3 = {
name: "Brownie",
age: 10,
gender: "male",
service: "wilderness training",
breed: "chihuahua"
}

console.log(pet3.name);
console.log(pet3.age);
console.log(pet3.gender);
console.log(pet3.service);
console.log(pet3.breed);

function displayPets() {
    let list = document.getElementById("list");

    list.innerHTML = `
        <li>${pet1.name}</li>
        <li>${pet2.name}</li>
        <li>${pet3.name}</li>
    `;
}

displayPets();




function Pet4(nameValue, ageValue, breedValue, genderValue, serviceValue){
    this.name = nameValue;
    this.age = ageValue;
    this.breed = breedValue;
    this.gender = genderValue;
    this.service = serviceValue;
}


let pet4 = new Pet4("Harry", 2, "Pitbull", "male", "wilderness training");
console.log(pet4.name);
console.log(` ${pet4.name} - ${pet4.service} `);



function Pet5(nameValue, ageValue, breedValue, genderValue, serviceValue){
    this.name = nameValue;
    this.age = ageValue;
    this.breed = breedValue;
    this.gender = genderValue;
    this.service = serviceValue;
}


let pet5 = new Pet5("Benson", 3, "Poodle", "male", "wilderness training");
console.log(pet5.name);
console.log(` ${pet5.name} - ${pet5.service} `);


function Pet6(nameValue, ageValue, breedValue, genderValue, serviceValue){
    this.name = nameValue;
    this.age = ageValue;
    this.breed = breedValue;
    this.gender = genderValue;
    this.service = serviceValue;
}


let pet6 = new Pet6("Chewy", 7, "Pitbull", "Female", "wilderness training");
console.log(pet6.name);
console.log(` ${pet6.name} - ${pet6.service} `);


