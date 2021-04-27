import { ElementsFactory } from "./class.js";

export class Lightbox {

    static createLightbox(jsonObj){

            var lightboxSection = document.getElementById("lightbox__modal");

    // === création de la div modale ===
            var lightboxContent = document.createElement("div");
            ElementsFactory.addClass(lightboxContent, "lightbox__modal__content");
            lightboxSection.appendChild(lightboxContent);

    // === création du bouton de fermeture ====
            var lightboxClose = document.createElement("span");
            ElementsFactory.addClass(lightboxClose, "close_lightbox");
            ElementsFactory.addAttribut(lightboxClose, "id", "close__lightbox");
            lightboxContent.appendChild(lightboxClose);

    // === création du corp de la modale ====
            var lightboxBody = document.createElement("div");
            ElementsFactory.addClass(lightboxBody, "lightbox__modal__content__body");
            lightboxContent.appendChild(lightboxBody);

    // === création de la fléche photo suivante ====
            var lightboxNext = document.createElement("span");
            ElementsFactory.addClass(lightboxNext, "next");
            ElementsFactory.addAttribut(lightboxNext, "id", "next");
            lightboxContent.appendChild(lightboxNext);

    // === création de la fléche photo suivante ====
            var lightboxPrevious = document.createElement("span");
            ElementsFactory.addClass(lightboxPrevious, "previous");
            ElementsFactory.addAttribut(lightboxPrevious, "id", "previous");
            lightboxContent.appendChild(lightboxPrevious);

    // === création du titre de la photo ====
            var lightboxtitle = document.createElement("span");
            var medias = jsonObj['media'];
            medias.forEach(medias => {
            ElementsFactory.addClass(lightboxtitle, "image__title");
            ElementsFactory.addText(lightboxtitle, `${medias.image.substring(medias.image.lastIndexOf( "_" )+1).replace(".jpg", "")}`);
            lightboxSection.appendChild(lightboxtitle);
            });

    }
    static lightboxOpen (){

        var lightboxSection = document.getElementById("lightbox__modal");
        lightboxSection.style.display = "block";
    }
    
}