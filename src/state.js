

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

export function populateStorage() {

    let projects_serialized = JSON.stringify( projects );

    localStorage.setItem( 'savedProjects', projects_serialized );

}

export function loadProjects() {

    //Get projects from local storage 
    let projects_deserialized = JSON.parse(localStorage.getItem("savedProjects"));

    projects = projects_deserialized;
}

export function loadDefaultProject(){

    let default_project_deserialized = JSON.parse( localStorage.getItem( "defaultProject") );

    return default_project_deserialized;
}

export function saveDefaultProject( defaultProject ) {

    let default_project_serialized = JSON.stringify( defaultProject );

    localStorage.setItem( 'defaultProject', default_project_serialized);

}

export function saveProject( project ) {

    // Retrieve existing projects from local storage or initialize an empty array if none found
    let projects_deserialized = JSON.parse( localStorage.getItem( "savedProjects" )) || [];

    // Prepare a plain object version of the project that does not include methods
    const projectData = {
        id: project.id,
        title: project.title,
        tasks: project.tasks 
    };

    projects_deserialized.push( projectData );

    let projects_serialized = JSON.stringify(projects_deserialized);

    localStorage.setItem( 'savedProjects', projects_serialized );

}


