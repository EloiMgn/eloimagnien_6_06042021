import {DomElement} from "./domElement.js";

export class ContactModal {

        static createModal() {

                var modalSection = document.getElementById("contact__modal");

                // === création de la div modale ===
                var modalContent = new DomElement("div");
                DomElement.addClass(modalContent, "modal__content");
                modalSection.appendChild(modalContent);

                // === création du bouton de fermeture ====
                var modalClose = new DomElement("span");
                DomElement.addClass(modalClose, "close");
                DomElement.addAttribute(modalClose, "id", "close_modal");
                modalContent.appendChild(modalClose);

                // === création du corp de la modale ====
                var modalBody = new DomElement("div");
                DomElement.addClass(modalBody, "modal__content__body");
                modalContent.appendChild(modalBody);

                // === création du formulaire ====
                var modalForm = new DomElement("form");
                DomElement.addClass(modalForm, "modal__content__body");
                DomElement.addAttribute(modalForm, "id", "ContactMe");
                DomElement.addAttribute(modalForm, "name", "ContactMe");
                DomElement.addAttribute(modalForm, "action", "photographer.html");
                DomElement.addAttribute(modalForm, "method", "get");
                modalBody.appendChild(modalForm);

                // === création de la div prénom ====
                var formDivFirst = new DomElement("div");
                DomElement.addClass(formDivFirst, "modal__formData");
                DomElement.addClass(formDivFirst, "formData");
                modalForm.appendChild(formDivFirst);

                var labelFirst = new DomElement("label");
                DomElement.addAttribute(labelFirst, "for", "first");
                DomElement.addText(labelFirst, "Prénom");
                formDivFirst.appendChild(labelFirst);

                var inputFirst = new DomElement("input");
                DomElement.addClass(inputFirst, "modal__formData__text-control");
                DomElement.addAttribute(inputFirst, "type", "text");
                DomElement.addAttribute(inputFirst, "id", "first");
                DomElement.addAttribute(inputFirst, "name", "first");
                formDivFirst.appendChild(inputFirst);

                var missFirst = new DomElement("span");
                DomElement.addAttribute(missFirst, "id", "missFirst");
                formDivFirst.appendChild(missFirst);

                // === création de la div nom ====
                var formDivLast = new DomElement("div");
                DomElement.addClass(formDivLast, "modal__formData");
                DomElement.addClass(formDivLast, "formData");
                modalForm.appendChild(formDivLast);

                var labelLast = new DomElement("label");
                DomElement.addAttribute(labelLast, "for", "last");
                DomElement.addText(labelLast, "Nom");
                formDivLast.appendChild(labelLast);

                var inputLast = new DomElement("input");
                DomElement.addClass(inputLast, "modal__formData__text-control");
                DomElement.addAttribute(inputLast, "type", "text");
                DomElement.addAttribute(inputLast, "id", "last");
                DomElement.addAttribute(inputLast, "name", "last");
                formDivLast.appendChild(inputLast);

                var missLast = new DomElement("span");
                DomElement.addAttribute(missLast, "id", "missLast");
                formDivLast.appendChild(missLast);

                // === création de la div email ====
                var formDivEmail = new DomElement("div");
                DomElement.addClass(formDivEmail, "modal__formData");
                DomElement.addClass(formDivEmail, "formData");
                modalForm.appendChild(formDivEmail);

                var labelEmail = new DomElement("label");
                DomElement.addAttribute(labelEmail, "for", "email");
                DomElement.addText(labelEmail, "Email");
                formDivEmail.appendChild(labelEmail);

                var inputEmail = new DomElement("input");
                DomElement.addClass(inputEmail, "modal__formData__text-control");
                DomElement.addAttribute(inputEmail, "type", "email");
                DomElement.addAttribute(inputEmail, "id", "email");
                DomElement.addAttribute(inputEmail, "name", "email");
                DomElement.addAttribute(inputEmail, "placeholder", "example@domaine.com");
                formDivEmail.appendChild(inputEmail);

                var missEmail = new DomElement("span");
                DomElement.addAttribute(missEmail, "id", "missEmail");
                formDivEmail.appendChild(missEmail);

                // === création de la div message ====
                var formDivMessage = new DomElement("div");
                DomElement.addClass(formDivMessage, "modal__formData");
                DomElement.addClass(formDivMessage, "formData");
                modalForm.appendChild(formDivMessage);

                var labelMessage = new DomElement("label");
                DomElement.addAttribute(labelMessage, "for", "message");
                DomElement.addText(labelMessage, "Votre Message");
                formDivMessage.appendChild(labelMessage);

                var textArea = new DomElement("textarea");
                DomElement.addClass(textArea, "modal__formData__text-control");
                DomElement.addAttribute(textArea, "form", "contactMe");
                DomElement.addAttribute(textArea, "id", "message");
                DomElement.addAttribute(textArea, "name", "message");
                DomElement.addAttribute(textArea, "placeholder", "Tapez votre message ici...");
                formDivMessage.appendChild(textArea);

                var missMessage = new DomElement("span");
                DomElement.addAttribute(missMessage, "id", "missMessage");
                formDivMessage.appendChild(missMessage);

                // ==== Création du bouton submit ==== 

                var submitBtn = new DomElement("input");
                DomElement.addClass(submitBtn, "btn-submit");
                DomElement.addAttribute(submitBtn, "id", "submitBtn");
                DomElement.addAttribute(submitBtn, "value", "Envoyer");
                DomElement.addAttribute(submitBtn, "type", "submit");
                modalForm.appendChild(submitBtn);

        }

        static modalOpen() {

                var Lscreen = screen.width;

 if (768 < Lscreen){

    const modalBtn = document.getElementById("modal-btn");
    modalBtn.addEventListener("click", ()=>{
        var modal = document.getElementById("contact__modal");
        modal.style.display = "block";
    });
         
 } else {
     const modalBtn = document.getElementById("contact__responsive");
     modalBtn.addEventListener("click", ()=>{
        var modal = document.getElementById("contact__modal");
        modal.style.display = "block";
    });

 }
        }

        static modalClose() {



                const closeBtn = document.getElementById("close_modal");
                closeBtn.addEventListener("click", ()=>{
                        var modal = document.getElementById("contact__modal");
                        modal.style.display = "none";
                });
        }

}

