const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const remainingCount = document.getElementById("remainingCount");
const clearBtn = document.getElementById("clearBtn");

let tasks = [];

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearAllTasks);

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
            <button class="delete-btn">Delete</button>
        `;

        const doneBtn = li.querySelector(".done-btn");
        const deleteBtn = li.querySelector(".delete-btn");

        doneBtn.addEventListener("click", function() {
            task.done = !task.done;
            renderTasks();
        });

        deleteBtn.addEventListener("click", function() {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            renderTasks();
        });

        taskList.appendChild(li);
    });

    updateRemainingCount();
}

function updateRemainingCount() {
    let remaining = 0;

    tasks.forEach(function(task) {
        if (!task.done) {
            remaining++;
        }
    });

    remainingCount.textContent = remaining;
}
function clearAllTasks() {
    tasks = [];
    renderTasks();
}
const colorCircles = document.querySelectorAll(".color-circle");

colorCircles.forEach(function(circle) {
    circle.addEventListener("click", function() {

        document.body.style.backgroundColor = circle.dataset.color;

        colorCircles.forEach(function(circle) {
            circle.classList.remove("active");
        });

        this.classList.add("active");
    });
});