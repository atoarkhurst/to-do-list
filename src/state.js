let projects = [];
let currentProject; 

export function addProject( project ){

    projects.push(project);

}

export function getCurrentProject(){

    return currentProject
}


export function setCurrentProject( project ){

    if (project) {
        currentProject = project;
    }
    
}

export function getAllProjects(){

    return projects;
}

export function findProjectByID( projectID ) {

    return projects.find( project => project.id === projectID );
}