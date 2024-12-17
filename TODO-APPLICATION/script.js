const inputbox = document.getElementById("search");
let listContainer = document.getElementById("listcontainer")

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something")
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
}

var list = document.getElementById('listcontainer');

  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
   
    else if(ev.target.tagName === 'span'){
     ev.target.parentElement.remove();
   }
},false);



