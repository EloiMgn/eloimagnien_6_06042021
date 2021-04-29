import {DomElement} from "./domElement.js";

export class CreateSelection {
    // ==== méthode de modifictaion de la sélection d'images de la page en focntion de l'artiste ====
    static showSelection(data) {

        const medias = data['media'];
        const selection = document.getElementById("selection");
        
        const url = new URL(window.location.href);
        const artistName = url.searchParams.get("name");
        const artistId = url.searchParams.get("id");
        
        medias.forEach(medias => {
            
            if (medias.photographerId == artistId && medias.image) {
                
                //=== création de la carte ===
                const selectionCard = new DomElement('div');
                DomElement.addClass(selectionCard, `selection__card`);
                selection.appendChild(selectionCard);
                
                //=== création de la div photo ===
                const pictureDiv = new DomElement('a');
                const artistFirst = artistName.substring(0, artistName.lastIndexOf(" "));
                const pictureUrl = "../images/" + artistFirst + "/tinified/" + medias.image;
                DomElement.addClass(pictureDiv, `selection__card__div`);
                DomElement.addClass(pictureDiv, `image`);
                pictureDiv.style.backgroundImage = `url("${pictureUrl}")`;
                pictureDiv.style.backgroundSize = "cover";
                DomElement.addLink(pictureDiv, `#`);
                selectionCard.appendChild(pictureDiv);
                
                
                // === insertion de l'image cachée ===    
                const imageHtml = new DomElement('img');
                DomElement.addClass(imageHtml, `photographer__profil__img`);
                DomElement.addImg(imageHtml, `${"../images/" + artistFirst + "/tinified/" + medias.image}`, `${artistName + " profil"}`);
                selectionCard.appendChild(imageHtml);
                
                // === création de la description ====
                
                const pictureDescription = new DomElement("div");
                DomElement.addClass(pictureDescription, `selection__card__description`);
                selectionCard.appendChild(pictureDescription);
                
                // === insertion des elts de la description de l'image ====
                const cardTitle = new DomElement("span");
                DomElement.addClass(cardTitle, `card__title`);
                DomElement.addText(cardTitle, `${medias.image.substring(medias.image.lastIndexOf( "_" )+1).replace(".jpg", "")}`);
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
                    console.log(like);
                    DomElement.addText(likesNumber, `${like}`);
                })
                }

        });

}

}