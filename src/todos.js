import { displayTask } from "./display";

export function getTask() {
    
    let title = document.querySelector('#todo-title').value;
    let description = document.querySelector('#todo-descr').value;
    let dueDate = document.querySelector('#due-date').value;
    let priority = document.querySelector('#todo-priority').value;

    let todo = createTask(title, description, dueDate, priority);

    return todo;

}

function createTask( title, description, dueDate, priority ) {
    // Create empty object
    return {
        id: Date.now(), // Create unique id for each task
        title,
        description,
        dueDate,
        priority,
        completed: false,
    };
}

