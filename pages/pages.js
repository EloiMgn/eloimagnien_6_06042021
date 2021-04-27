import {
    Pages
} from "../JS/class.js";

import {
    ContactModal,
    ModalValidation
} from "../JS/contact_modal.js";

import {
    Lightbox
} from "../JS/lightbox_modal.js"

var requestURL = '../datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    var medias = request.response;
    Pages.showBanner(photographers);
    Pages.showSelection(medias);
    Pages.pageHeader(photographers);
    ContactModal.createModal();
    
   //  Lightbox.createLightbox();
}

window.onload = function () {
    const modalBtn = document.getElementById("modal-btn");
    modalBtn.addEventListener("click", ContactModal.modalOpen);

    const closeBtn = document.getElementById("close_modal");
    closeBtn.addEventListener("click", ContactModal.modalClose);

    ModalValidation.firstValidation();
    ModalValidation.secondValidation();
    
}