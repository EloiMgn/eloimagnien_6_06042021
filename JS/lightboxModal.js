import { DomElement} from "./domElement.js";

export class Lightbox {

        static createLightboxContent(){

                var lightboxSection = document.getElementById("lightbox__modal");


                // === création de la div modale ===
                var lightboxContent = new DomElement("div");
                DomElement.addClass(lightboxContent, "lightbox__modal__content");
                DomElement.addAttribute(lightboxContent, "id", "lightbox__modal__content");
                lightboxSection.appendChild(lightboxContent);
        }

        static createLightboxCloseBtn(){
                // === création du bouton de fermeture ====
                const lightboxContent = document.getElementById("lightbox__modal__content");
                var lightboxClose = new DomElement("span");
                DomElement.addClass(lightboxClose, "close_lightbox");
                DomElement.addAttribute(lightboxClose, "id", "close__lightbox");
                lightboxContent.appendChild(lightboxClose);
        }

        static createLightboxModalContent(url){

                // === création du corp de la modale ====
                const urlLightbox = url.replace("/tinified", "");
                const lightboxContent = document.getElementById("lightbox__modal__content");
                var lightboxBody = new DomElement("img");
                DomElement.addClass(lightboxBody, "lightbox__modal__content__body");
                DomElement.addImg(lightboxBody, `${urlLightbox}`, `${"textAlt"}`);
                DomElement.addAttribute(lightboxBody, "id", `lightboxBody`);
                lightboxContent.appendChild(lightboxBody);
        }

        static createNextBtn() {

                const lightboxContent = document.getElementById("lightbox__modal__content");
                // === création de la fléche photo suivante ====
                var lightboxNext = new DomElement("i");
                DomElement.addClass(lightboxNext, "next");
                DomElement.addClass(lightboxNext, "fas");
                DomElement.addClass(lightboxNext, "fa-chevron-right");
                DomElement.addAttribute(lightboxNext, "id", "next");
                lightboxContent.appendChild(lightboxNext);

        }

        static createPreviousBtn() {

                const lightboxContent = document.getElementById("lightbox__modal__content");
                // === création de la fléche photo précédente ====
                var lightboxPrevious = new DomElement("i");
                DomElement.addClass(lightboxPrevious, "previous");
                DomElement.addClass(lightboxPrevious, "fas");
                DomElement.addClass(lightboxPrevious, "fa-chevron-left");
                DomElement.addAttribute(lightboxPrevious, "id", "previous");
                lightboxContent.appendChild(lightboxPrevious);
        }

        static createTitle(title) {

                var lightboxSection = document.getElementById("lightbox__modal");

                // === création du titre de la photo ====
                var lightboxTitle = new DomElement("span");
                DomElement.addClass(lightboxTitle, "image__title");
                DomElement.addAttribute(lightboxTitle, "id", "image__title");
                DomElement.addText(lightboxTitle, `${title}`);
                lightboxSection.appendChild(lightboxTitle);
        }

        static lightboxDeletion() {

                // === suppression de la section lightbox === 
                const body = document.getElementById("main");
                const lightboxSection = document.getElementById("lightbox__modal");

                body.removeChild(lightboxSection);

        }

        static lightboxClose() {

                const lightboxCloseBtn = document.getElementById("close__lightbox");
                lightboxCloseBtn.addEventListener("click", () => {
                        var lightboxSection = document.getElementById("lightbox__modal");
                        lightboxSection.style.display = "none";
                        this.lightboxDeletion();
                });

        }

        // === navigation vers l'image suivante ==== 

        static goNext() {

                const nextBtn = document.getElementById("next");

                if (nextBtn) {

                        nextBtn.addEventListener("click", () => {

                                const currentDiv = document.getElementById(`selected`);
                                const nextDiv = currentDiv.nextElementSibling;
                                const previousDiv = currentDiv.previousElementSibling;
                                const currentImage = document.querySelector(`#selected img`);
                                const Title = document.getElementById("image__title");

                                if (nextDiv) {

                                        // lightboxBody.removeAttribute("src");
                                        const nextImage = document.querySelector(`div[id='${nextDiv.id}'] img`);
                                        DomElement.addImg(lightboxBody, `${nextImage.src}`, `${nextImage.title}`);
                                        DomElement.addText(Title, `${nextImage.title}`);
                                        DomElement.addAttribute(currentDiv, "id", "previousDiv");
                                        DomElement.addAttribute(nextDiv, "id", "selected");
                                        DomElement.addAttribute(currentImage, "id", "previousImage");


                                }
                                if (previousDiv) {
                                        const previousImage = document.querySelector(`div[id='${previousDiv.id}'] img`);
                                        const previousDiv2 = currentDiv.previousElementSibling;
                                        DomElement.addAttribute(previousImage, "id", `previousImage`);

                                        // this.createPreviousBtn();

                                        if (nextDiv) {
                                                DomElement.addAttribute(previousDiv2, "id", `${previousDiv2.title}`);
                                                const previousImage2 = document.querySelector(`div[id='${previousDiv2.id}'] img`);
                                                DomElement.addAttribute(previousImage2, "id", `${previousDiv2.title}`);

                                        }

                                }

                        });
                }

        }

        // === navigation vers l'image précédente ==== 

        static goPrevious() {
                const previousBtn = document.getElementById("previous");


                if (previousBtn) {

                        previousBtn.addEventListener("click", () => {
                                const currentDiv = document.getElementById(`selected`);

                                if (currentDiv) {

                                        const currentImage = document.querySelector(`#selected img`);
                                        const previousDiv = currentDiv.previousElementSibling;
                                        const previousImage = document.getElementById(`previousImage`);
                                        const Title = document.getElementById("image__title");
                                        const nextDiv = currentDiv.nextElementSibling;

                                        if (previousDiv) {

                                                DomElement.addAttribute(currentDiv, "id", `${currentDiv.title}`);
                                                DomElement.addAttribute(previousDiv, "id", "selected");
                                                DomElement.addAttribute(currentImage, "id", "nextImage");
                                                DomElement.addAttribute(currentImage, "id", "nextImage");


                                                const previousDiv2 = previousDiv.previousElementSibling;
                                                DomElement.addImg(lightboxBody, `${previousImage.src}`, `${previousImage.title}`);
                                                DomElement.addText(Title, `${previousImage.title}`);


                                                if (previousDiv2) {
                                                        const previousImage2 = document.querySelector(`div[id='${previousDiv2.id}'] img`);
                                                        DomElement.addAttribute(previousDiv2, "id", `previousDiv`);
                                                        DomElement.addAttribute(previousImage2, "id", `previousImage`);

                                                }

                                                // if(nextDiv){
                                                //         this.createNextBtn();
                                                // }
                                        }

                                }

                        });
                }
        }

        static createLightbox(url) {

                this.createLightboxContent();
                this.createLightboxCloseBtn();
                this.createLightboxModalContent(url);
                this.createNextBtn();
                this.createPreviousBtn();
                this.goNext();
                this.goPrevious();

                const currentDiv = document.getElementById(`selected`);
                const previousDiv = currentDiv.previousElementSibling;
                const nextDiv = currentDiv.nextElementSibling;
                
                if (previousDiv) {
                        DomElement.addAttribute(previousDiv, "id", "previousDiv");
                        const previousImage = document.querySelector(`div[id='${previousDiv.id}'] img`);
                        DomElement.addAttribute(previousImage, "id", `previousImage`);
                }
                
                // if (nextDiv) {
                //         this.createNextBtn();
                // }
                // if (previousDiv) {
                //         this.createPreviousBtn();
                // }
                


        }


        static lightboxSectionCreate(image) {
                // === création de la section lightbox ==== 
                const body = document.getElementById("main");
                const lightboxSection = new DomElement("section");
                const currentDiv = document.getElementById(`${image.id}`);

                DomElement.addAttribute(currentDiv, "id", "selected");
                DomElement.addAttribute(lightboxSection, "id", "lightbox__modal");
                DomElement.addClass(lightboxSection, "lightbox__modal");
                body.appendChild(lightboxSection);
        }

        static lightboxOpen() {

                const images = document.querySelectorAll(".photographer__profil__img__selection");

                images.forEach(image => {

                        image.addEventListener("click", () => {

                                this.lightboxSectionCreate(image); // === création section lightbox 
                                this.createLightbox(image.src); // === création élements lightbox
                                this.lightboxClose(); // === fonction fermeture lightbox
                                this.createTitle(image.title); // === modification du titre de la photo
                                
                                // === ouverture de la section =====
                                const lightboxSection = document.getElementById("lightbox__modal");
                                lightboxSection.style.display = "flex";
                        });


                });

        }

}