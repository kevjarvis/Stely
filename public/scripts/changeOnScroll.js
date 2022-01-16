import {updateSrcOfImage, updateStyleOfElement, updateTextOfElement} from "./helper.js";

const handleElementUpdates = {
  'text': updateTextOfElement,
  'style': updateStyleOfElement,
  'image': updateSrcOfImage
}

/**
 * @param {Object} state
 */
function app(state) {
  for (const element of state) {
    handleElementUpdates[element["type"]](
      element["access"],
      element["content"]
    );
  }
}

/**
 * @param {Element} referenceElement
 * @param {Object} states
 */
export function changeComponentsOnScroll(referenceElement, states) {
  const VERTICAL_REFERENCE = referenceElement.getBoundingClientRect().y;
  const INCREMENT = window.innerHeight*0.7;
  const LAG = 1.4;

  if (window.scrollY < VERTICAL_REFERENCE+INCREMENT*0.9) {
    let defaultState = states.default_state;
    app(defaultState);
  }

  let i = 1;
  for (const nameOfState of Object.keys(states).slice(1)) {
    let actualState = states[nameOfState]
    if (window.scrollY > VERTICAL_REFERENCE+INCREMENT*(LAG*i)) {
      app(actualState)
    }
    i++;
  }
}
