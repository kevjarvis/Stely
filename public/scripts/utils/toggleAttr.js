/*Tipo de argumento
* [element, class|attribute, value]*/
export const toggleAttr = (...args) => {
  function attrToggle (el, attr)  {
    if (el.getAttribute(attr) === 'false') {
      el.setAttribute(attr, true)
    } else {
      el.setAttribute(attr, false)
    }
  }

  const preferences = new Array(...args)
  preferences.forEach(el => {
    if (el[1] === 'class') {
      el[0].classList.toggle(el[2])
    } else {
      attrToggle(el[0], el[1])
    }
  })
}
