/**
 * @param {Element} element
 * @param {string} text
 */

export function updateTextOfElement (element, text) {
  element.innerText = text;
}

/**
 * @param {Element} element
 * @param {string} css
 */
export function updateStyleOfElement (element, css) {
  element["style"].cssText = css;
}

/**
 * @param {Element} element
 * @param {string} src
 */
export function updateSrcOfImage (element, src) {
  element.setAttribute('src', src);
}
