import { CreatePageBanner } from './createPageBanner.js';
import { ContactModal } from './contactModal.js';
import { ModifyPageTitle } from './modifyPageTitle.js';
import { SortSelection } from './sortSelection.js';
import { CreatePageFooter } from './createPageFooter.js';
// import { ResizeImagesSelection } from "./imagesResponsive.js";

export const Init = (data) => {
  // ==== Tri des photos en fonction de la valeur sélectionnée ======
  SortSelection.sort(data);
  // ======== Création des éléments de la page =====
  CreatePageBanner.showBanner(data);
  CreatePageFooter.init(data);

  // ====== Contact Modal Opening/Closing ======
  ContactModal.modalOpen();

  // === modification du titre de la page en fonction de l'artiste ====
  ModifyPageTitle.modifyPageTitle(data);
};
