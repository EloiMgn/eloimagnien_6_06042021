import { DomElement} from "./domElement.js";
import {NavigateLightbox} from "./lightboxNavigation.js"

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

        static createLightboxBodyImage(url){

                this.removeLightboxModalBody();
                const lightboxContent = document.getElementById("lightbox__modal__content");
                const urlLightbox = url.replace("/tinified", "");
                // === création du corp de la modale ====
                var lightboxBody = new DomElement("img");
                DomElement.addClass(lightboxBody, "lightbox__modal__content__body");
                DomElement.addImg(lightboxBody, `${urlLightbox}`, `${"textAlt"}`);
                DomElement.addAttribute(lightboxBody, "id", `lightboxBody`);
                lightboxContent.appendChild(lightboxBody);
        }


        static createLightboxBodyVideo(url, imagePoster){

                console.log(url);
                this.removeLightboxModalBody();
                const lightboxContent = document.getElementById("lightbox__modal__content");
                var lightboxBody = new DomElement("video");
                lightboxContent.appendChild(lightboxBody);
                DomElement.addClass(lightboxBody, "lightbox__modal__content__body");
                DomElement.addAttribute(lightboxBody, "id", `lightboxBody`);
                DomElement.addAttribute(lightboxBody, "controls", ""); 
                DomElement.addText(lightboxBody, "Votre navigateur ne permet pas de lire les vidéos.");
                DomElement.addAttribute(lightboxBody, "height", "100%"); 
                DomElement.addAttribute(lightboxBody, "width", "100%"); 
                DomElement.addAttribute(lightboxBody, "poster", `${imagePoster}`);

                var sourceVideo = new DomElement("source");
                lightboxBody.appendChild(sourceVideo);

                DomElement.addAttribute(sourceVideo, "src", `${url}`); 
                DomElement.addAttribute(sourceVideo, "type", "video/mp4"); 
        }

        static createLightboxModalContent(url, imageType, imagePoster){

                if (imageType == "IMG"){
                        this.createLightboxBodyImage(url);
                }
                if (imageType == "VIDEO"){
                        this.createLightboxBodyVideo(url, imagePoster);
                }

        }

        static removeLightboxModalBody(){

                const lightboxContentBodyVideo = document.querySelector("#lightbox__modal__content > video");
                const lightboxContentBodyImage = document.querySelector("#lightbox__modal__content > img");
                if(lightboxContentBodyVideo) {
                        lightboxContentBodyVideo.remove();
                }
                if(lightboxContentBodyImage){
                        lightboxContentBodyImage.remove();
                }
                    

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

 
        static createLightbox(url, imageType, imagePoster) {

                this.createLightboxContent();
                this.createLightboxCloseBtn();
                this.createLightboxModalContent(url, imageType, imagePoster);
                this.createNextBtn();
                this.createPreviousBtn();
                NavigateLightbox.goNext(url, imagePoster);
                NavigateLightbox.goPrevious(url, imagePoster);

                const currentDiv = document.getElementById(`selected`);
                const previousDiv = currentDiv.previousElementSibling;


                if (previousDiv) {
                        DomElement.addAttribute(previousDiv, "id", "previousDiv");
                        const previousImage = document.querySelector(`div[id='${previousDiv.id}'] img`);
                        const previousVideo = document.querySelector(`div[id='${previousDiv.id}'] video`);
                        if (previousImage){

                                DomElement.addAttribute(previousImage, "id", `previousImage`);
                        }
                        if (previousVideo){
                                DomElement.addAttribute(previousVideo, "id", `previousImage`);
                        }
                }


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
                                       
                                        if(image.tagName === "IMG"){
                                                
                                                this.lightboxSectionCreate(image); // === création section lightbox 
                                                this.createLightbox(image.src, image.tagName); // === création élements lightbox
                                                this.lightboxClose(); // === fonction fermeture lightbox
                                                this.createTitle(image.title); // === modification du titre de la photo
                                                
                                                // === ouverture de la section =====
                                                const lightboxSection = document.getElementById("lightbox__modal");
                                                lightboxSection.style.display = "flex";
                                        } 
                                        if(image.tagName === "VIDEO"){
                                                const urlVideo = document.querySelector(`video[id='${image.id}'] > source`).src;
                                                this.lightboxSectionCreate(image); // === création section lightbox 
                                                this.createLightbox(urlVideo, image.tagName, image.poster); // === création élements lightbox
                                                this.lightboxClose(); // === fonction fermeture lightbox
                                                this.createTitle(image.title); // === modification du titre de la photo
                                                
                                                // === ouverture de la section =====
                                                const lightboxSection = document.getElementById("lightbox__modal");
                                                lightboxSection.style.display = "flex";
                                        } 
                                });
        

                                image.addEventListener("keypress", (event) => {
                                        
                                                                                     
                                        if (event.key == "Enter"){

                                                if(image.tagName === "IMG"){
                                                        
                                                        this.lightboxSectionCreate(image); // === création section lightbox 
                                                        this.createLightbox(image.src, image.tagName); // === création élements lightbox
                                                        this.lightboxClose(); // === fonction fermeture lightbox
                                                        this.createTitle(image.title); // === modification du titre de la photo
                                                        
                                                        // === ouverture de la section =====
                                                        const lightboxSection = document.getElementById("lightbox__modal");
                                                        lightboxSection.style.display = "flex";
                                                } 
                                                if(image.tagName === "VIDEO"){
                                                        event.preventDefault();
                                                        const urlVideo = document.querySelector(`video[id='${image.id}'] > source`).src;
                                                        this.lightboxSectionCreate(image); // === création section lightbox 
                                                        this.createLightbox(urlVideo, image.tagName, image.poster); // === création élements lightbox
                                                        this.lightboxClose(); // === fonction fermeture lightbox
                                                        this.createTitle(image.title); // === modification du titre de la photo
                                                        
                                                        // === ouverture de la section =====
                                                        const lightboxSection = document.getElementById("lightbox__modal");
                                                        lightboxSection.style.display = "flex";
                                                } 
                                        }
                                        });
        
                        });
                




        }

}