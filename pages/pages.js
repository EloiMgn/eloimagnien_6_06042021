import {CreateBanner} from "../JS/pagesBanner.js";
import {CreateSelection} from "../JS/pagesSelection.js";
import{ContactModal} from "../JS/contactModal.js";
import {Lightbox} from "../JS/lightbox_modal.js";
import{ModalValidation} from "../JS/modalValidation.js";
import {data} from "../datas/datas.js";


// ======== Création des éléments de la page =====
CreateBanner.showBanner(data);
CreateBanner.pageHeader(data);
CreateSelection.showSelection(data);
ContactModal.createModal();
Lightbox.createLightbox(data);

// ====== Contact Modal Opening/Closing ======

ContactModal.modalOpen();
ContactModal.modalClose();

// ===== Validation de la modale ======
ModalValidation.inputValid();

// ====== Lightbox Opening/Closing ======

Lightbox.lightboxOpen(data);
Lightbox.lightboxClose();

