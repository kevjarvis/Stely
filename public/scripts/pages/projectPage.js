import {projectList} from "../utils/projectData.js";
import {renderProjects} from "../utils/render.js";
import {toggleFilter, loadFilter} from "../utils/filter.js";
import {setInputFilter} from "../utils/inputFilter.js";

// Renderización inicial del proyecto
projectList.then(renderProjects)

toggleFilter();
loadFilter();

const CAPITAL_KEY_LOCALSTORAGE = "capital";
const STARTER_CAPITAL = 100000;

const isInLocalstorage = key => !!localStorage.getItem(key);
const setCapitalLocally = () => localStorage.setItem(CAPITAL_KEY_LOCALSTORAGE, STARTER_CAPITAL);
const getCapital = () => localStorage.getItem(CAPITAL_KEY_LOCALSTORAGE);
const updateCapitalElement = element => element.innerText = getCapital();
const reduceEquityIn = (amount) => localStorage.setItem(
  CAPITAL_KEY_LOCALSTORAGE,
  JSON.stringify(getCapital() - amount)
)

const hasCapitalStored = isInLocalstorage(CAPITAL_KEY_LOCALSTORAGE);
const hasInvestmentsStored = isInLocalstorage('investments');
const capitalElements = [...document.querySelectorAll('[stely-capital]')];

(!hasInvestmentsStored) ? localStorage.setItem('investments', '[]') : null;
(!hasCapitalStored) ? setCapitalLocally(): null;
capitalElements.forEach(updateCapitalElement);

/*Proceso de inversion*/
const invest_input = document.querySelector('#invest-form input');
setInputFilter(invest_input, function(value) {
  return /^\d*$/.test(value); });

const invest_button = document.getElementById('invest-button');

invest_button.addEventListener('click', (e) => {
  e.preventDefault();

  const elInputCapital = e.target.previousElementSibling
    .querySelector('input');
  const amountInvested = elInputCapital.value;

  if (amountInvested === '0' || amountInvested === '') {
    elInputCapital.form.reset();
    return swal("Error en tu inversión", "No puedes invertir $0 en algún proyecto, invierte desde $1", "error");
  } else if (amountInvested > Number(localStorage.getItem('capital'))) {
    elInputCapital.form.reset();
    return swal("Capital insuficiente", "No cuentas con capital suficiente", "error");
  }


  let proyectosActuales = JSON.parse(localStorage.getItem('investments'));
  const hasAlreadyInvested = (projectName) => {
    return !!proyectosActuales.filter(p => p.name === projectName).length
  }

  try {
    const project = {
      name: e.target.attributes['stely-project'].value,
      amount: amountInvested
    }

    if (hasAlreadyInvested(project.name)) {
      proyectosActuales.forEach(item => {
        if (item.name === project.name) item.amount = Number(item.amount) + Number(amountInvested)
      })
    } else {
      proyectosActuales.push(project);
    }

    localStorage.setItem('investments', JSON.stringify([...proyectosActuales]))
    elInputCapital.form.reset();
    swal("Hecho! ;)", `Has invertido exitosamente $${project.amount} en ${project.name}`, "success");

  } catch (e) {
    swal("Opps :(", `Ha ocurrido algún error inesperado, recargue e intente nuevamente`, "error");
    throw new Error(e)
  }
  reduceEquityIn(amountInvested);

  capitalElements.forEach(updateCapitalElement)
})
