function addTask() {
    const newTask = document.querySelector("#task").value;
    console.log(newTask)

    if (newTask) {
        const li = document.createElement('li');
        // the task is editable by clicking on the task it self
        li.innerHTML = `<div class="edit" onclick="editTask(this)">${newTask}</div><span class="remove" onclick="removeTask(this)">x</span>` ;
        document.querySelector("#tasklist").appendChild(li);
        newTask = '';
    }
}


function removeTask(element) {
    const taskList = document.querySelector("#tasklist");
    taskList.removeChild(element.parentElement)
}

function editTask(element) {
    const li = element.parentElement;
    const content = li.childNodes[0].textContent;
    const newTask = prompt("Edit the task: ", content)
    
    if (newTask) {
        li.childNodes[0].textContent = newTask;
    }
}
// li.innerHTML = `${newTask} <span class="edit" onclick="editTask(this)">edit</span> <span class="remove" onclick="removeTask(this)">x</span>` ;