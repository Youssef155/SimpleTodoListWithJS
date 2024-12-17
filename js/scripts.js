var title = document.getElementById("title")
var text = document.getElementById("text")
var sendBtn = document.getElementById("sendBtn")

var tasks = []

sendBtn.addEventListener("click", function() {
    var task =  
    {
        head: title.value,
        desc: text.value,
    }

    tasks.push(task)
    showData()
})

function showData() {
    var list = ``
    for(var i=0; i<tasks.length; i++){
        list += `<div class="d-flex p-2 bd-highlight justify-content-between text-center border border-primary rounded-3 mb-3">
        <div class="head">`+`<p>`+tasks[i].head+`</p>`+`</div>`+`<div class="icons">
                <i class="icon fa-regular fa-circle-check"></i>
                <i class="icon fa-solid fa-pencil"></i>
                <i class="icon fa-regular fa-circle-xmark" onclick="deleteRecord(`+i+`)"></i>
            </div>
            </div>`

        document.getElementById("container").innerHTML = list
    }
}

function deleteRecord(i) {
    tasks.splice(i, 1)
    showData()
}

showData()