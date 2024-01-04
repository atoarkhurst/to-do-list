
function createTodo( title, description, dueDate, priority ) {
    // Create empty object
    const todo = {
        title,
        description,
        dueDate,
        priority,
    };
    
    return todo;
    
}

const addTaskBtn = document.querySelector('.add-task-btn');

addTaskBtn.addEventListener('click', getTask);

function getTask (){

    console.log('button clicked');
}
