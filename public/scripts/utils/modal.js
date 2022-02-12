export class Modal {
  constructor(modal) {
    this._modal = modal;
    this._title = this._modal.querySelector('h1');
    this._description = this._modal.querySelector('p');
    this._img = this._modal.querySelector('.uk-background-cover');
    this._btn = this._modal.querySelector('form button');
  }

  updateTitle(value) { this._title.innerText = value }

  updateDescription(value) { this._description.innerText = value }

  getPathSecondaryImg (projectName) {
    const nameLowerCase = projectName.toLowerCase();
    return `media/projects/${nameLowerCase}_secondary.jpg`;
  }

  updateImage(projectName) {
    this._img.style.backgroundImage = `url(${ this.getPathSecondaryImg(projectName) })`
  }

  setProjectAttr (projectName) {
    this._btn.setAttribute('stely-project', projectName)
  }
}