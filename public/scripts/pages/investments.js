import {updateCapital} from "../utils/capital.js";

updateCapital();

const proyectos = JSON.parse(localStorage.getItem('investments'));
const myInvestments = document.getElementById('investments');
const message = document.getElementById('no-find-message');

if (!proyectos.length) {
  message.style.display = "initial";
} else {
  message.style.display = 'none';
  proyectos.map(p => {
    const component = document.createElement('div');
    component.classList.add("uk-card", "uk-card-default", "uk-width-1-1@m");
    component.innerHTML = `<div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand uk-flex uk-flex-between uk-flex-middle">
          <div>
            <h3 class="uk-card-title uk-margin-remove-bottom" style="color: white">${p.name}</h3>
            <p style="color: rgba(155, 159, 147, 1)">Cantidad invertida: $<span>${p.amount}</span></p>
          </div>
          <button class="close_invest"><i class="bi bi-x-circle-fill"></i></button>
        </div>
      </div>`
    myInvestments.appendChild(component);
  })

  const btnClosesInvest = document.querySelectorAll('.close_invest');
  btnClosesInvest.forEach(btn => {
    btn.addEventListener('click', e => {
      const proyectos = JSON.parse(localStorage.getItem('investments'));
      const btnOffsetParentElement = e.target.offsetParent
      const projectName = btnOffsetParentElement.querySelector('h3').textContent;
      const projectAmount = Number(e.target.offsetParent.querySelector('span').textContent);
      const newListOfProject = proyectos.filter(project => project.name !== projectName)
      let capital = Number(localStorage.getItem('capital')) + projectAmount;

      myInvestments.removeChild(e.target.offsetParent)
      localStorage.setItem('investments', JSON.stringify(newListOfProject));
      localStorage.setItem('capital', JSON.stringify(capital))

      updateCapital();
      if (localStorage.getItem('investments') === '[]') {message.style.display = 'initial'}
    })
  })
}