import {CreateBanner} from "./pagesBanner.js";

import {ContactModal} from "./contactModal.js";
import {Lightbox} from "./lightboxModal.js";
import {ModalValidation} from "./modalValidation.js";
import {SortSelection} from "./sortSelection.js";

export const init = data => { 
    // ==== Tri des photos en fonction de la valeur sélectionnée ====== 
    SortSelection.sort(data);
    
    // ======== Création des éléments de la page =====        
    CreateBanner.showBanner(data);
    CreateBanner.pageHeader(data);
    ContactModal.createModal(); 


    // ====== Contact Modal Opening/Closing ======        
    ContactModal.modalOpen();        
    ContactModal.modalClose();        
    
    // ===== Validation de la modale ======        
    ModalValidation.inputValid();      
    


    // ====== Lightbox Opening/Closing ======        
    Lightbox.lightboxOpen();

}