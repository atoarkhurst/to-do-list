let projects = [];
let currentProject; 

export function addProject(project){

    projects.push(project);

}


export function getCurrentProject(){

    console.log(currentProject);
    console.log(projects);

    return currentProject
}


export function setCurrentProject(project){

    if (project) {
        currentProject = project;
    }
    
}

//Find and return project using ID
export function getAllProjects(){

    return projects;
}