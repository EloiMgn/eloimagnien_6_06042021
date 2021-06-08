import { Lightbox } from './lightboxModal.js';
import { DomElement } from './domElement.js';

export class NavigateLightbox {
  // === navigation vers l'image suivante ====
  static goNext () {
    const url = new URL(window.location.href);
    const artistName = url.searchParams.get('name');
    const artistFirst = artistName.substring(0, artistName.lastIndexOf(' '));

    const mediasArray = JSON.parse(sessionStorage.getItem('mediasArray'));

    const selection = document.querySelectorAll('li');
    const firstElement = selection[0];

    const currentDiv = document.getElementById('selected');
    const nextDiv = currentDiv.nextElementSibling;
    const title = document.getElementById('image__title');

    for (let i = 0; i < mediasArray.length; i++) {
      if (mediasArray[i].id === currentDiv.title) {
        if (i === mediasArray.length - 1) {
          if (mediasArray[0].image) {
            Lightbox.createLightboxBodyImage(`${`../images/${artistFirst}/${mediasArray[0].image}`}`);
          }
          if (mediasArray[0].video) {
            Lightbox.createLightboxBodyVideo(`${`../images/${artistFirst}/${mediasArray[0].video}`}`);
          }

          if (nextDiv) {
            DomElement.addAttribute(nextDiv, 'id', 'selected');
          } else {
            DomElement.addAttribute(firstElement, 'id', 'selected');
          }
          DomElement.addAttribute(currentDiv, 'id', `${currentDiv.title}`);
          DomElement.addText(title, `${mediasArray[0].title}`);
        } else {
          if (mediasArray[i + 1].image) {
            Lightbox.createLightboxBodyImage(`${`../images/${artistFirst}/${mediasArray[i + 1].image}`}`);
          }
          if (mediasArray[i + 1].video) {
            Lightbox.createLightboxBodyVideo(`${`../images/${artistFirst}/${mediasArray[i + 1].video}`}`);
          }

          if (nextDiv) {
            DomElement.addAttribute(nextDiv, 'id', 'selected');
          } else {
            DomElement.addAttribute(firstElement, 'id', 'selected');
          }

          DomElement.addAttribute(currentDiv, 'id', `${currentDiv.title}`);
          DomElement.addText(title, `${mediasArray[i + 1].title}`);
        }
      }
    }
  }

  static goNextClic () {
    const nextBtn = document.getElementById('next');

    nextBtn.addEventListener('click', () => {
      this.goNext();
    });
  }

  // === navigation vers l'image précédente ====

  static goPrevious () {
    const url = new URL(window.location.href);
    const artistName = url.searchParams.get('name');
    const artistFirst = artistName.substring(0, artistName.lastIndexOf(' '));
    const mediasArray = JSON.parse(sessionStorage.getItem('mediasArray'));

    const selection = document.querySelectorAll('li');
    const lastElement = selection[selection.length - 1];

    const currentDiv = document.getElementById('selected');
    const previousDiv = currentDiv.previousElementSibling;
    const title = document.getElementById('image__title');
    const mediaLengthLast = mediasArray.length - 1;

    for (let i = 0; i < mediasArray.length; i++) {
      if (mediasArray[i].id === currentDiv.title) {
        if (i === 0) {
          if (mediasArray[mediaLengthLast].image) {
            Lightbox.createLightboxBodyImage(`${`../images/${artistFirst}/${mediasArray[mediaLengthLast].image}`}`);
          }
          if (mediasArray[mediaLengthLast].video) {
            Lightbox.createLightboxBodyVideo(`${`../images/${artistFirst}/${mediasArray[mediaLengthLast].video}`}`);
          }

          if (previousDiv) {
            DomElement.addAttribute(previousDiv, 'id', 'selected');
          } else {
            DomElement.addAttribute(lastElement, 'id', 'selected');
          }

          DomElement.addAttribute(currentDiv, 'id', `${currentDiv.title}`);
          DomElement.addText(title, `${mediasArray[mediaLengthLast].title}`);
        } else {
          if (mediasArray[i - 1].image) {
            Lightbox.createLightboxBodyImage(`${`../images/${artistFirst}/${mediasArray[i - 1].image}`}`);
          }
          if (mediasArray[i - 1].video) {
            Lightbox.createLightboxBodyVideo(`${`../images/${artistFirst}/${mediasArray[i - 1].video}`}`);
          }

          if (previousDiv) {
            DomElement.addAttribute(previousDiv, 'id', 'selected');
          } else {
            DomElement.addAttribute(lastElement, 'id', 'selected');
          }

          DomElement.addAttribute(currentDiv, 'id', `${currentDiv.title}`);
          DomElement.addText(title, `${mediasArray[i - 1].title}`);
        }
      }
    }
  }

  static goPreviousClic () {
    const previousBtn = document.getElementById('previous');
    previousBtn.addEventListener('click', () => {
      this.goPrevious();
    });
  }

  static goNextEnter () {
    const lightboxSection = document.getElementById('lightbox__modal');
    const nextBtn = document.getElementById('next');

    if (lightboxSection) {
      nextBtn.onkeydown = (event) => {
        if (event.key === 'Enter') {
          this.goNext();
        }
      };
    }
  }

  static goPreviousEnter () {
    const lightboxSection = document.getElementById('lightbox__modal');
    const previousBtn = document.getElementById('previous');

    if (lightboxSection) {
      previousBtn.onkeydown = (event) => {
        if (event.key === 'Enter') {
          this.goPrevious();
        }
      };
    }
  }

  static keyboardNavigation () {
    const lightboxSection = document.getElementById('lightbox__modal');

    if (lightboxSection) {
      document.onkeydown = (event) => {
        if (event.key === 'ArrowRight') {
          this.goNext();
        }
        if (event.key === 'ArrowLeft') {
          this.goPrevious();
        }
        if (event.key === 'Escape') {
          Lightbox.lightboxClose();
        }
      };
    }
  }
}
