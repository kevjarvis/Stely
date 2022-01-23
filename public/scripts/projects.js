import {projectObject} from "./fetchProjectData.js";
import {renderProjects} from "./renderProjects.js";
import {updatePreferences} from "./filter.js";

const sectionProject = document.querySelector(`#all-projects`);
renderProjects(projectObject, sectionProject, ["project-wrapper"])

// Filter Config
const novedadDropdown = document.querySelector("#filter-novedad");
const riskDropdown = document.querySelector("#filter-risk");
const investorsDropdown = document.querySelector("#filter-investors");


updatePreferences(novedadDropdown, 0, sectionProject);
updatePreferences(riskDropdown, 1, sectionProject);
updatePreferences(investorsDropdown, 2, sectionProject);
