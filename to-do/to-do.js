function add(){
    var inp = document.querySelector("input")
    // console.log(inp.value)

    //create new Element Li   
     var newEl = document.createElement("li")
     newEl.innerHTML = inp.value + 
     "<button onclick = 'del(event)' class = 'btn2'> x </button>"

    //Append to list
     var ul = document.querySelector("ul")
     ul.append(newEl)

     inp.value = "  "

}

function del(event){
     event.target.parentElement.remove()
}


