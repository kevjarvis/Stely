import {changeComponentsOnScroll} from "../utils/changeOnScroll.js";
import {DESCRIPTION_COMPONENT, handleStatesSimulator} from "../utils/handleStates.js";
import {updateEquity} from "../utils/simulation.js";
import {setInputFilter} from "../utils/inputFilter.js";
import {updateCapital} from "../utils/capital.js";

history.scrollRestoration = 'manual';

updateCapital();

const inputCapital = document.getElementById("capital");
const riskSelection = document.querySelectorAll('input[name="risk_selection"]');

// Validación regEx del input del simulador
setInputFilter(inputCapital, function(value) {
  return /^\d*$/.test(value); });

/*Comprobación y despliegue por default*/
updateEquity(inputCapital, riskSelection);

for (const risk of riskSelection) {
  risk.addEventListener('change', () => {
    updateEquity(inputCapital, riskSelection)
  })
}

inputCapital.addEventListener('change', () => {
  updateEquity(inputCapital, riskSelection);
})

const simulatorForm = document.querySelector('.simulator-form');
simulatorForm.reset();
simulatorForm.addEventListener('submit', (event) => {
  event.preventDefault();
  window.scroll (0, window.innerHeight*3)
})

const referenceElement = DESCRIPTION_COMPONENT;
window.onscroll = () => {
  changeComponentsOnScroll(referenceElement, handleStatesSimulator);
};


const CAPITAL_KEY_LOCALSTORAGE = "capital";
const STARTER_CAPITAL = 100000;

const isInLocalstorage = key => !!localStorage.getItem(key);
const setCapitalLocally = () => localStorage.setItem(CAPITAL_KEY_LOCALSTORAGE, STARTER_CAPITAL);

const hasCapitalStored = isInLocalstorage(CAPITAL_KEY_LOCALSTORAGE);
const hasInvestmentsStored = isInLocalstorage('investments');

(!hasInvestmentsStored) ? localStorage.setItem('investments', '[]') : null;
(!hasCapitalStored) ? setCapitalLocally(): null;

updateCapital();

const newsletterButton = document.querySelector('.newsletter-form button');
newsletterButton.addEventListener('click', e => {
  e.preventDefault();
  swal("Bienvenido!", "Tu correo electrónico ha sido añadido a nuestro newsletter", "success");
})