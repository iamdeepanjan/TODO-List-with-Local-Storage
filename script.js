const todoInput = document.querySelector("#todo-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const todoList = document.querySelector("#todo-list")

let tasks = [];

addTaskBtn.addEventListener('click', ()=>{
    const taskText = todoInput.value.trim();
    if(taskText === ""){
        return;
    }
    const newtask = {
        id: Date.now(),
        task: taskText,
        isCompleted: false
    }
    tasks.push(newtask);
    todoInput.value="";
    console.log(tasks);
});