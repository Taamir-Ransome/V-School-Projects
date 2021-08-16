const form = document["list-mom"]

form.addEventListener("submit", function (event){
    event.preventDefault()
    const momListItem = form.momListItem.value

    if (form.momListItem.value != "") {
        form.momListItem.value = ""

        const myNewLi = document.createElement("li")
        document.getElementById("the-list").append(myNewLi)

        const myNewDiv = document.createElement("div")
        myNewDiv.textContent = momListItem
        myNewLi.append(myNewDiv)

        const btnEdit = document.createElement("button")
        btnEdit.textContent = "edit"
        btnEdit.setAttribute("id", "button_click");
        myNewLi.append(btnEdit)
        btnEdit.addEventListener("click", function(event){
            event.target
        })

        const btnEx = document.createElement("button")
        btnEx.textContent = "X"
        myNewLi.append(btnEx)
        btnEx.addEventListener("click", function(event){
            event.target.parentNode.remove()
            console.log(event)
        })


    }
})