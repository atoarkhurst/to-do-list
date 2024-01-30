let projects = [];
let currentProjectID; 

export function addProject(project){

    projects.push(project);

}


export function getCurrentProject(){

    return currentProjectID
}


export function setCurrentProject(projectID){

    if (projectID) {
        currentProjectID = projectID;
    }
    
}