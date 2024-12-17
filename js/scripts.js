var title = document.getElementById("title")
var text = document.getElementById("text")
var sendBtn = document.getElementById("sendBtn")
var formType = document.getElementById("formType")
var currentIndex = document.getElementById("index")

var tasks = []

sendBtn.addEventListener("click", function () {
    var task =
    {
        head: title.value,
        desc: text.value,
    }

    if (formType.value === 'create') {
        tasks.push(task)
    } else if (formType.value === 'update') {
        tasks[currentIndex.value] = task
    }
    formReset()
    showData()
})

function showData() {
    var list = ``
    for (var i = 0; i < tasks.length; i++) {
        list +=
            `<div class="d-flex p-2 bd-highlight justify-content-between text-center border rounded-3 mb-3">
            <div class="head">`+ `<p>` + tasks[i].head + `</p>` + `</div>` +
            `<div class="icons">
                <i class="icon fa-regular fa-circle-check onclick="markCompleted(`+ i + `)"></i>
                <i class="icon fa-solid fa-pencil" onclick="updateRecord(`+ i + `)"></i>
                <i class="icon fa-regular fa-circle-xmark" onclick="deleteRecord(`+ i + `)"></i>
            </div>
        </div>`

        document.getElementById("container").innerHTML = list
    }
}

function deleteRecord(i) {
    tasks.splice(i, 1)
    showData()
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