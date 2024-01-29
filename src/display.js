import editIcon from './assets/images/edit.svg';
import flagIcon from './assets/images/flag.svg';
import trashIcon from './assets/images/trash.svg';
import plusIcon from './assets/images/plus-icon.svg';

const tasksContainer = document.querySelector('.tasks-container');

const taskForm =  document.querySelector('.task-form');

export function displayTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item'; 


    const taskItemLeft = document.createElement('div');
    taskItemLeft.className = 'task-item-left';

    const taskItemRight = document.createElement('div');
    taskItemRight.className = 'task-item-right';

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'task-check';

    const taskName = document.createElement('span');
    taskName.className = 'task-name';

    taskName.innerHTML = task.title; 

    const dueDate = document.createElement('div');
    dueDate.className = 'due-date';
    dueDate.innerHTML = task.dueDate;

    const taskBtns = document.createElement('div');
    taskBtns.className = 'task-btns';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    const editIconImg = document.createElement('img');
    editIconImg.src = editIcon;
    editIconImg.className = 'edit-icon';

    const priorityBtn = document.createElement('button');
    priorityBtn.className = 'priority-btn';
    const priorityIconImg = document.createElement('img');
    priorityIconImg.src = flagIcon;
    priorityIconImg.className = 'priority-icon';

    const trashBtn = document.createElement('button');
    trashBtn.className = 'trash-btn';
    const trashIconImg = document.createElement('img');
    trashIconImg.src = trashIcon;
    trashIconImg.className = 'trash-icon';

    // Append the icons to the buttons
    editBtn.appendChild(editIconImg);
    priorityBtn.appendChild(priorityIconImg);
    trashBtn.appendChild(trashIconImg);

    // Append buttons to button container
    taskBtns.appendChild(editBtn);
    taskBtns.appendChild(priorityBtn);
    taskBtns.appendChild(trashBtn);

    // Append left and right sections to the task item
    taskItem.appendChild(taskItemLeft);
    taskItem.appendChild(taskItemRight);

    // Append the checkbox and name to the left side
    taskItemLeft.appendChild(checkbox);
    taskItemLeft.appendChild(taskName);

    // Append due date and buttons to the right side
    taskItemRight.appendChild(dueDate);
    taskItemRight.appendChild(taskBtns);

    // Finally, append the task item to the tasks container
    tasksContainer.appendChild(taskItem);
}


// function showCreateTaskBtn(){

//     const createTaskBtn = document.createElement('button');
//     createTaskBtn.className = 'create-task-btn';
//     const createTaskImg = document.createElement('img');
//     const createTaskImg.src = plusIcon; 
// }


export function showTaskForm () {
    if (taskForm) {
        taskForm.style.display = 'flex';
    } else {
        console.error("Task form element not found");
    }

}

