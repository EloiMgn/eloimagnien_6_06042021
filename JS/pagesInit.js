import {CreateBanner} from "./pagesBanner.js";
import {ContactModal} from "./contactModal.js"; 

import {SortSelection} from "./sortSelection.js";
import { CreateFooter } from "./pagesFooter.js";

export const Init = data => { 

    // ==== Tri des photos en fonction de la valeur sélectionnée ====== 
    SortSelection.sort(data);

    // ======== Création des éléments de la page =====        
    CreateBanner.showBanner(data);
    CreateBanner.pageHeader(data);
    CreateFooter.footerInit(data);

    // ====== Contact Modal Opening/Closing ======        
    ContactModal.modalOpen(); 

}