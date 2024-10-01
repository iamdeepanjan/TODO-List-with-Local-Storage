document.addEventListener('DOMContentLoaded', ()=>{
    const todoInput = document.querySelector("#todo-input");
    const addTaskBtn = document.querySelector("#add-task-btn");
    const todoList = document.querySelector("#todo-list")
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach(task => renderTask(task));
    
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
        saveTask();
        renderTask(newtask);
        // todoList.innerHTML = ``;
        // tasks.forEach(task => renderTask(task));
        todoInput.value="";
        console.log(tasks);
    });
    
    function renderTask(task){
        const list = document.createElement("li");
        list.setAttribute("data-id", task.id);
        if(task.isCompleted){
            list.classList.add("completed")
        }
        list.innerHTML = `<span>${task.task}</span><button>Delete</button>`;
        list.addEventListener('click', (event) => {
            if(event.target.tagName === "BUTTON"){
                return;
            }
            task.isCompleted = !task.isCompleted;
            list.classList.toggle("completed");
            saveTask();
        })
        list.querySelector("button").addEventListener('click', (event) => {
            event.stopPropagation();
            tasks = tasks.filter((t) => t.id !== task.id);
            list.remove();
            saveTask();
        })
        todoList.appendChild(list);
    }
    
    function saveTask(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})