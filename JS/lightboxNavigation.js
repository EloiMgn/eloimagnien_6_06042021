import {Lightbox } from "./lightboxModal.js"
import {DomElement} from "./domElement.js";

export class NavigateLightbox{


           // === navigation vers l'image suivante ==== 

           static goNext(url) {

                const mediasArray = JSON.parse(sessionStorage.getItem("mediasArray"));

                for (let i = 0; i < mediasArray.length; i++) {
                        mediasArray[i].index = i;
                        nextBtn.addEventListener("click", () => {
                                
                        });
                        
                }

            const nextBtn = document.getElementById("next");

            if (nextBtn) {

                    nextBtn.addEventListener("click", () => {
                            
                            
                            const currentDiv = document.getElementById(`selected`);
                            const nextDiv = currentDiv.nextElementSibling;
                            const previousDiv = currentDiv.previousElementSibling;
                            const currentImage = document.querySelector(`#selected img`);
                            const currentVideo = document.querySelector(`#selected video`);
                            const title = document.getElementById("image__title");
                            

                            if (nextDiv) {
                                    Lightbox.removeLightboxModalBody();
                                     const nextImage = document.querySelector(`div[id='${nextDiv.id}'] img`);
                                    

                                    if (nextImage){
                                            const nextImageSource = document.querySelector(`div[id='${nextDiv.id}'] img`).src;
                                            Lightbox.createLightboxBodyImage(nextImageSource);
                                            DomElement.addImg(lightboxBody, `${nextImage.src}`, `${nextImage.title}`);
                                            DomElement.addText(title, `${nextImage.title}`);
                                            DomElement.addAttribute(currentDiv, "id", "previousDiv");
                                            DomElement.addAttribute(nextDiv, "id", "selected");
                                            
                                            if (currentImage){
                                                    DomElement.addAttribute(currentImage, "id", "previousImage");
                                            }
                                            if (currentVideo){
                                                    DomElement.addAttribute(currentVideo, "id", "previousImage");
                                            }
                                            
                                    } else {
                                            const nextVideoSource = document.querySelector(`div[id='${nextDiv.id}'] video > source`).src;
                                            const nextVideoPoster = document.querySelector(`div[id='${nextDiv.id}'] video`).poster;
                                            Lightbox.createLightboxBodyVideo(nextVideoSource, nextVideoPoster);
                                            const nextVideo = document.querySelector(`div[id='${nextDiv.id}'] video`);
                                            DomElement.addText(title, `${nextVideo.title}`);
                                            DomElement.addAttribute(currentDiv, "id", "previousDiv");
                                            DomElement.addAttribute(nextDiv, "id", "selected");
                                            
                                            if (currentImage){
                                                    DomElement.addAttribute(currentImage, "id", "previousImage");
                                            }
                                            if (currentVideo){
                                                    DomElement.addAttribute(currentVideo, "id", "previousImage");
                                            }
                                    }


                            }
                            if (previousDiv) {
                                    const previousImage = document.querySelector(`div[id='${previousDiv.id}'] img`);
                                    const previousVideo = document.querySelector(`div[id='${previousDiv.id}'] video`);
                                    const previousDiv2 = currentDiv.previousElementSibling;
                                    if (previousImage){
                                            DomElement.addAttribute(previousImage, "id", `previousImage`);
                                    }
                                    if(previousVideo){
                                            DomElement.addAttribute(previousVideo, "id", `previousImage`);
                                    }

                                    // this.createPreviousBtn();

                                    if (nextDiv) {
                                            DomElement.addAttribute(previousDiv2, "id", `${previousDiv2.title}`);
                                            const previousImage2 = document.querySelector(`div[id='${previousDiv2.id}'] img`);
                                            const previousVideo2 = document.querySelector(`div[id='${previousDiv2.id}'] video`);
                                            if (previousImage2){
                                                    DomElement.addAttribute(previousImage2, "id", `${previousDiv2.title}`);
                                            }
                                            if (previousVideo2){
                                                    DomElement.addAttribute(previousVideo2, "id", `${previousDiv2.title}`);
                                            }

                                    }

                            }

                    });
            }

    }

    // === navigation vers l'image précédente ==== 

    static goPrevious(url, imagePoster) {
            const previousBtn = document.getElementById("previous");


            if (previousBtn) {

                    previousBtn.addEventListener("click", () => {
                            Lightbox.removeLightboxModalBody();
                    
                            const currentDiv = document.getElementById(`selected`);

                            if (currentDiv) {
                                    Lightbox.createLightboxBodyImage(url);
                                    const currentImage = document.querySelector(`#selected img`);
                                    const currentVideo = document.querySelector(`#selected video`);
                                    const previousDiv = currentDiv.previousElementSibling;
                                    const previousImage = document.getElementById(`previousImage`);
                                    const Title = document.getElementById("image__title");

                                    if (previousDiv) {
                                            const previousVideo = document.querySelector(`div[id='${previousDiv.id}'] video`);

                                                    DomElement.addAttribute(currentDiv, "id", `${currentDiv.title}`);
                                                    DomElement.addAttribute(previousDiv, "id", "selected");
                                                    if (currentImage){
                                                            DomElement.addAttribute(currentImage, "id", "nextImage");
                                                    }
                                                    if (currentVideo){
                                                            DomElement.addAttribute(currentVideo, "id", "nextImage");
                                                    }
                            
                                                    const previousDiv2 = previousDiv.previousElementSibling;
                                                    DomElement.addImg(lightboxBody, `${previousImage.src}`, `${previousImage.title}`);
                                                    DomElement.addText(Title, `${previousImage.title}`);
    
    
                                                    if (previousDiv2) {
                                                            const previousImage2 = document.querySelector(`div[id='${previousDiv2.id}'] img`);
                                                            const previousVideo2 = document.querySelector(`div[id='${previousDiv2.id}'] video`);
                                                            DomElement.addAttribute(previousDiv2, "id", `previousDiv`);

                                                            if (previousImage2){
                                                                    DomElement.addAttribute(previousImage2, "id", `previousImage`);
                                                            }
                                                            if (previousVideo2){
                                                                    DomElement.addAttribute(previousVideo2, "id", `previousImage`);
                                                            }
    
                                            }

                                    }

                            }

                    });
            }
    }

}