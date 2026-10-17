let salon = {
    name: "Unpets",
    hours: "24 hours",
    phone: 8135552525,
    address: "2121 Jericho St, Zest, SW, 22121"
}

console.log(salon.name);
console.log(salon.hours);
console.log(salon.phone);
console.log(salon.address);


//create the funcion
function displaySalonInfo(){
    
    document.getElementById("salonInfo").innerHTML =
        "<p>Welcome to Unpets! " + 
        "We are located at 2121 Jericho St, Zest, SW, 22121. " + 
        "We are open 24 hours a day 7, days a week. " + 
        "We can be reached at 813-555-2525.</p>" ; 

}

// call the function
displaySalonInfo();
