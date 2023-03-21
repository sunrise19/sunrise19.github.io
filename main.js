// var button = document.getElementsByTagName("button")[1];
// var x = 0;

// button.addEventListener("click", function () {
//     x++;
//     if (x === 1) {
//         document.getElementById("show").innerHTML = x + " click!";
//     } else { document.getElementById("show").innerHTML = x + " clicks!"; }
// })

var but = document.getElementById("but");
var input = document.getElementById("input");
var ul = document.getElementsByTagName("ul")[0];

var addTodo = ()=>{
var inputValue = input.value.trim();
if (inputValue !== "") {
    // console.log(inputValue + " was added to the list");

    const li = document.createElement("li");
    const deleteIcon = document.createElement("i");
    const doneIcon = document.createElement("i");
    
    // deleteIcon.textContent = "Delete";
    doneIcon.setAttribute("class", "done-icon fa-solid fa-check");
    deleteIcon.setAttribute("class", "delete-icon fa fa-trash");
    

    li.appendChild(document.createTextNode(inputValue));

    // console.log(inputValue + deleteIcon);
    
    li.appendChild(deleteIcon);
    li.appendChild(doneIcon);
    ul.appendChild(li);
    input.value = ""

    deleteIcon.addEventListener("click", ()=>{
        ul.removeChild(li);
    })
}
}

but.addEventListener("click", addTodo);

input.addEventListener("keypress", (event)=>{
    // console.log(event);
    if(event.keyCode === 13){
        addTodo(); 
    }
})
