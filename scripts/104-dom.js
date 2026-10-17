function update(){
    // Testing the button and function conncetion
    // alert("Clicked!");

    // 1. Get the paragraph by class --> getElementsByClassName
    let paragraphs = document.getElementsByClassName("text");
    console.log(paragraphs);

    // Access to paragraph 1 and change the text color to red.
    // AsK GOOGLE: JS Change text color

    paragraphs[0].style.color = "orange";
    paragraphs[1].style.color = "blue";


    // 2. Update the H2 text
    let title = document.getElementById("title");
    // innerHTML or textContent


}



function add(){
    // test with the alert 
    // 1. Get the input value
    let text = document.getElementById("text").value;
    console.log(text);

    //2. Display the value in the list
    let list = document.getElementById("list");
    list.innerHTML += `
        <li> ${text} </li>
    `;


    document.getElementById("text").value = "";
}

