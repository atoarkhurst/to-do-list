import editIcon from './assets/images/edit.svg';
import trashIcon from './assets/images/trash.svg';
import inboxIcon from './assets/images/inbox-icon.svg';
import { setCurrentProject, getCurrentProject, findProjectByID, populateStorage, getDefaultProject, deleteFromInbox } from './state';
import { editTask, deleteProject } from './projects';

// DOM Elements
const tasksContainer = document.querySelector('.tasks-container');
const projectForm = document.querySelector('.project-form');
const projectsContainer = document.querySelector('.project-lists');
const createModal = document.getElementById('create-modal');
const editModal = document.getElementById('edit-modal');
const overlay = document.querySelector('.overlay');
const projectHeader = document.querySelector('.project-title');
const inboxBtn = document.querySelector('.inbox-btn');
inboxBtn.addEventListener('click', showInbox );

// Cancel Buttons and their event listeners
const cancelAddTaskBtn = createModal.querySelector('.cancel-btn');
cancelAddTaskBtn.addEventListener('click', hideTaskForm);
const cancelEditTaskBtn = editModal.querySelector('.cancel-btn');
cancelEditTaskBtn.addEventListener('click', hideEditForm);

// Display tasks in the task list
export function displayTask(task) {

    const currentProject = getCurrentProject();
    const inbox = getDefaultProject();

    //Create task item container
    const taskItem = createElement('div', {className: 'task-item', id: task.id});

    // Create left and right sections 
    const taskItemLeft = createElement('div', {className: 'task-item-left'});

    const taskItemRight = createElement('div',{className: 'task-item-right'} );

    //add left side content
    const checkbox = createElement('input', {type: 'checkbox', class: 'task-check'});

    const taskName = createElement('span', {className: 'task-name', textContent: task.title});

    taskItemLeft.appendChild(checkbox);

    taskItemLeft.appendChild(taskName);

    //add right side content
    const dueDate = createElement('div', {className: 'due-date', textContent: task.dueDate});

    const taskBtns = createElement('div', {className: 'task-btns'});

     // Create and append Edit and Delete buttons
     const editBtn = createButton('edit-btn', editIcon, '', () => showEditForm(task));

    
     const deleteBtn = createButton('delete-btn', trashIcon, '', () => {
         
        deleteFromInbox(task);

         if ( currentProject.id !== inbox.id ) {
            deleteFromCurrentProject(currentProject, task);
         }

         if ( currentProject.id === inbox.id && currentProject.id !== task.projectID  ) {

            const sourceProject = findProjectByID(task.projectID);

            deleteFromSourceProject(sourceProject, task);
         }

         removeTaskFromDisplay(task);
         populateStorage();
        
     } );

     taskBtns.appendChild(editBtn);

     taskBtns.appendChild(deleteBtn);
     
     taskItemRight.appendChild(dueDate);
     
     taskItemRight.appendChild(taskBtns);

    // Append sections to taskItem
    taskItemRight.appendChild(taskBtns);

    taskItem.appendChild(taskItemLeft);

    taskItem.appendChild(taskItemRight);

    // Append taskItem to the container
    tasksContainer.appendChild(taskItem);
}

// Utility function to create elements with attribute and content
function createElement(tag, attrs, content) {

   const el = document.createElement(tag);

    for ( const attr in attrs ) {
        
        el[attr] = attrs[attr]; 

    }

    if ( content ) {

        el.textContent = content;

    }

    return el
}


// Utilty function to create a button
function createButton(className, iconSrc, text, onCLick) {

    const button = document.createElement('button');

    button.className = className;

    if (iconSrc) {

        const icon = document.createElement('img');
        icon.src = iconSrc;
        icon.className = 'btn-icon';
        button.appendChild(icon);
    }

    if (text) {

        const buttonText = document.createTextNode(text);
        button.appendChild(buttonText);

      }
    
    button.addEventListener('click', onCLick);
    return button;
}


//Remove task from display
function removeTaskFromDisplay(task) {

    const taskID = task.id;
    const removedTask = document.getElementById(taskID);
    tasksContainer.removeChild(removedTask);

}

//Remove project from display
function removeProjectFromDisplay(project) {

    const projectID = project.id;

    const removedProject = document.getElementById(projectID);

    projectsContainer.removeChild(removedProject);

}

// Remove task from current project
function deleteFromCurrentProject(project, task) {

    project.deleteTask(task);
}

// Remove task from source project
function deleteFromSourceProject(project, task) {

    project.deleteTask(task);
}

// Display edit form 
export function showEditForm(task){

    

    if (editModal) {
    
        const taskID = task.id;

        const title = document.getElementById('edit-title');
        title.value = task.title;

        const descr = document.getElementById('edit-descr');
        descr.value = task.description;

        const date = document.getElementById('edit-due-date');
        date.value = task.dueDate;

        const priority = document.getElementById('edit-priority');
        priority.value = task.priority;

        editModal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        const submitBtn = document.getElementById('edit-task-btn');

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            editTask(taskID);
        });
    }
}

// Hide edit form 
export function hideEditForm(){

    if (editModal) {

        editModal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}



//Display project on sidebar
export function displayProject(project){


    let inbox = getDefaultProject();


    if  ( project.id !== inbox.id ) {

        const projectListItem = createElement('li', {className: 'project-list-item', id: project.id});
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
    
        const deleteBtn = createButton('project-delete-btn', trashIcon, '', () => {
    
            deleteProject(project);
            removeProjectFromDisplay(project);
         } );
    
        projectBtn.appendChild(itemContainer);
        itemContainer.appendChild(itemIcon);
        itemContainer.appendChild(itemLabel);
        projectListItem.appendChild(projectBtn);
        projectListItem.appendChild(deleteBtn);
        projectsContainer.appendChild(projectListItem);
    
        projectBtn.addEventListener('click', () => displayProjectTasks(project));

    }

   
}

export function displayProjectTasks(project) {

    const projectTitle = project.title;

    projectHeader.textContent = projectTitle;

    if ( projectHeader !== project.title ) {
        projectHeader.textContent = projectTitle;
    }
    
    let tasks;

    emptyTasks();

    setCurrentProject(project);

    if (project.tasks) {
         tasks = project.tasks;
    }

    if (tasks) {

        tasks.forEach(task => {
            displayTask(task);
        });
    }

}

function showInbox(){

    let inbox = getDefaultProject();

    const projectTitle =  inbox.title;

    projectHeader.textContent = projectTitle;

    displayProjectTasks(inbox);
}

export function emptyTasks(){

    tasksContainer.innerHTML = '';
}

export function showTaskForm () {

    if (createModal) {
        createModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        console.error("Task form element not found");
    }

}

export function hideTaskForm () {

    if (createModal) {
        createModal.classList.add('hidden');
        overlay.classList.add('hidden');
    } else {
        console.error("Task form element not found");
    }

    const createForm = createModal.querySelector('.task-form');

    createForm.reset();
}

export function showProjectForm(){

    if (projectForm) {
        projectForm.classList.remove('hidden');
    } else {
        console.error("Project form element not found");
    }

}

export function hideProjectForm(){

    projectForm.reset();
    
    if (projectForm) {
        projectForm.classList.add('hidden');
    } else {
        console.error("Project form element not found");
    }
}

export function updateTaskDisplay(task, taskID) {

    hideEditForm();

    const taskItem = document.getElementById(taskID);

    const taskName = taskItem.querySelector('.task-name');
    const taskDate = taskItem.querySelector('.due-date');

    taskName.textContent = task.title;
    taskDate.textContent = task.dueDate;
}


// Display all of the loaded projects
export function displayLoadedProjects (projects) {
    

    projects.forEach((project) => {
        displayProject(project);
    });
}