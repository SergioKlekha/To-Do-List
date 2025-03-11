document.addEventListener("DOMContentLoaded", loadTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function() {
        li.remove();
        saveTask();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    saveTask();
}

function saveTask() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent.trim()); 
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;

        let deleteBtn = document.createElement("span");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete"); 
        deleteBtn.onclick = function() { 
            li.remove();
            saveTask();
        };

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);
    });
}
