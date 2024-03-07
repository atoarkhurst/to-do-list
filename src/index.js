import './style.css';
import inboxIcon from './assets/images/inbox-icon.svg';
import tcalIcon from './assets/images/today-icon.svg';
import ucalIcon from './assets/images/upcoming-icon.svg';
import { displayProject, hideProjectForm, showProjectForm, showTaskForm, hideTaskForm, displayTask} from './display';
import { getProjectTitle, createProject, createProjectListener } from './projects';
import { getTask } from './todos';
import { getCurrentProject, setCurrentProject, addProject } from './state';

let newProject;
let newprojectTitle;
let currentProject;
const inboxBtn = document.querySelector('.inbox-btn');

document.addEventListener('DOMContentLoaded', () => {

    const createTaskForm =  document.querySelector('.create-task-form');
    const projectForm =  document.querySelector('.project-form');

    //create inbox (default project)
    const inbox = createProject();
    setCurrentProject(inbox);

    inboxBtn.addEventListener('click', () => {
        displayProject(inbox); 
    });

    // show task form on click
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', () => {
       showTaskForm();
    });

    // show project form on click
    const createProjectBtn = document.querySelector('.create-project-btn');
    createProjectBtn.addEventListener('click', () => {
       showProjectForm();
    });


    // load icon images
    const inboxIcons = document.querySelectorAll('.inbox-icon');
    inboxIcons.forEach(icon => icon.src = inboxIcon);
    document.querySelector('.tcal-icon').src = tcalIcon;
    document.querySelector('.ucal-icon').src = ucalIcon;


    // create new project when project form is submitted
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get project info 
        newprojectTitle = getProjectTitle();

        // create project object
        newProject = createProject(newprojectTitle);

        // display project on sidebar
        const projectBtn = displayProject(newProject);

        createProjectListener(projectBtn, newProject);
        

        // hide project form from view
        hideProjectForm();


        // add project to projects array
        addProject(newProject);

    });

    // create new task when task form is submitted
    createTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // gets new task from form
        const task = getTask();

        // display task
        displayTask(task);

        // get current project
        currentProject = getCurrentProject();

        // add task to current project's task array
        if (currentProject) {

            currentProject.addTask(task);
            inbox.addTask(task);
        }

        hideTaskForm();
    });


})

