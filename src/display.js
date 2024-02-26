import editIcon from './assets/images/edit.svg';
import flagIcon from './assets/images/flag.svg';
import trashIcon from './assets/images/trash.svg';
import plusIcon from './assets/images/plus-icon.svg';
import inboxIcon from './assets/images/inbox-icon.svg';
import { setCurrentProject, getCurrentProject } from './state';
import { editTask, removeTask } from './projects';

const tasksContainer = document.querySelector('.tasks-container');

const taskForm =  document.querySelector('.task-form');

const projectFrom = document.querySelector('.project-form');

const projectsContainer = document.querySelector('.project-lists');



//add tasks to task list
export function displayTask(task) {
   
    //Create task item container
    const taskItem = createElement('div', {className: 'task-item', id: task.id});

    // Create left and right sections 
    const taskItemLeft = createElement('div', {className: 'task-item-left'});
    const taskItemRight = createElement('div',{className: 'task-item-right'} );

    //add left side contents
    const checkbox = createElement('input', {type: 'checkbox', class: 'task-check'});
    const taskName = createElement('span', {className: 'task-name', textContent: task.title});

    taskItemLeft.appendChild(checkbox);
    taskItemLeft.appendChild(taskName);

    //add right side content
    const dueDate = createElement('div', {className: 'due-date', textContent: task.dueDate});
    const taskBtns = createElement('div', {className: 'task-btns'});

    const project = getCurrentProject();

     // Create and append Edit and Delete buttons
     const editBtn = createButton('edit-btn', editIcon, '', () => displayEditForm(task));
     const deleteBtn = createButton('delete-btn', trashIcon, '', () => deleteTask(task));
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


//Remove task from display

function deleteTask (task) {

    const taskID = task.id;
    const project = getCurrentProject();

    removedTask(project, taskID);

    const removedTask = getElementById(taskID);


    tasksContainer.removeChild(removedTask);

}


// Display edit form 
export function displayEditForm(task){


    const container = document.body; 

    const taskItem = document.getElementById(task.id);

    const editModal = document.createElement('div');
    editModal.className = 'edit-modal';



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


    taskForm.appendChild(submitBtn);

    editModal.appendChild(taskForm);

    container.appendChild(editModal);


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


    const editModal = document.querySelector('.edit-modal');

    editModal.style.display = 'none';

    const taskItem = document.getElementById(taskID);

    const taskName = taskItem.querySelector('.task-name');
    const taskDate = taskItem.querySelector('.due-date');

    taskName.textContent = task.title;
    taskDate.textContent = task.dueDate;







}

