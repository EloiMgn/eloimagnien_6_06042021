import { DomElement } from './domElement.js';

export class CreateFooter {
  static init () {
    this.createFooterTabSection();
    this.createTabDivPhotos();
    this.createTabDivLikes();
    this.createArtistPrice();
  }

  static createFooterTabSection () {
    const footer = document.getElementById('footer');
    //= == création de la section ===
    const footerTab = new DomElement('section');
    DomElement.addClass(footerTab, 'tab');
    DomElement.addAttribute(footerTab, 'id', 'tab');
    footer.appendChild(footerTab);
  }

  static createTabDivPhotos () {
    const footerTab = document.getElementById('tab');

    //= == création de la div ===
    const tabPhotos = new DomElement('div');
    DomElement.addClass(tabPhotos, 'tab__photos');
    DomElement.addAttribute(tabPhotos, 'id', 'tab__photos');
    footerTab.appendChild(tabPhotos);

    //= == création des éléments composants de la div ===

    const medias = JSON.parse(sessionStorage.getItem('mediasArray')); // récupération du tableau correspondant aux médias de la page
    const tabPhotosNumber = new DomElement('p');
    DomElement.addClass(tabPhotosNumber, 'tab__photos__number');
    DomElement.addText(tabPhotosNumber, `${medias.length}`);
    DomElement.addAttribute(tabPhotosNumber, 'aria-label', 'nombre total de photos');
    tabPhotos.appendChild(tabPhotosNumber);

    const tabPhotosIcon = new DomElement('i');
    DomElement.addClass(tabPhotosIcon, 'tab__photos__icon');
    DomElement.addClass(tabPhotosIcon, 'fas');
    DomElement.addClass(tabPhotosIcon, 'fa-camera');
    tabPhotos.appendChild(tabPhotosIcon);
  }

  static createTabDivLikes () {
    const footerTab = document.getElementById('tab');

    //= == création de la div ===
    const tabLikes = new DomElement('div');
    DomElement.addClass(tabLikes, 'tab__likes');
    DomElement.addAttribute(tabLikes, 'id', 'tab__likes');
    footerTab.appendChild(tabLikes);

    //= == création des éléments composants de la div ===

    const medias = JSON.parse(sessionStorage.getItem('mediasArray')); // récupération du tableau correspondant aux médias de la page
    const tabLikesNumber = new DomElement('p');
    DomElement.addAttribute(tabLikesNumber, 'aria-label', 'nombre total de likes');
    DomElement.addClass(tabLikesNumber, 'tab__likes__number');

    // === addition du nombre de likes total ==
    let totalLikes = 0;
    for (let i = 0; i < medias.length; i++) {
      totalLikes += medias[i].likes;
    }
    DomElement.addText(tabLikesNumber, `${totalLikes}`);
    tabLikes.appendChild(tabLikesNumber);

    const tabLikesIcon = new DomElement('i');
    DomElement.addClass(tabLikesIcon, 'tab__likes__icon');
    DomElement.addClass(tabLikesIcon, 'fas');
    DomElement.addClass(tabLikesIcon, 'fa-heart');
    tabLikes.appendChild(tabLikesIcon);
  }

  static createArtistPrice () {
    const url = new URL(window.location.href);
    const artistName = url.searchParams.get('name');

    const footerTab = document.getElementById('tab');
    const { photographers } = JSON.parse(sessionStorage.getItem('data'));
    //= == création de la div ===
    const tabPrice = new DomElement('div');
    DomElement.addClass(tabPrice, 'tab__price');
    DomElement.addAttribute(tabPrice, 'id', 'tab__price');
    // DomElement.addText(tabPrice, `${}`)
    for (let i = 0; i < photographers.length; i++) {
      if (artistName === photographers[i].name) {
        DomElement.addText(tabPrice, `${photographers[i].price}€ / jour`);
      }
    }
    footerTab.appendChild(tabPrice);
  }
}
