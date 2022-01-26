import {projectList} from "./projectData.js";
import {renderProjects} from "./render.js";
import {toggleFilter, loadFilter} from "./filter.js";

// Renderización inicial del proyecto
projectList.then(renderProjects)

toggleFilter();
loadFilter();
