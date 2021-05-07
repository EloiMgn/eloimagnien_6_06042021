import { DomElement} from "./domElement.js";
import {CreateSelection} from "./pagesSelection.js";

export class Lightbox {



        static createLightbox(data, url) {

                const medias = data['media']; 
                const urlLightbox = url.replace("/tinified", "");

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
                DomElement.addImg(lightboxBody, `${urlLightbox}`, `${"textAlt"}`);
                DomElement.addAttribute(lightboxBody, "id", `lightboxBody`);
                lightboxContent.appendChild(lightboxBody);

                // === création de la fléche photo suivante ====
                var lightboxNext = new DomElement("i");
                DomElement.addClass(lightboxNext, "next");
                DomElement.addClass(lightboxNext, "fas");
                DomElement.addClass(lightboxNext, "fa-chevron-right");
                DomElement.addAttribute(lightboxNext, "id", "next");
                lightboxContent.appendChild(lightboxNext);

                // === création de la fléche photo précédente ====
                var lightboxPrevious = new DomElement("i");
                DomElement.addClass(lightboxPrevious, "previous");
                DomElement.addClass(lightboxPrevious, "fas");
                DomElement.addClass(lightboxPrevious, "fa-chevron-left");
                DomElement.addAttribute(lightboxPrevious, "id", "previous");
                lightboxContent.appendChild(lightboxPrevious);

                const currentDiv = document.getElementById(`selected`);
                const previousDiv = currentDiv.previousElementSibling;
                if (previousDiv){
                        DomElement.addAttribute(previousDiv, "id", "previousDiv");
                        const previousImage = document.querySelector(`div[id='${previousDiv.id}'] img`);
                        DomElement.addAttribute(previousImage, "id", `previousImage`);
                }
                
                this.goNext();
                this.goPrevious();

        };
        static createTitle(title){
                var lightboxSection = document.getElementById("lightbox__modal");
                // === création du titre de la photo ====
                var lightboxTitle = new DomElement("span");
                DomElement.addClass(lightboxTitle, "image__title");
                DomElement.addAttribute(lightboxTitle, "id","image__title");
                DomElement.addText(lightboxTitle, `${title}`);
                lightboxSection.appendChild(lightboxTitle);
        }

        static lightboxDeletion() {
                // === suppression de la section lightbox === 
                const body = document.getElementById("main");
                const lightboxSection = document.getElementById("lightbox__modal");

                body.removeChild(lightboxSection);
                // const myNode = document.getElementById("selection");
                // while (myNode.firstChild) {
                //   myNode.removeChild(myNode.lastChild);
                // }

        }

        static lightboxClose(data) {

                const lightboxCloseBtn = document.getElementById("close__lightbox");
                lightboxCloseBtn.addEventListener("click", () => {
                        var lightboxSection = document.getElementById("lightbox__modal");
                        lightboxSection.style.display = "none";
                        this.lightboxDeletion();
                        // CreateSelection.showSelection(data)
                });

        }

        static goNext(){

                const nextBtn = document.getElementById("next");
                nextBtn.addEventListener("click", ()=>{

                        const currentDiv = document.getElementById(`selected`);
                        const nextDiv = currentDiv.nextElementSibling;
                        const previousDiv = currentDiv.previousElementSibling;
                        const currentImage = document.querySelector(`#selected img`);
                        const Title = document.getElementById("image__title");
                        
                        if(nextDiv){
                                
                                // lightboxBody.removeAttribute("src");
                                const nextImage = document.querySelector(`div[id='${nextDiv.id}'] img`);
                                DomElement.addImg(lightboxBody, `${nextImage.src}`, `${nextImage.title}`);
                                DomElement.addText(Title, `${nextImage.title}`);
                                DomElement.addAttribute(currentDiv, "id", "previousDiv");
                                DomElement.addAttribute(nextDiv, "id", "selected");
                                DomElement.addAttribute(currentImage, "id", "previousImage");
                                
                        }
                        if (previousDiv){
                                const previousImage = document.querySelector(`div[id='${previousDiv.id}'] img`);
                                const previousDiv2 = currentDiv.previousElementSibling;
                                DomElement.addAttribute(previousImage, "id", `previousImage`);

                                if(nextDiv){
                                        DomElement.addAttribute(previousDiv2, "id", `${previousDiv2.title}`);
                                        const previousImage2 = document.querySelector(`div[id='${previousDiv2.id}'] img`);
                                        DomElement.addAttribute(previousImage2, "id", `${previousDiv2.title}`);

                                }

                        }

                 });

        }

        static goPrevious(){
                const previousBtn = document.getElementById("previous");
                
                previousBtn.addEventListener("click", ()=>{
                        const currentDiv = document.getElementById(`selected`);
                        
                        if (currentDiv){
                        
                                const currentImage = document.querySelector(`#selected img`);
                                const nextDiv = currentDiv.nextElementSibling;
                                const previousDiv = currentDiv.previousElementSibling;  
                                const previousImage =  document.getElementById(`previousImage`);
                                const Title = document.getElementById("image__title");
                                
                                if(previousDiv){
                                        
                                        DomElement.addAttribute(currentDiv, "id", `${currentDiv.title}`);
                                        DomElement.addAttribute(previousDiv, "id", "selected");
                                        DomElement.addAttribute(currentImage, "id", "nextImage");
                                        DomElement.addAttribute(currentImage, "id", "nextImage");
                                        
                                        
                                        const previousDiv2 = previousDiv.previousElementSibling;
                                        DomElement.addImg(lightboxBody, `${previousImage.src}`, `${previousImage.title}`);
                                        DomElement.addText(Title, `${previousImage.title}`);
                                        
                                        if(previousDiv2){
                                                const previousImage2 = document.querySelector(`div[id='${previousDiv2.id}'] img`);
                                                DomElement.addAttribute(previousDiv2, "id", `previousDiv`);
                                                DomElement.addAttribute(previousImage2, "id", `previousImage`);  

                                        }
                                }
                                // const currentDiv = document.getElementById("selected");
                                // const lightboxBody = document.getElementById("lightboxBody");
                                // const previous = document.getElementById("previousDiv");
                                
                                // DomElement.addAttribute(currentDiv, "id", "previousDiv");
                                // DomElement.addAttribute(nextDiv, "id", "selected");
                        }
                                // DomElement.addAttribute(currentDiv, "id", "previousDiv");
                        })
        }

        static lightboxOpen(data) {

                const images = document.querySelectorAll(".photographer__profil__img__selection");
                const medias = data['media']; 


                images.forEach(image => {

                        image.addEventListener("click", () => {

                                // === création de la section lightbox ==== 
                                const body = document.getElementById("main");
                                const lightboxSection = new DomElement("section");
                                
                                
                                const currentDiv = document.getElementById(`${image.id}`);
                                const nextDiv = currentDiv.nextElementSibling;
                                const previousDiv = currentDiv.previousElementSibling;
                                const currentImage = document.querySelector(`div[id='${image.id}'] img`);


                                // const nextDiv = document.querySelector(`div[id='${image.id}'] + div`);
                                
                                // DomElement.addAttribute(nextDiv, "id", "nextDiv");
                                // DomElement.addAttribute(nextImage, "id", "nextImage");
                                DomElement.addAttribute(currentDiv, "id", "selected");
                               
                                // DomElement.addAttribute(currentDiv, "title", `${image.title}`);

                               
                               
                               
                                DomElement.addAttribute(lightboxSection, "id", "lightbox__modal");
                                DomElement.addClass(lightboxSection, "lightbox__modal");
                                body.appendChild(lightboxSection);
                                // === ouverture de la section =====
                                lightboxSection.style.display = "flex";
                                this.createLightbox(data, image.src);
                                this.lightboxClose(data);
                                this.createTitle(image.title);

                        });


                });

        }

}