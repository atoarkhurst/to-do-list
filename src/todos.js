import { displayTask } from "./display";

let todos = [];

export function getTask() {
    
    let title = document.querySelector('#todo-title').value;
    let description = document.querySelector('#todo-descr').value;
    let dueDate = document.querySelector('#due-date').value;
    let priority = document.querySelector('#todo-priority').value;

    let todo = createTask(title, description, dueDate, priority);

    
    displayTask(todo);
    
   todos.push(todo);

}

function createTask( title, description, dueDate, priority ) {
    // Create empty object
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,
    };
}

