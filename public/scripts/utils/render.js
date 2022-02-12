import {Project} from "../components/project.js";
import {Modal} from "./modal.js";

const modal = document.querySelector('#modal-full');
const investForm = document.querySelector('#invest-form')

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

    const bodyOfProject = Component.children[0];
    const buttonOfProject = Component.children[1].children[0];
    const projectElements = [bodyOfProject, buttonOfProject];

    const projectModal = new Modal(modal);

    const updateModal = () => {
      projectModal.updateTitle(project.name)
      projectModal.updateDescription(project.description)
      projectModal.updateImage(project.name)
      projectModal.setProjectAttr(project.name)
      investForm.reset();
    }

    projectElements.map( el => el.onclick = updateModal )
  })
}