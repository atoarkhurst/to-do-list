import { format } from "date-fns";

export function getTask( currentProjectID ) {
    
    let title = document.querySelector('#todo-title').value;
    let description = document.querySelector('#todo-descr').value;
    let dueDate = document.querySelector('#due-date').value;
    let priority = document.querySelector('#todo-priority').value;

    let formattedDate = format(new Date(dueDate), 'PP' );

    let todo = createTask(title, description, formattedDate, priority, currentProjectID);

    return todo;

}

function createTask( title, description, dueDate, priority, projectID ) {
    // Create empty object
    return {
        id: Date.now(), // Create unique id for each task
        title,
        description,
        dueDate,
        priority,
        completed: false,
        projectID,
    };
}

