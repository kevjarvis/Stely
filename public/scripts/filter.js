import {projectObject} from "./fetchProjectData.js";
import {filterArrayOfObjects} from "./utils/fillterArray.js";
import {renderProjects} from "./renderProjects.js";

const filterButton = document.querySelector('#filter-button');
const filterComponent = document.querySelector('#filter');

function toggleFilter() {
  if (filterComponent.classList.contains('filter-projects--expanded')) {
    filterComponent.classList.remove('filter-projects--expanded');
    filterButton.setAttribute('aria-expanded', 'false');
  } else {
    filterComponent.classList.add('filter-projects--expanded');
    filterButton.setAttribute('aria-expanded', 'true');
  }
}

filterButton.addEventListener('click', () => {
  toggleFilter();
})

const filterNovedad = listOfProjects => filterArrayOfObjects(
  listOfProjects,
  'equal',
  'created-year',
  2022
);

const filterInnovative = listOfProjects => filterArrayOfObjects(
  listOfProjects,
  'equal',
  'innovative',
  true
);

const filterRisk = (listOfProjects, risk) => filterArrayOfObjects(
  listOfProjects,
  'equal',
  'risk',
  risk
);

const filterInvestors = (listOfProjects, mode, numbers) => {
  if (typeof numbers != 'object') {
    throw new Error('El parámetro numbers tiene que ser un array');
  }

  switch (mode) {
    case 'lessThan':
      return filterArrayOfObjects(
        listOfProjects,
        'lessThan',
        'investors',
        numbers[0]
      )
    case 'greaterThan':
      return filterArrayOfObjects(
        listOfProjects,
        'graterThan',
        'investors',
        numbers[0]
      )
    case 'between':
      if (numbers.length != 2) {
        throw new Error("Para utilizar el filtro 'between' que añadir un array con 2 números")
      } else {
        return filterArrayOfObjects(
          listOfProjects,
          'between',
          'investors',
          numbers
        )
      }
  }
};

let projects = projectObject;
let preferences = [undefined, undefined, undefined];

export function updatePreferences(element, posOrder, projectContainer) {
  let actualPreferences = projects;
  const menudropdown = element.children[1];
  element.addEventListener('change', () => {
    for (let item of menudropdown.children) {
      if (item.tagName === 'INPUT' && item.checked) {
        preferences[posOrder] = (item.value !== 'none') ? item.value : undefined;
      }
    }
    console.log(preferences)

    if (preferences[0] !== undefined) {
      switch (preferences[0]) {
        case "new-projects":
          actualPreferences = filterNovedad(projects)
          break;
        case "most-innovative":
          actualPreferences = filterInnovative(projects)
          break;
      }
    } else {
      actualPreferences = projects;
    }

    if (preferences[1] !== undefined) {
      switch (preferences[1]) {
        case "high-risk":
          actualPreferences = filterRisk(actualPreferences, 'high');
          break;
        case "medium-risk":
          actualPreferences = filterRisk(actualPreferences, 'medium');
          break;
        case "low-risk":
          actualPreferences = filterRisk(actualPreferences, 'low');
          break;
      }
    }

    if (preferences[2] !== undefined) {
      switch (preferences[2]) {
        case "minus-100":
          actualPreferences = filterInvestors(actualPreferences, 'lessThan', [100])
          break;
        case "between100-500":
          actualPreferences = filterInvestors(actualPreferences, 'between', [100, 500]);
          break;
        case "more-than-500":
          actualPreferences = filterInvestors(actualPreferences, 'greaterThan', [500]);
          break;
      }
    }
    renderProjects(actualPreferences, projectContainer, ['project-wrapper'])
  })
}