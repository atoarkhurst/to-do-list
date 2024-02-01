import './style.css';
import inboxIcon from './assets/images/inbox-icon.svg';
import tcalIcon from './assets/images/today-icon.svg';
import ucalIcon from './assets/images/upcoming-icon.svg';
import { displayProject, showProjectFrom, showTaskForm } from './display';
import { getProjectInfo, createProject } from './projects';
import { getTask } from './todos';
import { getCurrentProject, setCurrentProject, addProject } from './state';

let newProject;
let newprojectTitle;

document.addEventListener('DOMContentLoaded', () => {

    const taskForm =  document.querySelector('.task-form');
    const projectForm =  document.querySelector('.project-form');
    //Create inbox (default project)
    const inbox = createProject();
    setCurrentProject(inbox.id);

    // show task form on click
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', () => {
       showTaskForm();
    });

    // show project form on click
    const createProjectBtn = document.querySelector('.create-project-btn');
    createProjectBtn.addEventListener('click', () => {
       showProjectFrom();
    });


    // load icon images
    const inboxIcons = document.querySelectorAll('.inbox-icon');
    inboxIcons.forEach(icon => icon.src = inboxIcon);
    document.querySelector('.tcal-icon').src = tcalIcon;
    document.querySelector('.ucal-icon').src = ucalIcon;

    
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        newprojectTitle = getProjectInfo();
        newProject = createProject(newprojectTitle);
        displayProject(newProject);
        addProject(newProject);
    });


    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        getTask(inbox);
    });


})

