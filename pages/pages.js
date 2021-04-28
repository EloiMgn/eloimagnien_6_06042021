import {CreateBanner} from "../JS/pagesBanner.js";
import {CreateSelection} from "../JS/pagesSelection.js";
import{ContactModal} from "../JS/contactModal.js";
import{ModalValidation} from "../JS/modalValidation.js"
import {data} from "../datas/datas.js";

CreateBanner.showBanner(data);
CreateBanner.pageHeader(data);
CreateSelection.showSelection(data);
ContactModal.createModal();

var Lscreen = screen.width;

 if (768 < Lscreen){

    const modalBtn = document.getElementById("modal-btn");
    modalBtn.addEventListener("click", ContactModal.modalOpen);
         
 } else {
     const modalBtn = document.getElementById("contact__responsive");
     modalBtn.addEventListener("click", ContactModal.modalOpen);

 }


const closeBtn = document.getElementById("close_modal");
closeBtn.addEventListener("click", ContactModal.modalClose);

ModalValidation.inputValid();

