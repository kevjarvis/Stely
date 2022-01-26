import {filterArrayOfObjects} from "./utils/filterArrayOfObjects.js";

class Filter {
  static none (array) {
    return Promise.resolve(array);
  }
}

// Aquí van los filtros creados para los proyectos

export class FilterByNovelty extends Filter {
  static newProjects (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'created-year', 'equal', 2022)
    );
  }

  static mostInnovative (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'innovative', 'equal', true)
    )
  }
}

export class FilterByRisk extends Filter {
  static high (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'risk', 'equal', 'high')
    )
  }

  static medium (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'risk', 'equal', 'medium')
    )
  }

  static low (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'risk', 'equal', 'low')
    )
  }
}

export class FilterByInvestors extends Filter {
  static lessThan100 (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'investors', 'lessThan', 100)
    )
  }

  static between100And500 (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'investors', 'between', [100, 500])
    )
  }

  static greaterThan500 (listOfProjects) {
    return Promise.resolve(
      filterArrayOfObjects(listOfProjects, 'investors', 'greaterThan', 500)
    )
  }
}