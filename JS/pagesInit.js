import {CreateBanner} from "./pagesBanner.js";
import {CreateSelection} from "./pagesSelection.js";
import {ContactModal} from "./contactModal.js";
import {Lightbox} from "./lightboxModal.js";
import {ModalValidation} from "./modalValidation.js";

export const init = data => { 
    // ======== Création des éléments de la page =====        
    CreateBanner.showBanner(data);
    CreateBanner.pageHeader(data);
    CreateSelection.showSelection(data);
    ContactModal.createModal(); 
    // Lightbox.createLightbox(data);  

    // ====== Contact Modal Opening/Closing ======        
    ContactModal.modalOpen();        
    ContactModal.modalClose();                
    // ===== Validation de la modale ======        
    ModalValidation.inputValid();                
    // ====== Lightbox Opening/Closing ======        
    Lightbox.lightboxOpen(data);
    // Lightbox.goNext();        
    // Lightbox.lightboxClose();
}