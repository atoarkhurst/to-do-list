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
