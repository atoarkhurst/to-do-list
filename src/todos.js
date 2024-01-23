let todos = [];

export function getTodoInput(ev) {
    ev.preventDefault();
    
}

export function createTodo( title, description, dueDate, priority ) {
    // Create empty object
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,
    };
}

