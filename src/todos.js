
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

