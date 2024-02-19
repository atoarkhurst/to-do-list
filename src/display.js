import editIcon from './assets/images/edit.svg';
import flagIcon from './assets/images/flag.svg';
import trashIcon from './assets/images/trash.svg';
import plusIcon from './assets/images/plus-icon.svg';
import inboxIcon from './assets/images/inbox-icon.svg';
import { setCurrentProject, getCurrentProject } from './state';
import { editTask } from './projects';

const tasksContainer = document.querySelector('.tasks-container');

const taskForm =  document.querySelector('.task-form');

const projectFrom = document.querySelector('.project-form');

const projectsContainer = document.querySelector('.project-lists');



//add tasks to task list
export function displayTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item'; 

    taskItem.id = task.id;


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
    editBtn.addEventListener('click', () => displayEditForm(task));

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

// Utility function to create elements with attribute and content
function createElement(tag, attrs, content) {

    el = document.createElement(tag);

    for ( const attr in attrs ) {
        el[attr] = attrs[attr]; 
    }

    if ( content ) {

        el.textContent = content;
    }

    return el
}


// Template function for task HTML 

function taskTemplate(task) {
    return `
    <div class="task-item"> id="${task.id}">
        <div class="task-item-left>
            <input type="checkbox" class="task-check"

    `

//Create edit form fields
function createInputWithLabel({id, type, placeholder, value, labelText} ) {

    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = labelText; 
    label.className = 'visually-hidden';

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    if (value) input.value = value; 

    return { label, input };
}

// Display edit form 
export function displayEditForm(task){


    const taskItem = document.getElementById(task.id);
    taskItem.innerHTML = '';
    const taskForm = document.createElement('form');

    const project = getCurrentProject();

    const taskID = task.id;

    

    const { label: titleLabel, input: titleInput } = createInputWithLabel({
        id: 'todo-title',
        type: 'text',
        placeholder: 'Title: Studying',
        value: task.title,
        labelText: 'Title'
    })

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);

   const { label: descrLabel, input: descrInput } = createInputWithLabel({
        id: 'todo-descr',
        type: 'text',
        placeholder: 'Description: Find Quiet place, open book, and read.',
        value: task.description,
        labelText: 'Description'
   })

   taskForm.appendChild(descrLabel);
   taskForm.appendChild(descrInput);

   const { label: dateLabel, input: dateInput } = createInputWithLabel({
        id: 'due-date',
        type: 'date',
        value: task.dueDate,
        labelText: 'Due Date'
    })


    taskForm.appendChild(dateLabel);
    taskForm.appendChild(dateInput);

    const prioritySelect = document.createElement('select');



    const priorities = ["low", 'medium', 'high'];
    priorities.forEach((priority) => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority.charAt(0).toUpperCase() + priority.slice(1); // Capitalize the first letter
        if (task.priority === priority) {
            option.selected = true;
        }
        prioritySelect.appendChild(option);
    });

    const submitBtn = document.createElement('button');

    submitBtn.textContent = 'Update';

    submitBtn.className = 'edit-submit-btn';

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        editTask(project, taskID, titleInput.value, descrInput.value, dateInput.value, priorities.value );

    });

    taskForm.appendChild(prioritySelect);
    taskForm.className = 'edit-form';
    taskForm.style.display = 'flex';

    taskItem.appendChild(taskForm);

    taskForm.appendChild(submitBtn);

}



//Display project on sidebar
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


    return projectBtn;
}

export function displyProjectTasks(project) {

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

export function updateTaskDisplay(task, taskID) {

    const taskItem = document.getElementById(taskID);

    taskItem.innerHTML = '';

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
    editBtn.addEventListener('click', () => displayEditForm(task));

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



}

