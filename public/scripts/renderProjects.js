import {resetDOMArea} from "./utils/resetDOMArea.js";

export function renderProjects(objectToRender, target, classes) {
  resetDOMArea(target);

  for (const element of objectToRender) {
    const component = document.createElement('div');
    component.classList.add(...classes);
    component.innerHTML = `<article class="project">
                                <img class="project-img" src=${element['img']} alt="">
                                <div class="project-description">
                                  <span class="project-name">${element['nombre']}</span>
                                  <div class="project-info">
                                    <p class="project-returns">Retornos anuales</p>
                                    <span class="badge badge--special">~ ${(Number(element['anual_returns']) * 100).toFixed(0)}%</span>
                                  </div>
                                  <div class="project-info">
                                    <p class="project-investors">Inversores</p>
                                    <span class="project-value">${element['investors']}</span>
                                  </div>
                                </div>
                              </article>
                              <div class="project-actions">
                                <button class="button--primary">Detalles</button>
                                <button class="button--icon"><img src="media/cart-plus-fill.svg" alt=""></button>
                              </div>`;
    target.appendChild(component)
  }
}

export function emptyProjects(target, classes) {
  resetDOMArea(target)
  const component = document.createElement('div');
  component.classList.add(...classes);
  component.innerHTML = `<h3>No se han encontrado proyectos :(</h3>`
  target.appendChild(component);
}