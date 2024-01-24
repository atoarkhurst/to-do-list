import './style.css';
import inboxIcon from './assets/images/inbox-icon.svg';
import tcalIcon from './assets/images/today-icon.svg';
import ucalIcon from './assets/images/upcoming-icon.svg';
import { getTask } from './todos';

let taskForm;

document.addEventListener('DOMContentLoaded', () => {

    // show task form on click
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', () => {
        if (taskForm) {
            taskForm.style.display = 'flex';
        } else {
            console.error("Task form element not found");
        }
    })

    // load icon images
    const inboxIcons = document.querySelectorAll('.inbox-icon');
    inboxIcons.forEach(icon => icon.src = inboxIcon);
    document.querySelector('.tcal-icon').src = tcalIcon;
    document.querySelector('.ucal-icon').src = ucalIcon;

    const taskForm =  document.querySelector('.task-form');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        getTask();
    })


})

