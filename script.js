const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if(inputBox.value === ''){
        alert("Please enter to-do");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");  //add a span element to li
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){   //tagName returns in CAPS
        e.target.classList.toggle("checked");  //adds checked class if not added, removed if added
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//gets the saved listContainer
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();