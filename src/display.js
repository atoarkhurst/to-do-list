import editIcon from './assets/images/edit.svg';
import flagIcon from './assets/images/flag.svg';
import trashIcon from './assets/images/trash.svg';

const tasksContainer = document.querySelector('.tasks-container');

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

    const taskBtns = document.createElement('div');
    taskBtns.className = 'task-btns';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    const editIcon = document.createElement('img');
    editIcon.src = flagIcon;
    editIcon.className = 'flag-icon';

    const priorityBtn = document.createElement('button');
    priorityBtn.className = 'priority-btn';

    const trashBtn = document.createElement('button');
    trashBtn.className = 'trash-btn';
    const trashIconImg = document.createElement('img');
    trashIconImg.src = trashIcon;
    trashIconImg.className = 'trash-icon';

    // Append the icons to the buttons
    editBtn.appendChild(editIcon);
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
