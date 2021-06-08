import { DomElement } from './domElement.js';

import { Lightbox } from './lightboxModal.js';

import { ModalValidation } from './modalValidation.js';

export class ContactModal {
  static createModalSection () {
    // === création de la section contact ====
    const body = document.getElementById('main');
    const ContactModalSection = new DomElement('section');

    DomElement.addAttribute(ContactModalSection, 'id', 'contact__modal');
    DomElement.addClass(ContactModalSection, 'modal');
    body.appendChild(ContactModalSection);
  }

  static createDivModale () {
    const modalSection = document.getElementById('contact__modal');

    // === création de la div modale ===
    const modalContent = new DomElement('div');
    DomElement.addClass(modalContent, 'modal__content');
    DomElement.addAttribute(modalContent, 'id', 'modal__content');
    modalSection.appendChild(modalContent);
  }

  static createModalClose () {
    const modalContent = document.getElementById('modal__content');
    // === création du bouton de fermeture ====
    const modalClose = new DomElement('span');
    DomElement.addClass(modalClose, 'close');
    DomElement.addAttribute(modalClose, 'id', 'close_modal');
    DomElement.addAttribute(modalClose, 'tabindex', '0');
    modalContent.appendChild(modalClose);
  }

  static createModalBody () {
    const modalContent = document.getElementById('modal__content');

    // === création du corp de la modale ====
    const modalBody = new DomElement('div');
    DomElement.addClass(modalBody, 'modal__content__body');
    DomElement.addAttribute(modalBody, 'id', 'modal__content__body');
    modalContent.appendChild(modalBody);
  }

  static createModalForm () {
    const modalBody = document.getElementById('modal__content__body');
    // === création du formulaire ====
    const modalForm = new DomElement('form');
    DomElement.addClass(modalForm, 'modal__content__body');
    DomElement.addAttribute(modalForm, 'id', 'ContactMe');
    DomElement.addAttribute(modalForm, 'name', 'ContactMe');
    DomElement.addAttribute(modalForm, 'action', 'photographer.html');
    DomElement.addAttribute(modalForm, 'method', 'get');
    modalBody.appendChild(modalForm);
  }

  static createFirst () {
    const modalForm = document.getElementById('ContactMe');

    // === création de la div prénom ====
    const formDivFirst = new DomElement('div');
    DomElement.addClass(formDivFirst, 'modal__formData');
    DomElement.addClass(formDivFirst, 'formData');
    modalForm.appendChild(formDivFirst);

    // === création du label prénom====

    const labelFirst = new DomElement('label');
    DomElement.addAttribute(labelFirst, 'for', 'first');
    DomElement.addText(labelFirst, 'Prénom');
    formDivFirst.appendChild(labelFirst);

    // === création de l'input prénom ====
    const inputFirst = new DomElement('input');
    DomElement.addClass(inputFirst, 'modal__formData__text-control');
    DomElement.addAttribute(inputFirst, 'type', 'text');
    DomElement.addAttribute(inputFirst, 'id', 'first');
    DomElement.addAttribute(inputFirst, 'name', 'first');
    formDivFirst.appendChild(inputFirst);

    // === insertion du message d'erreur====
    const missFirst = new DomElement('span');
    DomElement.addAttribute(missFirst, 'id', 'missFirst');
    formDivFirst.appendChild(missFirst);
  }

  static createLast () {
    const modalForm = document.getElementById('ContactMe');

    // === création de la div nom ====
    const formDivLast = new DomElement('div');
    DomElement.addClass(formDivLast, 'modal__formData');
    DomElement.addClass(formDivLast, 'formData');
    modalForm.appendChild(formDivLast);

    // === création du label Nom====
    const labelLast = new DomElement('label');
    DomElement.addAttribute(labelLast, 'for', 'last');
    DomElement.addText(labelLast, 'Nom');
    formDivLast.appendChild(labelLast);

    // === création de l'input Nom ====
    const inputLast = new DomElement('input');
    DomElement.addClass(inputLast, 'modal__formData__text-control');
    DomElement.addAttribute(inputLast, 'type', 'text');
    DomElement.addAttribute(inputLast, 'id', 'last');
    DomElement.addAttribute(inputLast, 'name', 'last');
    formDivLast.appendChild(inputLast);

    // === insertion du message d'erreur====
    const missLast = new DomElement('span');
    DomElement.addAttribute(missLast, 'id', 'missLast');
    formDivLast.appendChild(missLast);
  }

  static createEmail () {
    const modalForm = document.getElementById('ContactMe');

    // === création de la div email ====
    const formDivEmail = new DomElement('div');
    DomElement.addClass(formDivEmail, 'modal__formData');
    DomElement.addClass(formDivEmail, 'formData');
    modalForm.appendChild(formDivEmail);

    // === création du label email ====
    const labelEmail = new DomElement('label');
    DomElement.addAttribute(labelEmail, 'for', 'email');
    DomElement.addText(labelEmail, 'Email');
    formDivEmail.appendChild(labelEmail);

    // === création de l'input email ====
    const inputEmail = new DomElement('input');
    DomElement.addClass(inputEmail, 'modal__formData__text-control');
    DomElement.addAttribute(inputEmail, 'type', 'email');
    DomElement.addAttribute(inputEmail, 'id', 'email');
    DomElement.addAttribute(inputEmail, 'name', 'email');
    DomElement.addAttribute(inputEmail, 'placeholder', 'example@domaine.com');
    formDivEmail.appendChild(inputEmail);

    // === insertion du message d'erreur====
    const missEmail = new DomElement('span');
    DomElement.addAttribute(missEmail, 'id', 'missEmail');
    formDivEmail.appendChild(missEmail);
  }

  static createMessage () {
    const modalForm = document.getElementById('ContactMe');

    // === création de la div message ====
    const formDivMessage = new DomElement('div');
    DomElement.addClass(formDivMessage, 'modal__formData');
    DomElement.addClass(formDivMessage, 'formData');
    modalForm.appendChild(formDivMessage);

    // === création du label message ====
    const labelMessage = new DomElement('label');
    DomElement.addAttribute(labelMessage, 'for', 'message');
    DomElement.addText(labelMessage, 'Votre Message');
    formDivMessage.appendChild(labelMessage);

    // === création de l'input message ====
    const textArea = new DomElement('textarea');
    DomElement.addClass(textArea, 'modal__formData__text-control');
    DomElement.addAttribute(textArea, 'form', 'contactMe');
    DomElement.addAttribute(textArea, 'id', 'message');
    DomElement.addAttribute(textArea, 'name', 'message');
    DomElement.addAttribute(textArea, 'placeholder', 'Tapez votre message ici...');
    formDivMessage.appendChild(textArea);

    // === insertion du message d'erreur====
    const missMessage = new DomElement('span');
    DomElement.addAttribute(missMessage, 'id', 'missMessage');
    formDivMessage.appendChild(missMessage);
  }

  static createSubmitBtn () {
    const modalForm = document.getElementById('ContactMe');
    // ==== Création du bouton submit ====

    const submitBtn = new DomElement('input');
    DomElement.addClass(submitBtn, 'btn-submit');
    DomElement.addAttribute(submitBtn, 'id', 'submitBtn');
    DomElement.addAttribute(submitBtn, 'value', 'Envoyer');
    DomElement.addAttribute(submitBtn, 'type', 'submit');
    modalForm.appendChild(submitBtn);
  }

  static initModal () {
    this.createDivModale(); // création de la modale
    this.createModalClose(); // création de la croix de fermeture
    this.createModalBody(); // création du corp de la modale
    this.createModalForm(); // création du formulaire
    this.createFirst(); // création de l'input prénom
    this.createLast(); // création de l'input Nom
    this.createEmail(); // création de l'input email
    this.createMessage(); // création de l'input message
    this.createSubmitBtn(); // création du bouton submit

    // ====== Contact Modal Closing ======
    this.modalCloseClic();
    this.keyboardNavigation();

    // ===== Validation de la modale ======
    ModalValidation.inputValid();
  }

  static modalOpen () {
    const Lscreen = screen.width;

    if (Lscreen > 768) {
      const modalBtn = document.getElementById('modal-btn');
      modalBtn.addEventListener('click', () => {
        this.createModalSection();
        this.initModal();
        Lightbox.removeSelection();
      });
    } else {
      const modalBtn = document.getElementById('contact__responsive');
      modalBtn.addEventListener('click', () => {
        this.createModalSection();
        this.initModal();
        Lightbox.removeSelection();
      });
    }
  }

  static modalCloseClic () {
    const closeBtn = document.getElementById('close_modal');
    closeBtn.addEventListener('click', () => {
      this.modalClose();
    });

    // === fermeture de la modale au clic sur entrée en focus sur la croix ====
    closeBtn.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') this.modalClose();
    });
  }

  static modalClose () {
    const body = document.getElementById('main');
    const modal = document.getElementById('contact__modal');
    body.removeChild(modal);
    Lightbox.addSelection();
  }

  static keyboardNavigation () {
    document.onkeydown = (event) => {
      if (event.key === 'Escape') {
        this.modalClose();
      }
    };
  }
}
