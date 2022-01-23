import {changeComponentsOnScroll} from "./utils/changeOnScroll.js";
import {DESCRIPTION_COMPONENT, handleStatesSimulator} from "./handleStates.js";
import {updateEquity} from "./simulation.js";
import {setInputFilter} from "./utils/inputFilter.js";

history.scrollRestoration = 'manual';

const inputCapital = document.getElementById("capital");
const riskSelection = document.querySelectorAll('input[name="risk_selection"]');

setInputFilter(inputCapital, function(value) {
  return /^\d*$/.test(value); });


/*Comprobación y despliegue por default*/
updateEquity(inputCapital, riskSelection);

$(riskSelection).on('change', () => {
  updateEquity(inputCapital, riskSelection);
})

$('#capital').on('change', () => {
  updateEquity(inputCapital, riskSelection);
})

const referenceElement = DESCRIPTION_COMPONENT;
window.onscroll = () => {
  changeComponentsOnScroll(referenceElement, handleStatesSimulator);
};