

let pet1 = {
    name:  "Marley",
    age: 2,
    gender: "male",
    service: "wash and go",
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
    service: "emotional support training",
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
service: "potty training",
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