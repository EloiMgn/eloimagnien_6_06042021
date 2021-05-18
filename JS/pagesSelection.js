import {DomElement} from "./domElement.js";
import {Lightbox} from "./lightboxModal.js";

export class CreateSelection {
    // ==== méthode de modifictaion de la sélection d'images de la page en focntion de l'artiste ====
    static showSelection(data) {


        const selection = document.getElementById("selection");
        
        const url = new URL(window.location.href);
        const artistName = url.searchParams.get("name");
        const artistId = url.searchParams.get("id");

        data.forEach((medias) => {
            
            
            if (medias.photographerId == artistId && medias.image) {
                
                
                //=== création de la carte ===
                const selectionCard = new DomElement('li');
                DomElement.addClass(selectionCard, `selection__card`);
                DomElement.addAttribute(selectionCard, "id", `${medias.id}`);
                // DomElement.addAttribute(selectionCard, "name", `${medias.id}`);
                DomElement.addAttribute(selectionCard, "title", `${medias.id}`);
                selection.appendChild(selectionCard);
                
                //=== création de la div photo ===
                const pictureContainer = new DomElement('div');
                const artistFirst = artistName.substring(0, artistName.lastIndexOf(" "));
                DomElement.addClass(pictureContainer, `selection__card__div`);
                DomElement.addClass(pictureContainer, `image`);
                DomElement.addAttribute(pictureContainer, "aria-label", `${medias.title}`);
                DomElement.addAttribute(pictureContainer, "tabindex", "0");
                selectionCard.appendChild(pictureContainer);

                
                
                // === insertion de l'image ===    
                const imageHtml = new DomElement('img');
                DomElement.addClass(imageHtml, `photographer__profil__img__selection`);
                DomElement.addImg(imageHtml, `${"../images/" + artistFirst + "/tinified/" + medias.image}`, `${medias.title}`);
                DomElement.addAttribute(imageHtml, "id", `${medias.id}`);
                DomElement.addAttribute(imageHtml, "title", `${medias.title}`);
                
                pictureContainer.appendChild(imageHtml);
                
                // === création de la description ====
                
                const pictureDescription = new DomElement("div");
                DomElement.addClass(pictureDescription, `selection__card__description`);
                selectionCard.appendChild(pictureDescription);
                
                // === insertion des elts de la description de l'image ====
                const cardTitle = new DomElement("span");
                DomElement.addClass(cardTitle, `card__title`);
                DomElement.addText(cardTitle, `${medias.title}`);
                pictureDescription.appendChild(cardTitle);
                
                const cardPrice = new DomElement("span");
                DomElement.addClass(cardPrice, "card__price");
                DomElement.addText(cardPrice, `${medias.price + " €"}`);
                pictureDescription.appendChild(cardPrice);
                
                const cardLike = new DomElement("div");
                DomElement.addClass(cardLike, `card__likes`);
                pictureDescription.appendChild(cardLike)
                
                
                const likesNumber = new DomElement("span");
                DomElement.addClass(likesNumber, `card__likes__number`);
                DomElement.addText(likesNumber, `${medias.likes}`);
                cardLike.appendChild(likesNumber);
                
                
                var like = medias.likes;
                const likeIcon = new DomElement("i");
                DomElement.addClass(likeIcon, `fas`);
                DomElement.addClass(likeIcon, `fa-heart`);
                DomElement.addClass(likeIcon, `card__likes__icon`);
                cardLike.appendChild(likeIcon);

                // ==== fonction d'ajout du like au clic ===== 

                likeIcon.addEventListener("click", function addLike(){
                    like++;
                    DomElement.addText(likesNumber, `${like}`);
                })



                }

                if (medias.photographerId == artistId && medias.video){
                                    
                //=== création de la carte ===
                const selectionCard = new DomElement('li');
                DomElement.addClass(selectionCard, `selection__card`);
                DomElement.addAttribute(selectionCard, "id", `${medias.id}`);
                DomElement.addAttribute(selectionCard, "title", `${medias.id}`);
                selection.appendChild(selectionCard);
                
                //=== création de la div video ===
                const pictureContainer = new DomElement('div');
                const artistFirst = artistName.substring(0, artistName.lastIndexOf(" "));
                DomElement.addClass(pictureContainer, `selection__card__div`);
                DomElement.addClass(pictureContainer, `image`);
                DomElement.addAttribute(pictureContainer, "aria-label", `${medias.title}`);
                selectionCard.appendChild(pictureContainer);

                
                
                // === insertion de la vignette vidéo ===    
                const videoHtml = new DomElement('video');
                const sourceVideo = new DomElement('source');

                DomElement.addAttribute(videoHtml, "controls", ""); 
                DomElement.addText(videoHtml, "Votre navigateur ne permet pas de lire les vidéos.");
                DomElement.addAttribute(videoHtml, "height", "100%"); 
                DomElement.addAttribute(videoHtml, "width", "100%"); 
                const posterUrl = medias.video.replace("mp4", "jpg"); 
                DomElement.addAttribute(videoHtml, "poster", `${"../images/" + artistFirst + "/tinified/" + posterUrl}`); 
                DomElement.addAttribute(videoHtml, "id", `${medias.id}`);
                DomElement.addClass(videoHtml, `photographer__profil__img__selection`);
                DomElement.addAttribute(videoHtml, "title", `${medias.title}`)
                
                DomElement.addAttribute(sourceVideo, "src", `${"../images/" + artistFirst +"/"+ medias.video}`); 
                DomElement.addAttribute(sourceVideo, "type", "video/mp4"); 
                
                videoHtml.appendChild(sourceVideo);
                pictureContainer.appendChild(videoHtml);
                
                // === création de la description ====
                
                const pictureDescription = new DomElement("div");
                DomElement.addClass(pictureDescription, `selection__card__description`);
                selectionCard.appendChild(pictureDescription);
                
                // === insertion des elts de la description de l'image ====
                const cardTitle = new DomElement("span");
                DomElement.addClass(cardTitle, `card__title`);
                DomElement.addText(cardTitle, `${medias.title}`);
                pictureDescription.appendChild(cardTitle);
                
                const cardPrice = new DomElement("span");
                DomElement.addClass(cardPrice, "card__price");
                DomElement.addText(cardPrice, `${medias.price + " €"}`);
                pictureDescription.appendChild(cardPrice);
                
                const cardLike = new DomElement("div");
                DomElement.addClass(cardLike, `card__likes`);
                pictureDescription.appendChild(cardLike)
                
                
                const likesNumber = new DomElement("span");
                DomElement.addClass(likesNumber, `card__likes__number`);
                DomElement.addText(likesNumber, `${medias.likes}`);
                cardLike.appendChild(likesNumber);
                
                
                var like = medias.likes;
                const likeIcon = new DomElement("i");
                
                DomElement.addClass(likeIcon, `fas`);
                DomElement.addClass(likeIcon, `fa-heart`);
                DomElement.addClass(likeIcon, `card__likes__icon`);
                likeIcon.setAttribute("aria-label", "likes");
                cardLike.appendChild(likeIcon);

                const likes = document.querySelectorAll(".card__likes__icon");
                likes.forEach((like)=>{
                    like.setAttribute("aria-label", "likes");
                });
                // ==== fonction d'ajout du like au clic ===== 

                likeIcon.addEventListener("click", ()=>{
                    like++;
                    DomElement.addText(likesNumber, `${like}`);
                })
                }
        });
    // ====== Lightbox Opening/Closing ======        
    Lightbox.lightboxOpen();
}

}
