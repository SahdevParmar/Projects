let tasksData={}

const todo=document.querySelector('#todo')
const progress=document.querySelector('#progress')
const done=document.querySelector('#done')
const columns=[todo,progress,done]
let dragElement=null;

if(localStorage.getItem("tasksData")){
    const data =JSON.parse(localStorage.getItem("tasksData"));
    console.log(data)
}


const tasks=document.querySelectorAll(".task");
const addNewBtn=document.querySelector(".addNewBtn")
const modal=document.querySelector(".modal")
const submitNewTask=document.querySelector(".submitNewTask")


function checkCount(){
    columns.forEach(col=>{
        const tasks=col.querySelectorAll(".task");
        const count=col.querySelector(".right");

        tasksData[col.id]=Array.from(tasks).map(t=>{
            return {
                heading: t.querySelector("h2").innerText,
                description: t.querySelector("p").innerText,
            }
        })
        localStorage.setItem("tasksData",JSON.stringify(tasksData))
        count.innerText=tasks.length;
        })
}
checkCount();

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
        
        checkCount();
    })

}

function createTask(columnName){
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

    columnName.querySelector('.task-list').appendChild(t);
    t.addEventListener("drag",(e)=>{
    dragElement=t;
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
    createTask(todo);
    checkCount();
})

tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
    dragElement=task;
})
})
