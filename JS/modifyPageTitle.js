import { DomElement } from './domElement.js';

// === modification du titre de la page en fonction de l'artiste ====
export class ModifyPageTitle {
  static modifyPageTitle (data) {
    const { photographers } = data;
    const head = document.getElementById('head');

    const urlCourante = window.location.href;
    const url = new URL(urlCourante);
    const artistName = url.searchParams.get('name');
    const artistId = parseFloat(url.searchParams.get('id'));

    photographers.forEach((photographers) => {
      if (photographers.id === artistId) {
        const pageTitle = new DomElement('title');
        DomElement.addText(pageTitle, `${`Fisheye - ${artistName}`}`);
        head.appendChild(pageTitle);
      }
    });
  }
}
