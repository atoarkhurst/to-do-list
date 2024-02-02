import editIcon from './assets/images/edit.svg';
import flagIcon from './assets/images/flag.svg';
import trashIcon from './assets/images/trash.svg';
import plusIcon from './assets/images/plus-icon.svg';
import inboxIcon from './assets/images/inbox-icon.svg';
import { setCurrentProject } from './state';

const tasksContainer = document.querySelector('.tasks-container');

const taskForm =  document.querySelector('.task-form');

const projectFrom = document.querySelector('.project-form');

const projectsContainer = document.querySelector('.project-lists');

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

export function displayProject(project){

    const projectListItem = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.className = 'list-item-btn';
    const itemContainer = document.createElement('div');
    itemContainer.className = 'list-item-container';
    const itemIcon = document.createElement('img');
    itemIcon.classList.add('list-icon', 'inbox-icon');
    itemIcon.src = inboxIcon;

    const itemLabel = document.createElement('span');
    itemLabel.className = 'list-item-name';
    itemLabel.innerHTML = project.title;


    projectBtn.appendChild(itemContainer);


    itemContainer.appendChild(itemIcon);
    itemContainer.appendChild(itemLabel);

    projectListItem.appendChild(projectBtn);

    projectsContainer.appendChild(projectListItem);

    projectBtn.addEventListener("click", displyProjectTasks);

}

export function displyProjectTasks(project) {

    emptyTasks();

    setCurrentProject(project.id);

    
    const tasks = project.tasks;

}

export function emptyTasks(){

    tasksContainer.innerHTML = '';
}




export function showTaskForm () {
    if (taskForm) {
        taskForm.style.display = 'flex';
    } else {
        console.error("Task form element not found");
    }

}


export function hideTaskForm () {
    if (taskForm) {
        taskForm.style.display = 'none';
    } else {
        console.error("Task form element not found");
    }

}

export function showProjectForm(){

    if (projectFrom) {
        projectFrom.style.display = 'flex';
    } else {
        console.error("Project form element not found");
    }

}

export function hideProjectForm(){
    
    if (projectFrom) {
        projectFrom.style.display = 'none';
    } else {
        console.error("Project form element not found");
    }
}

// export function updateTaskDisplay(task, taskID) {

// }

// export function displayProject()
