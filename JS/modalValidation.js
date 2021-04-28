// ==== Méthode de validation du formulaire de contact =======
export class ModalValidation {

    // ===== Fonction générale de validation =====



    static inputValid() {

        function validation(input, span, regex) {

            //si la valeur de la regex est vérifiée: enlever msg d'erreur et mise en forme : 
    
            result[input.id].data = input.value;
    
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
        }

        const formValid = document.getElementById("submitBtn");
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
            },
            "artistId": {
                "data": null
            }

        };




        //====== Validation du Prénom ======


        first.addEventListener("input", function () {
            missFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
            validation(first, missFirst, nameValid);
        });

        // ====== Validation du Nom =====


        last.addEventListener("input", function () {
            missLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
            validation(last, missLast, nameValid);
        });


        // ===== Validation de l'email =====


        email.addEventListener("input", function () {
            missEmail.textContent = "Veuillez entrer un email valide";
            validation(email, missEmail, emailValid);
        });

        // ===== Validation de la date de naissance =====


        message.addEventListener("input", function () {
            missMessage.textContent = "Veuillez entrer votre message";
            validation(message, missMessage, nameValid);
        });

        // ===== Validation des données entrée dans le formulaire au moment de l'envoi ===== 

        function inputValidation() {
            var flag = true;
            for (let i in result) {
                if (result[i].statut == false) {
                    flag = false;
                    // si une valeur est retournée fausse dans l'objet des résultats, le formulaire ne peut pas être envoyé
                }
            }
            return flag;
        }
        // ===== fonction remise des input à zéro =====
        function raz() {
            message.value = "";
            email.value = "";
            first.value = "";
            last.value = "";
        }


        // ===== validation finale et application des fonctions de 
        //       validation des checkbox + fermeture du fomulaire 
        //       et apparition du message de confirmation ======

        formValid.addEventListener("click", function (event) {
            event.preventDefault();
            //============= Validation du prénom =====
            missFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
            validation(first, missFirst, nameValid);
            //============= Validation du nom =====
            missLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
            validation(last, missLast, nameValid);
            //============= Validation de l'email =====
            missEmail.textContent = "Veuillez entrer un email valide";
            validation(email, missEmail, emailValid);
            //============= validation de la date ======
            missMessage.textContent = "Veuillez entrer une date de naissance valide";
            validation(message, missMessage, nameValid);

            // ==== ajout de l'Id de l'artiste pour envoyer le formulaire à l'artiste concerné ======
            var urlCourante = window.location.href;
            var url = new URL(urlCourante);
            var artistId = url.searchParams.get("id");
            result.artistId.data = artistId;

            // ========== validation du formulaire ======
            let finalResult = inputValidation();
            if (finalResult == true) {
                ContactModal.modalClose(); // fermeture de la modale
                // launchConfirmation(); // ouverture de la confirmation
                console.log(result); // affichage du résultat dans la console 
                raz(); // remise à 0 des inputs
            }
        });


    }
}