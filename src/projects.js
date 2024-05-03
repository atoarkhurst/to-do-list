import { displayProjectTasks, updateTaskDisplay } from "./display";
import { getCurrentProject, getAllProjects, deleteProjectFromStorage, getDefaultProject, populateStorage } from "./state";

export function getProjectTitle(){

    let title = document.querySelector('#project-title').value; 
    return title;
}

export function createProject(title, existingData) {

       const project =  existingData || {
        id: Date.now(), // Create unique id for each project
        title,
        tasks: [],
    };

    project.addTask = function(task) {
        this.tasks.push(task);
    };

    project.deleteTask = function(task) {
        this.tasks = this.tasks.filter((todo) => todo.id !== task.id);
    };
    
    return project;
}



export function deleteProject(project) {

    let projects = getAllProjects();

    const inbox = getDefaultProject();

    const projectID = project.id;

    const projectTasks = project.tasks;

    projectTasks.forEach(task => {

        inbox.deleteTask(task);
        
    });

    populateStorage();

    projects = projects.filter( project => project.id !== projectID);

    deleteProjectFromStorage(project);

}
export function editTask(taskID) {

    const title = document.getElementById('edit-title').value;
    const descr = document.getElementById('edit-descr').value;
    const dueDate = document.getElementById('edit-due-date').value;
    const priority = document.getElementById('edit-priority').value;

    const project = getCurrentProject();

    const task = project.tasks.find(task => task.id ==  taskID);

    if (!task) {
        console.error('Task not found');
        return;
    }

    if (title) {
        task.title = title;
    } 

    if (descr) {
        task.description = descr;
    }

    if (dueDate) {
        task.dueDate = dueDate;
    }

    if (priority) {
        task.priority = priority;
    }
    
    updateTaskDisplay(task, taskID); 

}



