import { createProject } from "./projects";

let projects = [];
let currentProject; 
let defaultProject;

export function addProject( project ){

    projects.push(project);

}

export function getCurrentProject(){

    return currentProject
}

export function setCurrentProject( project ){

    if ( project ) {
        
        currentProject = project;
    }
    
}

export function getDefaultProject() {

    return defaultProject;

}

export function getAllProjects(){

    return projects;
}

export function findProjectByID( projectID ) {


    const foundProject = projects.find( project => project.id === projectID );

    return foundProject;
}

export function addToInbox(task) {
    
    if ( currentProject.id != defaultProject.id ) {

        const inbox = projects.find((project) => project.id = defaultProject.id);

        inbox.addTask(task);

    }
}

export function deleteFromInbox(task) {

    const inbox = projects.find((project) => project.id = defaultProject.id);

    inbox.deleteTask(task);
}

export function populateStorage() {

    let projects_serialized = JSON.stringify( projects );

    localStorage.setItem( 'savedProjects', projects_serialized );

}

export function loadProjects() {

    //Get projects from local storage 
    const projectsData = JSON.parse(localStorage.getItem("savedProjects")) || [] ;

    const updatedProjectData = projectsData.map((projectData => createProject(projectData.title, projectData)));

    projects = updatedProjectData;

    return updatedProjectData;

}

export function loadDefaultProject(){

    let default_project_deserialized = JSON.parse( localStorage.getItem( "defaultProject") );

    defaultProject = projects.find( project => project.id === default_project_deserialized.id );

    return defaultProject;
}

export function saveDefaultProject( project ) {

    let default_project_serialized = JSON.stringify( project ) || [];

    defaultProject = project;

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
    
     // Add the cleaned project object to the array
    projects_deserialized.push( projectData );

     // Serialize the updated array of projects
    let projects_serialized = JSON.stringify(projects_deserialized);

    // Save the serialized string back to local storage
    localStorage.setItem( 'savedProjects', projects_serialized );

}

export function deleteProjectFromStorage( project ) {

     // Retrieve existing projects from local storage or initialize an empty array if none found
     let projects_deserialized = JSON.parse( localStorage.getItem( "savedProjects" )) || [];

     const projectID = project.id;

     projects_deserialized = projects_deserialized.filter( project => project.id !== projectID );


      // Serialize the updated array of projects
    let projects_serialized = JSON.stringify(projects_deserialized);

     // Save the serialized string back to local storage
     localStorage.setItem( 'savedProjects', projects_serialized );

}


