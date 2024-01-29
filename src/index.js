import './style.css';
import inboxIcon from './assets/images/inbox-icon.svg';
import tcalIcon from './assets/images/today-icon.svg';
import ucalIcon from './assets/images/upcoming-icon.svg';
import { showTaskForm } from './display';
import { createProject } from './projects';
import { getTask } from './todos';

document.addEventListener('DOMContentLoaded', () => {

    const taskForm =  document.querySelector('.task-form');
    //Create inbox (defualt project)
    const inbox = createProject();

    // show task form on click
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', () => {
       showTaskForm();
    });

    // load icon images
    const inboxIcons = document.querySelectorAll('.inbox-icon');
    inboxIcons.forEach(icon => icon.src = inboxIcon);
    document.querySelector('.tcal-icon').src = tcalIcon;
    document.querySelector('.ucal-icon').src = ucalIcon;

    

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        getTask(inbox);
    });


})

