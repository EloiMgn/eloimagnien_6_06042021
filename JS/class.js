export class CreateCards {

        // === méthode ajout d'une classe === 
        static addClass(variable, classe) {
                variable.classList.add(classe);
        }

        // === méthode ajout d'un attribut === 
        static addAttribut(variable, attributType, attributValue) {
                variable.setAttribute(attributType, attributValue);
        }

        // === méthode ajout texte === 

        static addText(variable, text) {
                variable.textContent = text;
        }

        // méthode création d'un element ===

        static addElement(variable, classe, attributType, attributValue) {
                this.addClass(variable, classe);
                this.addAttribut(variable, attributType, attributValue);
        }

}

export class ShowPhotographer {



        static showPhotographerRow(jsonObj) {
                var section = document.getElementById('row');
                var photographers = jsonObj['photographers'];

                photographers.forEach(photographers => {
                        var card = document.createElement("div");

                        //=== création de la carte ===
                        CreateCards.addElement(card, "photographer");


                        // === création du lien ===   
                        var cardLink = document.createElement("a");
                        CreateCards.addElement(cardLink, "photographer__profil", "href", "pages/photographers.html" + `?name=${photographers.name}&id=${photographers.id}`)


                        // === insertion de l'image cachée ===    
                        var imageHtml = document.createElement('img');
                        CreateCards.addElement(imageHtml, "photographer__profil__img", "src", `./images/Photographers_profil_img/` + `${photographers.portrait}`);
                        CreateCards.addAttribut(imageHtml, "alt", `${photographers.name}` + " profil");

                        // === création div photo de profil === 
                        var photographerProfil = document.createElement('div');
                        CreateCards.addElement(photographerProfil, "photographer__profil__portrait");
                        var pictureUrl = "./images/Photographers_profil_img/" + photographers.portrait;
                        photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
                        photographerProfil.style.margin = "auto";

                        // === insertion du Nom de l'artiste ===     
                        var photographerName = document.createElement('h2');
                        CreateCards.addText(photographerName, `${photographers.name}`);
                        CreateCards.addClass(photographerName, "photographer__profil__name");

                        // === création div description === 
                        var description = document.createElement('div');
                        CreateCards.addClass(description, "description");

                        // === insertion de la ville dans la description ===
                        var location = document.createElement("h3");
                        CreateCards.addText(location, `${photographers.city}` + ", " + `${photographers.country}`);
                        CreateCards.addClass(location, "description__location");

                        // === insertion de la citation dans la description === 
                        var citation = document.createElement('p');
                        CreateCards.addClass(citation, "description__citation");
                        CreateCards.addText(citation, `${photographers.tagline}`);

                        // === insertion du prix dans la description === 
                        var price = document.createElement('p');
                        CreateCards.addClass(price, "description__price");
                        CreateCards.addText(price, `${photographers.price}` + "€/jour");

                        // === création de la div contenant les tags ===
                        var tagsList = document.createElement("div");
                        CreateCards.addClass(tagsList, "links");

                        // === insertion des tags ===
                        var tags = photographers.tags;
                        tags.forEach(tags => {
                                var tag = document.createElement("a");
                                CreateCards.addText(tag, "#" + `${tags}`);

                                var tagsAttribute = "#"
                                tag.setAttribute("href", tagsAttribute);
                                CreateCards.addAttribut(tag, "href", `#`);
                                CreateCards.addClass(tag, "navigation__tag");
                                CreateCards.addClass(description, `${tags}`);

                                tagsList.appendChild(tag);
                        });


                        section.appendChild(card);

                        card.appendChild(cardLink);
                        card.appendChild(description);
                        card.appendChild(tagsList);

                        cardLink.appendChild(photographerProfil);
                        cardLink.appendChild(imageHtml);
                        cardLink.appendChild(photographerName);

                        description.appendChild(location);
                        description.appendChild(citation);
                        description.appendChild(price);


                });
        }
}

export class Pages {

        // ==== Méthode de modification de la bannière de la page en fonction de l'artiste ====

        static showBanner(jsonObj) {

                var photographers = jsonObj['photographers'];
                var banner = document.getElementById ("banner");
            
                var urlCourante = window.location.href;
                var url = new URL(urlCourante);
                var artistName = url.searchParams.get("name");

                photographers.forEach (photographers => {

                    
                    if (artistName === photographers.name){
                        
                        

                    //=== création de la carte ===
                    var bannerProfil = document.createElement('div');
                    CreateCards.addClass(bannerProfil, "banner__profil");
                    
                    // === insertion du Nom de l'artiste ===     
                    var photographerName = document.createElement('h1');
                    CreateCards.addText(photographerName, `${photographers.name}`);
                    CreateCards.addClass(photographerName, "banner__profil__name");
            
                    // === création de la description ===     
                    var description = document.createElement('div');
                    CreateCards.addClass(description, "banner__description");
            
                    // === insertion des éléments de la description ===     
                    var location = document.createElement('h2');
                    CreateCards.addClass(location, "banner__description__location");
                    CreateCards.addText(location, `${photographers.city + ", " + photographers.country}`);
            
                    var citation = document.createElement('p');
                    CreateCards.addClass(citation, "banner__description__citation");
                    CreateCards.addText(citation, `${photographers.tagline}`);
            
                    // === création de la div des liens ===     
                    var tagsList = document.createElement("div");
                    CreateCards.addClass(tagsList, "banner__links");
            
                    // === insertion des tags ===
                    var tags = photographers.tags;
                    tags.forEach (tags => {
                        var tag = document.createElement("a");
                        CreateCards.addText(tag, `${"#" + tags}`);
                        CreateCards.addAttribut(tag, "href", "#")
                        CreateCards.addClass(tag, "navigation__tag");
                        CreateCards.addClass(tag, `${tags}`);
                        
                        tagsList.appendChild(tag);
                      });
            
                    // === création du bouton ===     
                    var button = document.createElement('button');
                    CreateCards.addClass(button, `contact`);
                    CreateCards.addClass(button, `modal-btn`);
            
                    var contactMe = document.createElement("span");
                    CreateCards.addClass(contactMe, `contact__text`);
                    CreateCards.addText(contactMe, `Contactez moi`);
            
                    // === création div photo de profil === 
                    var photographerProfil = document.createElement('div');
                    CreateCards.addClass(photographerProfil, `photographer__profil__portrait`);
                    var pictureUrl = "../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg";
                    photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
                    photographerProfil.style.marginLeft = "auto";
                    photographerProfil.style.marginRight = "50px";
                    
            
                    // === insertion de l'image cachée ===    
                    var imageHtml = document.createElement('img');
                    CreateCards.addClass(imageHtml, `photographer__profil__img`);
                    CreateCards.addAttribut(imageHtml, "src", `${"../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg"}`);
                    CreateCards.addAttribut(imageHtml, "alt", `${artistName + "profil"}`);
            
            
                    banner.appendChild(bannerProfil);
                    banner.appendChild(button);
                    banner.appendChild(photographerProfil);
            
                    bannerProfil.appendChild(photographerName);
                    bannerProfil.appendChild(description);
                    bannerProfil.appendChild(tagsList);
            
                    description.appendChild(location);
                    description.appendChild(citation);
            
                    button.appendChild(contactMe);
                }
                });
            }
        // ==== méthode de modifictaion de la sélection d'images de la page en focntion de l'artiste ====
            static showSelection(jsonObj) {
                
                var medias = jsonObj['media'];
                var selection = document.getElementById ("selection");

                var urlCourante = window.location.href;
                var url = new URL(urlCourante);
                var artistName = url.searchParams.get("name");
                var artistId = url.searchParams.get("id");

                medias.forEach(medias => {
            
                     if (medias.photographerId == artistId && medias.image){
            
                    //=== création de la carte ===
                    var selectionCard = document.createElement('div');
                    CreateCards.addClass(selectionCard, `selection__card`);
            
                    //=== création de la div photo ===
                    var pictureDiv = document.createElement('a');
                    CreateCards.addClass(pictureDiv, `selection__card__div`);
                    var artistFirst =  artistName.substring (0, artistName.lastIndexOf( " " ) );
                    var pictureUrl = "../images/" + artistFirst + "/tinified/" + medias.image;
                    pictureDiv.style.backgroundImage = `url("${pictureUrl}")`;
                    pictureDiv.style.backgroundSize = "cover";
                    CreateCards.addAttribut(pictureDiv, "href", `#`);
                    
            
                    // === insertion de l'image cachée ===    
                    var imageHtml = document.createElement('img');
                    CreateCards.addClass(imageHtml, `photographer__profil__img`);
                    CreateCards.addAttribut(imageHtml, "src", `${"../images/" + artistFirst + "/tinified/" + medias.image}`);
                    CreateCards.addAttribut(imageHtml, "alt", `${artistName + " profil"}`);
                    
                    
                    
                    // === création de la description ====
            
                    var pictureDescription = document.createElement("div");
                    CreateCards.addClass(pictureDescription, `selection__card__description`);
            
                    // === insertion des elts de la description de l'image ====
                    var cardTitle = document.createElement("span");
                    CreateCards.addClass(cardTitle, `card__title`);
                    CreateCards.addText(cardTitle, `${medias.image.substring(medias.image.lastIndexOf( "_" )+1).replace(".jpg", "")}`);

                    var cardPrice = document.createElement("span");
                    cardPrice.classList.add("card__price");
                    CreateCards.addClass(cardPrice, `card__price`);
                    CreateCards.addText(cardPrice, `${medias.price + " €"}`);

                    var cardLike = document.createElement("div");
                    CreateCards.addClass(cardLike, `card__likes`);

            
                    var likesNumber = document.createElement("span");
                    CreateCards.addClass(likesNumber, `card__likes__number`);
                    CreateCards.addText(likesNumber, `${medias.likes}`);
                    
            
                    var likeIcon = document.createElement("i");
                    CreateCards.addClass(likeIcon, `fas`);
                    CreateCards.addClass(likeIcon, `fa-heart`);
                    CreateCards.addClass(likeIcon, `card__likes__icon`);

            
                    selection.appendChild(selectionCard);
            
                    selectionCard.appendChild(pictureDiv);
                    selectionCard.appendChild(pictureDescription);
            
                    pictureDescription.appendChild(cardTitle);
                    pictureDescription.appendChild(cardPrice);
                    pictureDescription.appendChild(cardLike)
            
                    cardLike.appendChild(likesNumber);
                    cardLike.appendChild(likeIcon);
            
                    
                     }
            
                });
                
            } 

        // === modification du titre de la page en fonction de l'artiste ==== 
            static pageHeader(jsonObj) {

                var photographers = jsonObj['photographers'];
                var head = document.getElementById ("head");

                var urlCourante = window.location.href;
                var url = new URL(urlCourante);
                var artistName = url.searchParams.get("name");
                var artistId = url.searchParams.get("id");
            
                photographers.forEach(photographers => {
            
                     if (photographers.id == artistId){
            
                        var pageTitle = document.createElement('title');
                        CreateCards.addText(pageTitle, `${"Fisheye - " + artistName}`);
                    
                        head.appendChild(pageTitle);
                     }
            
                });
                
            }

}

export class ContactModal {

        // ==== Méthode d'ouverture de la modale au clic === 
        static openModal () {
                const modalBtn = document.querySelectorAll(".modal-btn");
        }
}
