export const Project  = (img, projectName, anualReturns, investors) => {
  const normalizeAnualReturns = (Number(anualReturns)*100).toFixed(0);

  return `<article class="project" href="#modal-full" uk-toggle>
            <picture class="project-img">
              <source media="(min-width: 768px)" srcset="${img}@desktop.jpg">
              <img class="project-img" src="${img}@mobile.jpg" alt="">
            </picture>
            <div class="project-description">
              <span class="project-name">${projectName}</span>
              <div class="project-info">
                <p class="project-returns">Retornos anuales</p>
                <span class="badge badge--special">~ ${normalizeAnualReturns}%</span>
              </div>
              <div class="project-info">
                <p class="project-investors">Inversores</p>
                <span class="project-value">${investors}</span>
              </div>
            </div>
          </article>
          <div class="project-actions">
            <button class="button--primary" href="#modal-full" uk-toggle>Invertir</button>
          </div>`
}