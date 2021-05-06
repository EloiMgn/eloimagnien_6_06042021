import {
        DomElement
} from "./domElement.js";

export class Lightbox {



        static createLightbox(url) {

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

                var lightboxBody = new DomElement("img");
                DomElement.addClass(lightboxBody, "lightbox__modal__content__body");
                DomElement.addImg(lightboxBody, `${url}`, `${"frfrfr"}`)
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
                DomElement.addText(lightboxTitle, `${"medias.title"}`);
                lightboxSection.appendChild(lightboxTitle);

        };


        static initLightbox(data, url) {

                const medias = data['media'];
                const url1 = new URL(window.location.href);
                const artistName = url1.searchParams.get("name");
                const urlLightbox = url.replace("/tinified", "");


                for (let media of medias) {
                        this.createLightbox(urlLightbox);
                }
        }



        static lightboxDeletion() {
                // === suppression de la section lightbox === 
                const body = document.getElementById("main");
                const lightboxSection = document.getElementById("lightbox__modal");
                body.removeChild(lightboxSection);

                const images = document.querySelectorAll(".photographer__profil__img__selection");

                images.forEach(image => {
                        image.classList.remove("selected");
                })

        }

        static lightboxClose() {

                const lightboxCloseBtn = document.getElementById("close__lightbox");
                lightboxCloseBtn.addEventListener("click", () => {
                        var lightboxSection = document.getElementById("lightbox__modal");
                        lightboxSection.style.display = "none";
                        this.lightboxDeletion();
                });
        }

        static lightboxOpen(data) {

                const images = document.querySelectorAll(".photographer__profil__img__selection");

                images.forEach(image => {

                        image.addEventListener("click", () => {

                                // === création de la section lightbox ==== 
                                const body = document.getElementById("main");
                                const lightboxSection = new DomElement("section");
                                DomElement.addClass(image, "selected");
                                DomElement.addAttribute(lightboxSection, "id", "lightbox__modal");
                                DomElement.addClass(lightboxSection, "lightbox__modal");
                                body.appendChild(lightboxSection);
                                // === ouverture de la section =====
                                console.log(image.src);
                                lightboxSection.style.display = "block";
                                this.initLightbox(data, image.src);
                                this.lightboxClose();


                        });


                });

        }

}