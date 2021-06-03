import {CreateBanner} from "./pagesBanner.js";
import {ContactModal} from "./contactModal.js"; 

import {SortSelection} from "./sortSelection.js";
import { CreateFooter } from "./pagesFooter.js";
import { ResizeImagesSelection } from "./imagesResponsive.js";

export const Init = data => { 

    // ==== Tri des photos en fonction de la valeur sélectionnée ====== 
    SortSelection.sort(data);

    // ======== Création des éléments de la page =====        
    CreateBanner.showBanner(data);
    CreateBanner.pageHeader(data);
    CreateFooter.footerInit(data);

    ResizeImagesSelection.getImageSize();

    // ====== Contact Modal Opening/Closing ======        
    ContactModal.modalOpen(); 

}