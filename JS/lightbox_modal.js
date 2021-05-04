import {
        DomElement
} from "./domElement.js";

export class Lightbox {



        static createLightbox(data) {



                const medias = data['media'];

                const url = new URL(window.location.href);
                const artistId = url.searchParams.get("id");
                const artistName = url.searchParams.get("name");
                let params = new URLSearchParams(document.location.hash.substring(1));
                const imageId = params.get("image");    

                for (let media of medias){
                        if (media.image == imageId){



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


                                //=== ajout de la class à la photo séléctionnée ===

                                const pics = document.querySelectorAll(`div.selection__card a`);
                                const selectedPic = document.getElementById(`${imageId}`);
                                DomElement.addClass(selectedPic, "selected"); 
                                console.log(pics);
                                for (let pic of pics){
                                        const nextPicId = pic;
                                        if (picId == imageId){

                                        }
                                }
                                // === création du corp de la modale ====

                                var lightboxBody = new DomElement("div");
                                DomElement.addClass(lightboxBody, "lightbox__modal__content__body");
                                const artistFirst = artistName.substring(0, artistName.lastIndexOf(" "));
                                const pictureUrl = "../images/" + artistFirst + "/" + imageId;
                                lightboxBody.style.backgroundImage = `url("${pictureUrl}")`;
                                lightboxBody.style.backgroundSize = "contain";
                                lightboxBody.style.backgroundRepeat = "no-repeat";
                                lightboxBody.style.backgroundPosition = "center";
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
                                // DomElement.addText(lightboxTitle, `${imageId.substring(imageId.lastIndexOf( "_" )+1).replace(".jpg", "")}`);
                                lightboxSection.appendChild(lightboxTitle);


                        }
                }
        };
        static lightboxDeletion(){
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

        static lightboxOpen(data) {

                const images = document.querySelectorAll(".selection__card__div");

                images.forEach(image => {

                        image.addEventListener("click", () => {

                                // === création de la section lightbox ==== 
                                const body = document.getElementById("main");
                                const lightboxSection = new DomElement("section");
                                DomElement.addAttribute(lightboxSection, "id", "lightbox__modal");
                                DomElement.addClass(lightboxSection, "lightbox__modal"); 
                                body.appendChild(lightboxSection); 

                                // === ouverture de la section =====
                                lightboxSection.style.display = "block";
                                this.createLightbox(data);
                                this.lightboxClose();


                        });


                });

        }

}