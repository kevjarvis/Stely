function dropdown(element, default_option) {
  const dropdownButton = element.children[0];
  const dropdownMenu = element.children[1];

  dropdownMenu.reset()

  dropdownButton.children[0].innerText = default_option;

  element.addEventListener('change', () => {
    for (let dropdownItems of dropdownMenu.children) {
      if (dropdownItems.tagName === 'INPUT' && dropdownItems.checked) {
        dropdownButton.children[0].innerText = dropdownItems.nextElementSibling.innerText;
        // console.log(a.value);
        if (dropdownItems.value === 'none') {
          dropdownButton.classList.remove('is-checked')
        } else {
          dropdownButton.classList.add('is-checked')
        }
      }
    }
  })

  let i = 0;
  dropdownButton.addEventListener('click', () => {
    i++;
    if (i > 1) {
      dropdownButton.blur();
      i = 0;
    }
  })

  document.addEventListener('click', () => {
    if (dropdownButton !== document.activeElement) {
      i = 0;
    }
  })
}

// El parámetro default_option tiene que ser el mismo que el
// texto del botón del dropdown
const filterNovedad = document.querySelector('#filter-novedad');
const filterRisk = document.querySelector('#filter-risk');
const filterInvestors = document.querySelector('#filter-investors');

dropdown(filterNovedad, 'Todos');
dropdown(filterRisk, 'Todos');
dropdown(filterInvestors, 'Todos');
