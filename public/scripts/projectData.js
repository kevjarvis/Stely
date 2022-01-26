import {getDataFromJSON} from "./utils/fetchData.js";

export const listOfProjects = await getDataFromJSON("scripts/data/project-data.json");

export const projectList = new Promise(resolve => {
  resolve(listOfProjects);
})

