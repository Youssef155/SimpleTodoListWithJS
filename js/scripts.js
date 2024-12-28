var title = document.getElementById("title")
var text = document.getElementById("text")
var sendBtn = document.getElementById("sendBtn")
var formType = document.getElementById("formType")
var currentIndex = document.getElementById("index")
var search = document.getElementById("search")

var tasks = []

sendBtn.addEventListener("click", function () {
    if (validateTaskTitle() == true && validateTaskDesc() == true) {
        var task =
        {
            head: title.value,
            desc: text.value,
            completed: false
        }

        if (formType.value === 'create') {
            tasks.push(task)
        } else if (formType.value === 'update') {
            tasks[currentIndex.value] = task
        }
        formReset()
        showData(tasks)
    }
})

// function showData() {
//     var list = ``
//     for (var i = 0; i < tasks.length; i++) {
//         list += `<div class="d-flex p-2 bd-highlight justify-content-between text-center border rounded-3 mb-3" id="task">
//             <div class="head"><p>${tasks[i].head}</p></div> +
//             <div class="icons">
//                 <i class="icon fa-regular fa-circle-check onclick="markCompleted(${i})"></i>
//                 <i class="icon fa-solid fa-pencil" onclick="updateRecord(${i})"></i>
//                 <i class="icon fa-regular fa-circle-xmark" onclick="deleteRecord(${i})"></i>
//             </div>
//         </div>`

//         document.getElementById("container").innerHTML = list
//     }
// }

function showData(tasks) {
    var list = "";
    for (var i = 0; i < tasks.length; i++) {
        list += `
            <div class="d-flex p-2 bd-highlight justify-content-between text-center border rounded-3 mb-3 ${tasks[i].completed ? 'done' : ''}" id="task">
                <div class="head"><p>${tasks[i].head}</p></div>
                <div class="icons">
                    <i class="icon fa-regular fa-circle-check" onclick="markCompleted(${i})"></i>
                    <i class="icon fa-solid fa-pencil" onclick="updateRecord(${i})"></i>
                    <i class="icon fa-regular fa-circle-xmark" onclick="deleteRecord(${i})"></i>
                </div>
            </div>
        `;
    }
    document.getElementById("container").innerHTML = list;
}

function deleteRecord(i) {
    tasks.splice(i, 1)
    showData(tasks)
}

function updateRecord(i) {
    title.value = tasks[i].head;
    text.value = tasks[i].desc;
    formType.value = 'update';
    currentIndex.value = i;
}

function formReset() {
    formType.value = "create"
    title.value = "";
    text.value = "";
}

function markCompleted(i) {
    tasks[i].completed = !tasks[i].completed;
    showData(tasks);
}


/*
    - Search Function
*/
search.addEventListener("input", function (e) {
    str = e.target.value;
    searchByTitle(str)

})

function searchByTitle(str) {
    console.log(str);

    var searched = []
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].head.toLowerCase().includes(str.toLowerCase()) == true) {
            searched.push(tasks[i])
        }
    }

    console.log(searched);


    showData(searched)
}



/*
    - Validation
*/
function validateTaskTitle() {
    var regex = /^[A-Z]+[a-z]{1,6}$/
    if (regex.test(title.value) == true) {
        document.getElementById("wrongTitle").classList.add("d-none")
        title.style.border = ""
        return true
    } else {
        document.getElementById("wrongTitle").classList.remove("d-none")
        title.style.border = "5px solid red"
        return false
    }
}

function validateTaskDesc() {
    var regex = /^[A-Z]+[a-z]{6,}/
    if(regex.test(text.value) == true){
        document.getElementById("wrongDesc").classList.add("d-none")
        text.style.border = ""
        return true
    }else {
        document.getElementById("wrongDesc").classList.remove("d-none")
        text.style.border = "5px solid red"
        return false
    }
}