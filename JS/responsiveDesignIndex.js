
import { DomElement } from './domElement.js';

export class ResponsiveDesignIndex {
  static mobileDesign () {
    const Lscreen = window.innerWidth;
    const header = document.getElementById('header');
    const logo = document.getElementById('main__logo');
    const title = document.getElementById('firstTitle');

    if (Lscreen < 768) {
      const container = new DomElement('div');
      DomElement.addClass(container, 'responsive__container');
      header.appendChild(container);
      container.appendChild(logo);
      container.appendChild(title);
    }
  }
}
