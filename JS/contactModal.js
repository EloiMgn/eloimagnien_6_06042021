import {DomElement} from "./domElement.js";

import {Lightbox} from "./lightboxModal.js";

import {ModalValidation} from "./modalValidation.js";

export class ContactModal {

        static createModalSection() {
                // === création de la section contact ==== 
                const body = document.getElementById("main");
                const ContactModalSection = new DomElement("section");

                DomElement.addAttribute(ContactModalSection, "id", "contact__modal");
                DomElement.addClass(ContactModalSection, "modal");
                body.appendChild(ContactModalSection);
        }

        static createDivModale() {
                var modalSection = document.getElementById("contact__modal");

                // === création de la div modale ===
                var modalContent = new DomElement("div");
                DomElement.addClass(modalContent, "modal__content");
                DomElement.addAttribute(modalContent, "id", "modal__content");
                modalSection.appendChild(modalContent);
        }

        static createModalClose() {
                var modalContent = document.getElementById("modal__content");
                // === création du bouton de fermeture ====
                var modalClose = new DomElement("span");
                DomElement.addClass(modalClose, "close");
                DomElement.addAttribute(modalClose, "id", "close_modal");
                modalContent.appendChild(modalClose);
        }

        static createModalBody() {

                var modalContent = document.getElementById("modal__content");

                // === création du corp de la modale ====
                var modalBody = new DomElement("div");
                DomElement.addClass(modalBody, "modal__content__body");
                DomElement.addAttribute(modalBody, "id", "modal__content__body");
                modalContent.appendChild(modalBody);
        }
        static createModalForm() {
                var modalBody = document.getElementById("modal__content__body");
                // === création du formulaire ====
                var modalForm = new DomElement("form");
                DomElement.addClass(modalForm, "modal__content__body");
                DomElement.addAttribute(modalForm, "id", "ContactMe");
                DomElement.addAttribute(modalForm, "name", "ContactMe");
                DomElement.addAttribute(modalForm, "action", "photographer.html");
                DomElement.addAttribute(modalForm, "method", "get");
                modalBody.appendChild(modalForm);
        }

        static createFirst() {
                var modalForm = document.getElementById("ContactMe");

                // === création de la div prénom ====
                var formDivFirst = new DomElement("div");
                DomElement.addClass(formDivFirst, "modal__formData");
                DomElement.addClass(formDivFirst, "formData");
                modalForm.appendChild(formDivFirst);

                // === création du label prénom====

                var labelFirst = new DomElement("label");
                DomElement.addAttribute(labelFirst, "for", "first");
                DomElement.addText(labelFirst, "Prénom");
                formDivFirst.appendChild(labelFirst);

                // === création de l'input prénom ====
                var inputFirst = new DomElement("input");
                DomElement.addClass(inputFirst, "modal__formData__text-control");
                DomElement.addAttribute(inputFirst, "type", "text");
                DomElement.addAttribute(inputFirst, "id", "first");
                DomElement.addAttribute(inputFirst, "name", "first");
                formDivFirst.appendChild(inputFirst);

                // === insertion du message d'erreur====
                var missFirst = new DomElement("span");
                DomElement.addAttribute(missFirst, "id", "missFirst");
                formDivFirst.appendChild(missFirst);
        }

        static createLast() {
                var modalForm = document.getElementById("ContactMe");

                // === création de la div nom ====
                var formDivLast = new DomElement("div");
                DomElement.addClass(formDivLast, "modal__formData");
                DomElement.addClass(formDivLast, "formData");
                modalForm.appendChild(formDivLast);

                // === création du label Nom====
                var labelLast = new DomElement("label");
                DomElement.addAttribute(labelLast, "for", "last");
                DomElement.addText(labelLast, "Nom");
                formDivLast.appendChild(labelLast);

                // === création de l'input Nom ====
                var inputLast = new DomElement("input");
                DomElement.addClass(inputLast, "modal__formData__text-control");
                DomElement.addAttribute(inputLast, "type", "text");
                DomElement.addAttribute(inputLast, "id", "last");
                DomElement.addAttribute(inputLast, "name", "last");
                formDivLast.appendChild(inputLast);

                // === insertion du message d'erreur====
                var missLast = new DomElement("span");
                DomElement.addAttribute(missLast, "id", "missLast");
                formDivLast.appendChild(missLast);

        }

        static createEmail() {
                var modalForm = document.getElementById("ContactMe");

                // === création de la div email ====
                var formDivEmail = new DomElement("div");
                DomElement.addClass(formDivEmail, "modal__formData");
                DomElement.addClass(formDivEmail, "formData");
                modalForm.appendChild(formDivEmail);

                // === création du label email ====
                var labelEmail = new DomElement("label");
                DomElement.addAttribute(labelEmail, "for", "email");
                DomElement.addText(labelEmail, "Email");
                formDivEmail.appendChild(labelEmail);

                // === création de l'input email ====
                var inputEmail = new DomElement("input");
                DomElement.addClass(inputEmail, "modal__formData__text-control");
                DomElement.addAttribute(inputEmail, "type", "email");
                DomElement.addAttribute(inputEmail, "id", "email");
                DomElement.addAttribute(inputEmail, "name", "email");
                DomElement.addAttribute(inputEmail, "placeholder", "example@domaine.com");
                formDivEmail.appendChild(inputEmail);

                // === insertion du message d'erreur====
                var missEmail = new DomElement("span");
                DomElement.addAttribute(missEmail, "id", "missEmail");
                formDivEmail.appendChild(missEmail);

        }

        static createMessage() {
                var modalForm = document.getElementById("ContactMe");

                // === création de la div message ====
                var formDivMessage = new DomElement("div");
                DomElement.addClass(formDivMessage, "modal__formData");
                DomElement.addClass(formDivMessage, "formData");
                modalForm.appendChild(formDivMessage);

                // === création du label message ====
                var labelMessage = new DomElement("label");
                DomElement.addAttribute(labelMessage, "for", "message");
                DomElement.addText(labelMessage, "Votre Message");
                formDivMessage.appendChild(labelMessage);

                // === création de l'input message ====
                var textArea = new DomElement("textarea");
                DomElement.addClass(textArea, "modal__formData__text-control");
                DomElement.addAttribute(textArea, "form", "contactMe");
                DomElement.addAttribute(textArea, "id", "message");
                DomElement.addAttribute(textArea, "name", "message");
                DomElement.addAttribute(textArea, "placeholder", "Tapez votre message ici...");
                formDivMessage.appendChild(textArea);

                // === insertion du message d'erreur====
                var missMessage = new DomElement("span");
                DomElement.addAttribute(missMessage, "id", "missMessage");
                formDivMessage.appendChild(missMessage);

        }

        static createSubmitBtn() {
                var modalForm = document.getElementById("ContactMe");
                // ==== Création du bouton submit ==== 

                var submitBtn = new DomElement("input");
                DomElement.addClass(submitBtn, "btn-submit");
                DomElement.addAttribute(submitBtn, "id", "submitBtn");
                DomElement.addAttribute(submitBtn, "value", "Envoyer");
                DomElement.addAttribute(submitBtn, "type", "submit");
                modalForm.appendChild(submitBtn);
        }

        static initModal() {

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

        static modalOpen() {

                var Lscreen = screen.width;

                if (768 < Lscreen) {

                        const modalBtn = document.getElementById("modal-btn");
                        modalBtn.addEventListener("click", () => {
                                this.createModalSection();
                                this.initModal();
                                Lightbox.removeSelection();

                        });

                } else {
                        const modalBtn = document.getElementById("contact__responsive");
                        modalBtn.addEventListener("click", () => {
                                this.createModalSection();
                                this.initModal();
                                Lightbox.removeSelection();
                        });

                }
        }

        static modalCloseClic() {

                const closeBtn = document.getElementById("close_modal");
                closeBtn.addEventListener("click", () => {
                        this.modalClose();
                });
        }

        static modalClose(){
                const body = document.getElementById("main");
                var modal = document.getElementById("contact__modal");
                body.removeChild(modal);
                Lightbox.addSelection();
        }

        static keyboardNavigation(){

                document.onkeydown = (event)=>{

                        if (event.key == "Escape"){
                                this.modalClose();  
                        }
                };

        }

}

