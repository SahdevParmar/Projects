const todo=document.querySelector('#todo')
const progress=document.querySelector('#progress')
const done=document.querySelector('#done')
let dragElement=null;
const tasks=document.querySelectorAll(".task");
const addNewBtn=document.querySelector(".addNewBtn")
const modal=document.querySelector(".modal")
const submitNewTask=document.querySelector(".submitNewTask")



function addDragEventsOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    column.addEventListener("drop",(e)=>{
        column.querySelector('.task-list').appendChild(dragElement);
    })

}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

addNewBtn.addEventListener("click",(e)=>{
    modal.style.display="flex";
})
submitNewTask.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.style.display="none";
    let t=document.createElement("div");
    t.classList.add("task");
    t.setAttribute("draggable","true")
    let heading=document.createElement("h2");
    heading.classList.add("task-title")
    let details=document.createElement("p");
    details.classList.add("task-description")
    let deleteBtn=document.createElement("button")
    deleteBtn.classList.add("delete-button")

    t.appendChild(heading)
    t.appendChild(details)
    t.appendChild(deleteBtn)
    heading.innerText=document.getElementById('taskName').value;
    
    details.innerText=document.getElementById('taskDetails').value;

    todo.querySelector('.task-list').appendChild(t);
    t.addEventListener("drag",(e)=>{
    dragElement=t;
    })
})
tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
    dragElement=task;
})
})
