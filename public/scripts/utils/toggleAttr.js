/* toggleAttr recibe como parámetros listas como sigue:
* [DOMElement, class|attribute, value]
* if is attribute, dont pass a value*/
export const toggleAttr = (...args) => {
  function toggleBoolean (el, attr)  {
    const isAttrInactive= el.getAttribute(attr) === 'false';
    el.setAttribute(attr, isAttrInactive);
  }

  const elementsForChange = new Array(...args)
  elementsForChange.forEach(el => {
    if (el[1] === 'class') {
      el[0].classList.toggle(el[2])
    } else {
      toggleBoolean(el[0], el[1])
    }
  })
}
