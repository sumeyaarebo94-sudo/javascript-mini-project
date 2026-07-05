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
}
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function(task) {

    });
}