import { displyProjectTasks, updateTaskDisplay } from "./display";
import { getCurrentProject } from "./state";


export function getProjectTitle(){

    let title = document.querySelector('#project-title').value; 
    return title;
}

export function createProject(title){

    return {

        id: Date.now(), // Create unique id for each project
        title,
        tasks: [],
        addTask(task) {
            this.tasks.push(task);
        }

    };
}

export function removeTask(project, taskID) {
    project.tasks = project.tasks.filter(task => task.id !== taskID);
}


export function editTask (taskID) {

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


    console.log(task);


    updateTaskDisplay(task, taskID); 

}

export function createProjectListener(projectBtn, project){

    projectBtn.addEventListener('click', () => displyProjectTasks(project));
}