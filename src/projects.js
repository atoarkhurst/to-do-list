import { updateTaskDisplay } from "./display";

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
    project.tasks = project.taks.filter(task => task.id !== taskID);
}


export function editTask ( project, taskID, title, description, dueDate, priority ) {

    const task = project.tasks.find(task => task.id ==  taskID);

    if (!task) {
        console.error('Task not found');
        return;
    }

    if (title) {
        task.title = title;
    } 

    if (description) {
        task.description = description;
    }

    if (dueDate) {
        task.dueDate = dueDate;
    }

    if (priority) {
        task.title = priority;
    }

    updateTaskDisplay(task, taskID); 

}