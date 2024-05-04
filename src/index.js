import './style.css';
import inboxIcon from './assets/images/inbox-icon.svg';
import { displayProject, hideProjectForm, showProjectForm, showTaskForm, hideTaskForm, displayTask, displayProjectTasks, displayLoadedProjects} from './display';
import { getProjectTitle, createProject } from './projects';
import { getTask } from './todos';
import { getCurrentProject, addProject, loadProjects, populateStorage, saveDefaultProject, loadDefaultProject, saveProject, addToInbox, setCurrentProject, getAllProjects } from './state';

let newProject;
let newprojectTitle;
let currentProject;
let currentProjectID;
let loadedProjects;

document.addEventListener('DOMContentLoaded', () => {

    const createTaskForm =  document.querySelector('.task-form');
    const projectForm =  document.querySelector('.project-form');

   // Test whether storage has been populated

   if ( localStorage.getItem("savedProjects") ) {

        loadedProjects = loadProjects();
        currentProject = loadDefaultProject();
        displayLoadedProjects(loadedProjects);
        displayProjectTasks(currentProject);


   } else {

    //create inbox (default project)
    let inbox = createProject('Inbox');
    addProject( inbox );
    saveProject( inbox );
    saveDefaultProject( inbox );
    populateStorage();
    setCurrentProject(inbox);
    currentProject = getCurrentProject();
    displayProjectTasks(currentProject);
   }

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


    // create new project when project form is submitted
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get project info 
        newprojectTitle = getProjectTitle();

        // create project object
        newProject = createProject(newprojectTitle);

        // display project on sidebar
        displayProject(newProject);

        // hide project form from view
        hideProjectForm();

        // add project to projects array
        addProject(newProject);

        saveProject(newProject);

    });

    // create new task when task form is submitted
    createTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

         // get current project
         currentProject = getCurrentProject();

         currentProjectID = currentProject.id;

        // gets new task from form
        const task = getTask(currentProjectID);

        // display task
        displayTask(task);

        // add task to current project's task array
        if (currentProject) {
            currentProject.addTask(task);
            addToInbox(task);
            populateStorage();
        }

        hideTaskForm();
    });

})

