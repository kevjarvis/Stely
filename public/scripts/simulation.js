import {updateTextOfElement} from "./utils/helper.js";
import {RETURNS_COMPONENT} from "./handleStates.js";

function checkRisk(riskOptions) {
  let risk;
  for (const typeOfRisk of riskOptions) {
    if (typeOfRisk.checked) {
      risk = typeOfRisk.value;
      window.scroll(0, window.innerHeight*3.4)
    }
  }
  return risk;
}

const handlerInterestRate = {
  'Bajo': 0.02,
  'Medio': 0.08,
  'Alto': 0.16
};

function getEquity (capital, risk) {
  const equity = (capital * (1 + handlerInterestRate[risk])).toFixed(2);
  const equityElement = RETURNS_COMPONENT.childNodes[3];
  updateTextOfElement(equityElement, `$ ${equity}`);
}

export function updateEquity(inputCapital, riskSelection) {
  let riskChecked = checkRisk(riskSelection);
  getEquity(Number(inputCapital.value), riskChecked)
}

