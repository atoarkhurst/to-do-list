import './style.css';
import inboxIcon from './assets/images/inbox-icon.svg';
import tcalIcon from './assets/images/today-icon.svg';
import ucalIcon from './assets/images/upcoming-icon.svg';
import { createTodo } from './todos';

let taskForm;

document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.querySelector('.add-task-btn');
    
    addTaskBtn.addEventListener('click', () => {
        if (taskForm) {
            taskForm.style.display = 'flex';
        } else {
            console.error("Task form element not found");
        }
    })

    const inboxIcons = document.querySelectorAll('.inbox-icon');
    inboxIcons.forEach(icon => icon.src = inboxIcon);

    document.querySelector('.tcal-icon').src = tcalIcon;
    document.querySelector('.ucal-icon').src = ucalIcon;

    taskForm =  document.querySelector('.task-form');


})


function getTask() {
   
}