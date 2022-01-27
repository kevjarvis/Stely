export const Project  = (img, projectName, anualReturns, investors) => {
  return `<article class="project">
            <picture class="project-img">
              <source media="(min-width: 768px)" srcset="${img}@desktop.jpg">
              <img class="project-img" src="${img}@mobile.jpg" alt="">
            </picture>
            <div class="project-description">
              <span class="project-name">${projectName}</span>
              <div class="project-info">
                <p class="project-returns">Retornos anuales</p>
                <span class="badge badge--special">~ ${(Number(anualReturns) * 100).toFixed(0)}%</span>
              </div>
              <div class="project-info">
                <p class="project-investors">Inversores</p>
                <span class="project-value">${investors}</span>
              </div>
            </div>
          </article>
          <div class="project-actions">
            <button class="button--primary">Detalles</button>
            <button class="button--icon"><img src="media/cart-plus-fill.svg" alt=""></button>
          </div>`
}