import {Project} from "./components/project.js";

export const renderProjects = (listOfProjects) => {
  const elTarget = document.querySelector('#all-projects');
  // reset the target
  elTarget.innerHTML = "";

  listOfProjects.forEach(project => {
    const Component = document.createElement('div')
    Component.classList.add('project-wrapper');
    Component.innerHTML = Project(
      project['img'],
      project['name'],
      project['anual_returns'],
      project['investors'])
    elTarget.appendChild(Component);
  })
}