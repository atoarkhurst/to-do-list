let projects = [];
let currentProject; 

export function addProject( project ){

    projects.push(project);

    addProjectToStorage(project);

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


export function loadProjects() {

    let projects_deserialized = JSON.parse(localStorage.getItem("savedProjects"));

    console.log(projects_deserialized);

}

export function populateStorage() {

    let projects_serialized = JSON.stringify(projects);

    localStorage.setItem('savedProjects', projects_serialized);

  
    
}

export function addProjectToStorage(project) {

    let projects_deserialized = JSON.parse(localStorage.getItem("savedProjects"));

    projects_deserialized.push(project);

    let projects_serialized = JSON.stringify(projects_deserialized);

    localStorage.setItem('savedProjects', projects_serialized);

   

}
