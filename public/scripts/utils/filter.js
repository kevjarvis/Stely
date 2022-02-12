import {projectList} from "./projectData.js";
import {toggleAttr} from "./toggleAttr.js";
import {FilterByNovelty, FilterByRisk, FilterByInvestors} from "./filters.js";
import {renderProjects} from "./render.js";

export const toggleFilter = () => {
  const elFilterComponent = document.querySelector('#filter');
  const elFilterButton = document.querySelector('#filter-button');
  elFilterButton.addEventListener('click', () => {
    toggleAttr(
      [elFilterComponent, 'class', 'filter-projects--expanded'],
      [elFilterButton, 'aria-expanded']
    )
  })
}

export const loadFilter = () => {
  const elFilterComponent = document.querySelector('#filter');
  const elFilterInputs = document.querySelectorAll('#filter input')
  elFilterComponent.addEventListener('change', () => {

    // en mapping se guardarán solo los dropdowns que estén checked
    // input.name : input.value
    const mapping = {}

    elFilterInputs.forEach((elInput) => {
      if (elInput.checked) { mapping[elInput.name] = elInput.value }
    })

    // los keys de mapping se obtienen del HTML (input.name)
    projectList
      .then(FilterByNovelty[mapping.novelty])
      .then(FilterByRisk[mapping.risk])
      .then(FilterByInvestors[mapping.investors])
      .then(renderProjects)
  })
}