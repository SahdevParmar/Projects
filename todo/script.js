let tasksData = {}

const todo = document.querySelector('#todo')
const progress = document.querySelector('#progress')
const done = document.querySelector('#done')
const columns = [todo, progress, done]
let dragElement = null;


let data = JSON.parse(localStorage.getItem("tasks")) || {
    todo: [{ heading: 'Add-Yoga-Task?', description: 'Click add new to add.' },
    { heading: 'Buy Gift for friend?', description: 'Click add new to add.' }
    ],
    progress: [{ heading: 'Book tickets?', description: 'Click add new to add.' }],
    done: [{ heading: 'Dentist appointment', description: 'Click add new to add.' }]
};

for (const col in data) {
    const column = document.querySelector(`#${col}`);
    data[col].forEach(task => {
        console.log(task)
        createTask(document.getElementById(col), task.heading, task.description)
    })
}
checkCount();




const tasks = document.querySelectorAll(".task");
const addNewBtn = document.querySelector(".addNewBtn")
const modal = document.querySelector(".modal")
const submitNewTask = document.querySelector(".submitNewTask")


function checkCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                heading: t.querySelector("h2").innerText,
                description: t.querySelector("p").innerText,
            }
        })
        localStorage.setItem("tasks", JSON.stringify(tasksData))
        count.innerText = tasks.length;
    })
}

function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {
        column.querySelector('.task-list').appendChild(dragElement);

        checkCount();
    })

}

function createTask(columnName, Name, Details) {
    let t = document.createElement("div");
    t.classList.add("task");
    t.setAttribute("draggable", "true");

    let heading = document.createElement("h2");
    heading.classList.add("task-title");
    heading.innerText = Name;

    let details = document.createElement("p");
    details.classList.add("task-description");
    details.innerText = Details;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");

    t.appendChild(heading);
    t.appendChild(details);
    t.appendChild(deleteBtn);

    columnName.querySelector('.task-list').appendChild(t);

    t.addEventListener("dragstart", () => {
        dragElement = t;
    });

    // ✅ DELETE LISTENERS (Attach directly to this task's delete button)
    deleteBtn.addEventListener("click", () => {
        t.remove();    // 1. Remove task DOM element
        checkCount();  // 2. Recalculate remaining tasks & update localStorage
    });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

addNewBtn.addEventListener("click", (e) => {
    modal.style.display = "flex";
})
submitNewTask.addEventListener("click", (e) => {
    e.preventDefault();
    tName = document.getElementById('taskName').value;
    tDetails = document.getElementById('taskDetails').value;
    modal.style.display = "none";
    createTask(todo, tName, tDetails);
    document.getElementById('taskName').value = "";
    document.getElementById('taskDetails').value = "";
    checkCount();
})

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        dragElement = task;
    })
})

