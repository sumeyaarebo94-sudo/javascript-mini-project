const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const remainingCount = document.getElementById("remainingCount");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        errorMsg.textContent = "Please type a task first";
        return;
    }

    errorMsg.textContent = "";

    tasks.push({
        text: taskText,
        done: false
    });

    renderTasks();
    taskInput.value = "";
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.done) {
            li.classList.add("done");
        }

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button class="done-btn">Done</button>
        `;

        const doneBtn = li.querySelector(".done-btn");

        doneBtn.addEventListener("click", function() {
            task.done = !task.done;
            renderTasks();
        });

        taskList.appendChild(li);
    });
}