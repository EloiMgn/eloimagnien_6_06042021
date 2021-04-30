import {
        DomElement
} from "./domElement.js";

export class Lightbox {

        static lightboxOpen() {

                const images = document.querySelectorAll(".selection__card__div");


                images.forEach(image => {

                        image.addEventListener("click", () => {

                                var lightboxSection = document.getElementById("lightbox__modal");
                                lightboxSection.style.display = "block";
                                
                        });

                        
                });

        }

        static createLightbox() {

                const url2 = window.location.hash;
                const imageId = url2.replace("#&image=", "");
                console.log(imageId);


                var lightboxSection = document.getElementById("lightbox__modal");

                // === création de la div modale ===
                var lightboxContent = new DomElement("div");
                DomElement.addClass(lightboxContent, "lightbox__modal__content");
                lightboxSection.appendChild(lightboxContent);

                // === création du bouton de fermeture ====
                var lightboxClose = new DomElement("span");
                DomElement.addClass(lightboxClose, "close_lightbox");
                DomElement.addAttribute(lightboxClose, "id", "close__lightbox");
                lightboxContent.appendChild(lightboxClose);


                // === création du corp de la modale ====

                var lightboxBody = new DomElement("div");
                DomElement.addClass(lightboxBody, "lightbox__modal__content__body");
                lightboxContent.appendChild(lightboxBody);

                // === création de la fléche photo suivante ====
                var lightboxNext = new DomElement("span");
                DomElement.addClass(lightboxNext, "next");
                DomElement.addAttribute(lightboxNext, "id", "next");
                lightboxContent.appendChild(lightboxNext);

                // === création de la fléche photo précédente ====
                var lightboxPrevious = new DomElement("span");
                DomElement.addClass(lightboxPrevious, "previous");
                DomElement.addAttribute(lightboxPrevious, "id", "previous");
                lightboxContent.appendChild(lightboxPrevious);

                // === création du titre de la photo ====
                var lightboxTitle = new DomElement("span");
                DomElement.addClass(lightboxTitle, "image__title");
                DomElement.addText(lightboxTitle, `${imageId.substring(imageId.lastIndexOf( "_" )+1).replace(".jpg", "")}`);
                lightboxSection.appendChild(lightboxTitle);


        }

        static lightboxClose() {

                const lightboxCloseBtn = document.getElementById("close__lightbox");
                lightboxCloseBtn.addEventListener("click", () => {
                        var lightboxSection = document.getElementById("lightbox__modal");
                        lightboxSection.style.display = "none";
                });
        }


}