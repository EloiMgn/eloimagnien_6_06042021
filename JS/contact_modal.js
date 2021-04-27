import {
        ElementsFactory
} from "./class.js";


export class ContactModal {

        static createModal() {
                var modalSection = document.getElementById("contact__modal");

                // === création de la div modale ===
                var modalContent = document.createElement("div");
                ElementsFactory.addClass(modalContent, "modal__content");
                modalSection.appendChild(modalContent);

                // === création du bouton de fermeture ====
                var modalClose = document.createElement("span");
                ElementsFactory.addClass(modalClose, "close");
                ElementsFactory.addAttribut(modalClose, "id", "close_modal");
                modalContent.appendChild(modalClose);

                // === création du corp de la modale ====
                var modalBody = document.createElement("div");
                ElementsFactory.addClass(modalBody, "modal__content__body");
                modalContent.appendChild(modalBody);

                // === création du formulaire ====
                var modalForm = document.createElement("form");
                ElementsFactory.addClass(modalForm, "modal__content__body");
                ElementsFactory.addAttribut(modalForm, "id", "ContactMe");
                ElementsFactory.addAttribut(modalForm, "name", "ContactMe");
                ElementsFactory.addAttribut(modalForm, "action", "photographer.html");
                ElementsFactory.addAttribut(modalForm, "method", "get");
                modalBody.appendChild(modalForm);

                // === création de la div prénom ====
                var formDivFirst = document.createElement("div");
                ElementsFactory.addClass(formDivFirst, "modal__formData");
                ElementsFactory.addClass(formDivFirst, "formData");

                modalForm.appendChild(formDivFirst);

                var labelFirst = document.createElement("label");
                ElementsFactory.addAttribut(labelFirst, "for", "first");
                ElementsFactory.addText(labelFirst, "Prénom");
                formDivFirst.appendChild(labelFirst);

                var inputFirst = document.createElement("input");
                ElementsFactory.addClass(inputFirst, "modal__formData__text-control");
                ElementsFactory.addAttribut(inputFirst, "type", "text");
                ElementsFactory.addAttribut(inputFirst, "id", "first");
                ElementsFactory.addAttribut(inputFirst, "name", "first");
                formDivFirst.appendChild(inputFirst);

                var missFirst = document.createElement("span");
                ElementsFactory.addAttribut(missFirst, "id", "missFirst");
                formDivFirst.appendChild(missFirst);

                // === création de la div nom ====
                var formDivLast = document.createElement("div");
                ElementsFactory.addClass(formDivLast, "modal__formData");
                ElementsFactory.addClass(formDivLast, "formData");

                modalForm.appendChild(formDivLast);

                var labelLast = document.createElement("label");
                ElementsFactory.addAttribut(labelLast, "for", "last");
                ElementsFactory.addText(labelLast, "Nom");
                formDivLast.appendChild(labelLast);

                var inputLast = document.createElement("input");
                ElementsFactory.addClass(inputLast, "modal__formData__text-control");
                ElementsFactory.addAttribut(inputLast, "type", "text");
                ElementsFactory.addAttribut(inputLast, "id", "last");
                ElementsFactory.addAttribut(inputLast, "name", "last");
                formDivLast.appendChild(inputLast);

                var missLast = document.createElement("span");
                ElementsFactory.addAttribut(missLast, "id", "missLast");
                formDivLast.appendChild(missLast);

                // === création de la div email ====
                var formDivEmail = document.createElement("div");
                ElementsFactory.addClass(formDivEmail, "modal__formData");
                ElementsFactory.addClass(formDivEmail, "formData");
                modalForm.appendChild(formDivEmail);

                var labelEmail = document.createElement("label");
                ElementsFactory.addAttribut(labelEmail, "for", "email");
                ElementsFactory.addText(labelEmail, "Email");
                formDivEmail.appendChild(labelEmail);

                var inputEmail = document.createElement("input");
                ElementsFactory.addClass(inputEmail, "modal__formData__text-control");
                ElementsFactory.addAttribut(inputEmail, "type", "email");
                ElementsFactory.addAttribut(inputEmail, "id", "email");
                ElementsFactory.addAttribut(inputEmail, "name", "email");
                ElementsFactory.addAttribut(inputEmail, "placeholder", "example@domaine.com");
                formDivEmail.appendChild(inputEmail);

                var missEmail = document.createElement("span");
                ElementsFactory.addAttribut(missEmail, "id", "missEmail");
                formDivEmail.appendChild(missEmail);

                // === création de la div message ====
                var formDivMessage = document.createElement("div");
                ElementsFactory.addClass(formDivMessage, "modal__formData");
                ElementsFactory.addClass(formDivMessage, "formData");
                modalForm.appendChild(formDivMessage);

                var labelMessage = document.createElement("label");
                ElementsFactory.addAttribut(labelMessage, "for", "message");
                ElementsFactory.addText(labelMessage, "Votre Message");
                formDivMessage.appendChild(labelMessage);

                var textArea = document.createElement("textarea");
                ElementsFactory.addClass(textArea, "modal__formData__text-control");
                ElementsFactory.addAttribut(textArea, "form", "contactMe");
                ElementsFactory.addAttribut(textArea, "id", "message");
                ElementsFactory.addAttribut(textArea, "name", "message");
                ElementsFactory.addAttribut(textArea, "placeholder", "Tapez votre message ici...");
                formDivMessage.appendChild(textArea);

                var missMessage = document.createElement("span");
                ElementsFactory.addAttribut(missMessage, "id", "missMessage");
                formDivMessage.appendChild(missMessage);

                // ==== Création du bouton submit ==== 

                var submitBtn = document.createElement("input");
                ElementsFactory.addClass(submitBtn, "btn-submit");
                ElementsFactory.addAttribut(submitBtn, "id", "submitBtn");
                ElementsFactory.addAttribut(submitBtn, "value", "Envoyer");
                ElementsFactory.addAttribut(submitBtn, "type", "submit");
                modalForm.appendChild(submitBtn);



        }

        static modalOpen() {

                var modal = document.getElementById("contact__modal");
                modal.style.display = "block";
        }

        static modalClose() {

                var modal = document.getElementById("contact__modal");
                modal.style.display = "none";
        }

}



export class ModalValidation {


        // ===== Fonction générale de validation =====

        static inputValid(input, span, regex) {

                // Récupération des données entrées dans le formulaire === Objet compilant les résultats obtenus. 
                let result = {
                        "first": {
                                "statut": false,
                                "data": null
                        },
                        "last": {
                                "statut": false,
                                "data": null
                        },
                        "email": {
                                "statut": false,
                                "data": null
                        },
                        "message": {
                                "statut": false,
                                "data": null
                        }

                };

                result[input.id].data = input.value;
                //si la valeur de la regex est vérifiée: enlever msg d'erreur et mise en forme : 
                if (regex.test(input.value)) {
                        span.classList.remove('errorText');
                        input.classList.remove('errorInput');
                        span.textContent = "";
                        result[input.id].statut = true;

                        // si la regex n'est pas vérifiée : afficher message d'erreur et mise en forme

                } else {
                        span.classList.add('errorText');
                        input.classList.add('errorInput');
                        result[input.id].statut = false;
                }
                return result
        }

        // === Validation au clic ====
        static secondValidation() {

                const message = document.getElementById("message");
                const email = document.getElementById("email");
                const first = document.getElementById("first");
                const last = document.getElementById("last");

                const missFirst = document.getElementById("missFirst");
                const missLast = document.getElementById("missLast");
                const missEmail = document.getElementById("missEmail");
                const missMessage = document.getElementById("missMessage");

                // REGEX :
                const nameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;
                const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


                let result = {
                        "first": {
                                "statut": false,
                                "data": null
                        },
                        "last": {
                                "statut": false,
                                "data": null
                        },
                        "email": {
                                "statut": false,
                                "data": null
                        },
                        "message": {
                                "statut": false,
                                "data": null
                        }

                };


                function raz() {
                        message.value = "";
                        email.value = "";
                        first.value = "";
                        last.value = "";
                }

                var formValid = document.getElementById("submitBtn");

                formValid.addEventListener("click", function (event, input) {
                        event.preventDefault();
                        //============= Validation du prénom =====
                        missFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
                        ModalValidation.inputValid(first, missFirst, nameValid);
                        result.first.data = first.value;
                        result.first.statut = input.value
                        //============= Validation du nom =====
                        missLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
                        ModalValidation.inputValid(last, missLast, nameValid);
                        result.last.data = last.value;
                        //============= Validation de l'email =====
                        missEmail.textContent = "Veuillez entrer un email valide";
                        ModalValidation.inputValid(email, missEmail, emailValid);
                        result.email.data = email.value;
                        //============= validation de la date ======
                        missMessage.textContent = "Veuillez entrer votre message";
                        ModalValidation.inputValid(message, missMessage, nameValid);
                        result.message.data = message.value;

                        ContactModal.modalClose(); // fermeture de la modale
                        //launchConfirmation(); // ouverture de la confirmation
                        console.log(result);// affichage du résultat dans la console 
                        raz(); // remise à 0 des inputs
                });
        }
}