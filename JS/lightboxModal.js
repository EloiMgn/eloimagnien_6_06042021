import {DomElement} from "./domElement.js";
import { NavigateLightbox} from "./lightboxNavigation.js"

export class Lightbox {

        static createLightboxContent() {

                var lightboxSection = document.getElementById("lightbox__modal");


                // === création de la div modale ===
                var lightboxContent = new DomElement("div");
                DomElement.addClass(lightboxContent, "lightbox__modal__content");
                DomElement.addAttribute(lightboxContent, "id", "lightbox__modal__content");
                lightboxSection.appendChild(lightboxContent);
        }

        static createLightboxCloseBtn() {
                // === création du bouton de fermeture ====
                const lightboxContent = document.getElementById("lightbox__modal__content");
                var lightboxClose = new DomElement("span");
                DomElement.addClass(lightboxClose, "close_lightbox");
                DomElement.addAttribute(lightboxClose, "id", "close__lightbox");
                DomElement.addAttribute(lightboxClose, "tabindex", "0");
                lightboxContent.appendChild(lightboxClose);
        }

        static createLightboxBodyImage(url) {


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


        static createLightboxBodyVideo(url) {

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

                var sourceVideo = new DomElement("source");
                lightboxBody.appendChild(sourceVideo);

                DomElement.addAttribute(sourceVideo, "src", `${url}`);
                DomElement.addAttribute(sourceVideo, "type", "video/mp4");
        }

        static createLightboxModalContent(url, imageType) {

                if (imageType == "IMG") {
                        this.createLightboxBodyImage(url);
                }
                if (imageType == "VIDEO") {
                        this.createLightboxBodyVideo(url);
                }

        }

        static removeLightboxModalBody() {

                const lightboxContentBodyVideo = document.querySelector("#lightbox__modal__content > video");
                const lightboxContentBodyImage = document.querySelector("#lightbox__modal__content > img");
                if (lightboxContentBodyVideo) {
                        lightboxContentBodyVideo.remove();
                }
                if (lightboxContentBodyImage) {
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
                DomElement.addAttribute(lightboxNext, "tabindex", "0");
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
                DomElement.addAttribute(lightboxPrevious, "tabindex", "0");
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

        static lightboxClose(){

                lightboxSection.style.display = "none";
                this.lightboxDeletion();
                this.addSelection();
                
        }

        static lightboxCloseClic() {

                const lightboxCloseBtn = document.getElementById("close__lightbox");
                lightboxCloseBtn.addEventListener("click", () => {
                        this.lightboxClose();
                });

        }

        static removeSelection(){
                const banner = document.getElementById("banner");
                const selection = document.getElementById("selection");
                const listbox = document.getElementById("listbox"); 

                banner.style.display="none";
                selection.style.display="none";
                listbox.style.display="none";
        }
        static addSelection(){
                const banner = document.getElementById("banner");
                const selection = document.getElementById("selection");
                const listbox = document.getElementById("listbox"); 

                banner.style.display="flex";
                selection.style.display="flex";
                listbox.style.display="block";
        }

        static initLightbox(url, imageType, image) {

                this.createLightboxContent();
                this.createLightboxCloseBtn();
                this.createLightboxModalContent(url, imageType);
                this.createNextBtn();
                this.createPreviousBtn();
                NavigateLightbox.goNextClic();   
                NavigateLightbox.goPreviousClic();
                NavigateLightbox.keyboardNavigation()
                this.lightboxCloseClic(); // === fonction fermeture lightbox
                this.createTitle(image.title); // === modification du titre de la photo
                this.removeSelection();
        
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

        static initVideo(video){
                const urlVideo = document.querySelector(`video[id='${video.id}'] > source`).src;
                this.lightboxSectionCreate(video); // === création section lightbox 
                this.initLightbox(urlVideo, video.tagName, video); // === création élements lightbox

                // === ouverture de la section =====
                const lightboxSection = document.getElementById("lightbox__modal");
                lightboxSection.style.display = "flex";
        }
        static initImage(image){
                this.lightboxSectionCreate(image); // === création section lightbox 
                this.initLightbox(image.src, image.tagName, image); // === création élements lightbox

                // === ouverture de la section =====
                const lightboxSection = document.getElementById("lightbox__modal");
                lightboxSection.style.display = "flex";
        }

        static lightboxOpen() {

                const imagesLi = document.querySelectorAll(".selection__card__div");

                imagesLi.forEach(element => {
                        // ==== clic de la souris 
                        element.addEventListener("click", () => {
                                
                                // === si l'élément cliqué est une image :
                                if (element.firstChild.tagName == "IMG"){
                                        this.initImage(element.firstChild);
                                }
                                // === si l'élément cliqué est une vidéo :

                                if (element.firstChild.tagName === "VIDEO") {
                                        this.initVideo(element.firstChild);
                                }
                        });

                        // ==== touche entrée du clavier 

                        element.addEventListener("keypress", (event) => {
                                
                                const lightboxSection = document.getElementById("lightbox__modal");


                                if (event.key == "Enter" && !lightboxSection) {
                                        
                                        // === si l'élément cliqué est une image :
                                        if (element.firstChild.tagName == "IMG"){
                                                this.initImage(element.firstChild);
                                        }
                                        // === si l'élément cliqué est une vidéo :
        
                                        if (element.firstChild.tagName === "VIDEO") {
                                                event.preventDefault();
                                                this.initVideo(element.firstChild);
                                        }

                                }

                        })
                })


        }




}