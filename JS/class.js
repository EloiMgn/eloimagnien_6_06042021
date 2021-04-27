export class ElementsFactory {

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
                        ElementsFactory.addElement(card, "photographer");


                        // === création du lien ===   
                        var cardLink = document.createElement("a");
                        ElementsFactory.addElement(cardLink, "photographer__profil", "href", "pages/photographers.html" + `?name=${photographers.name}&id=${photographers.id}`)


                        // === insertion de l'image cachée ===    
                        var imageHtml = document.createElement('img');
                        ElementsFactory.addElement(imageHtml, "photographer__profil__img", "src", `./images/Photographers_profil_img/` + `${photographers.portrait}`);
                        ElementsFactory.addAttribut(imageHtml, "alt", `${photographers.name}` + " profil");

                        // === création div photo de profil === 
                        var photographerProfil = document.createElement('div');
                        ElementsFactory.addElement(photographerProfil, "photographer__profil__portrait");
                        var pictureUrl = "./images/Photographers_profil_img/" + photographers.portrait;
                        photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
                        photographerProfil.style.margin = "auto";

                        // === insertion du Nom de l'artiste ===     
                        var photographerName = document.createElement('h2');
                        ElementsFactory.addText(photographerName, `${photographers.name}`);
                        ElementsFactory.addClass(photographerName, "photographer__profil__name");

                        // === création div description === 
                        var description = document.createElement('div');
                        ElementsFactory.addClass(description, "description");

                        // === insertion de la ville dans la description ===
                        var location = document.createElement("h3");
                        ElementsFactory.addText(location, `${photographers.city}` + ", " + `${photographers.country}`);
                        ElementsFactory.addClass(location, "description__location");

                        // === insertion de la citation dans la description === 
                        var citation = document.createElement('p');
                        ElementsFactory.addClass(citation, "description__citation");
                        ElementsFactory.addText(citation, `${photographers.tagline}`);

                        // === insertion du prix dans la description === 
                        var price = document.createElement('p');
                        ElementsFactory.addClass(price, "description__price");
                        ElementsFactory.addText(price, `${photographers.price}` + "€/jour");

                        // === création de la div contenant les tags ===
                        var tagsList = document.createElement("div");
                        ElementsFactory.addClass(tagsList, "links");

                        // === insertion des tags ===
                        var tags = photographers.tags;
                        tags.forEach(tags => {
                                var tag = document.createElement("a");
                                ElementsFactory.addText(tag, "#" + `${tags}`);

                                var tagsAttribute = "#"
                                tag.setAttribute("href", tagsAttribute);
                                ElementsFactory.addAttribut(tag, "href", `#`);
                                ElementsFactory.addClass(tag, "navigation__tag");
                                ElementsFactory.addClass(description, `${tags}`);

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
                var banner = document.getElementById("banner");

                var urlCourante = window.location.href;
                var url = new URL(urlCourante);
                var artistName = url.searchParams.get("name");

                photographers.forEach(photographers => {


                        if (artistName === photographers.name) {



                                //=== création de la carte ===
                                var bannerProfil = document.createElement('div');
                                ElementsFactory.addClass(bannerProfil, "banner__profil");

                                // === insertion du Nom de l'artiste ===     
                                var photographerName = document.createElement('h1');
                                ElementsFactory.addText(photographerName, `${photographers.name}`);
                                ElementsFactory.addClass(photographerName, "banner__profil__name");

                                // === création de la description ===     
                                var description = document.createElement('div');
                                ElementsFactory.addClass(description, "banner__description");

                                // === insertion des éléments de la description ===     
                                var location = document.createElement('h2');
                                ElementsFactory.addClass(location, "banner__description__location");
                                ElementsFactory.addText(location, `${photographers.city + ", " + photographers.country}`);

                                var citation = document.createElement('p');
                                ElementsFactory.addClass(citation, "banner__description__citation");
                                ElementsFactory.addText(citation, `${photographers.tagline}`);

                                // === création de la div des liens ===     
                                var tagsList = document.createElement("div");
                                ElementsFactory.addClass(tagsList, "banner__links");

                                // === insertion des tags ===
                                var tags = photographers.tags;
                                tags.forEach(tags => {
                                        var tag = document.createElement("a");
                                        ElementsFactory.addText(tag, `${"#" + tags}`);
                                        ElementsFactory.addAttribut(tag, "href", "#")
                                        ElementsFactory.addClass(tag, "navigation__tag");
                                        ElementsFactory.addClass(tag, `${tags}`);

                                        tagsList.appendChild(tag);
                                });

                                // === création du bouton ===     
                                var button = document.createElement('button');
                                ElementsFactory.addClass(button, `contact`);
                                ElementsFactory.addClass(button, `modal-btn`);
                                ElementsFactory.addAttribut(button, "id", "modal-btn");

                                var contactMe = document.createElement("span");
                                ElementsFactory.addClass(contactMe, `contact__text`);
                                ElementsFactory.addText(contactMe, `Contactez moi`);

                                // === création div photo de profil === 
                                var photographerProfil = document.createElement('div');
                                var Lscreen = screen.width;
                                console.log(Lscreen);
                                if (768 > Lscreen) {
                                        photographerProfil.setAttribute("id", "photographer__profil__responsive");
                                } else {
                                        photographerProfil.classList.remove("photographer__profil__responsive");
                                }
                                var pictureUrl = "../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg";
                                ElementsFactory.addClass(photographerProfil, `photographer__profil__portrait`);
                                photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
                                photographerProfil.style.marginLeft = "auto";
                                photographerProfil.style.marginRight = "50px";


                                // === insertion de l'image cachée ===    
                                var imageHtml = document.createElement('img');
                                ElementsFactory.addClass(imageHtml, `photographer__profil__img`);
                                ElementsFactory.addAttribut(imageHtml, "src", `${"../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg"}`);
                                ElementsFactory.addAttribut(imageHtml, "alt", `${artistName + "profil"}`);


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
                var selection = document.getElementById("selection");

                var urlCourante = window.location.href;
                var url = new URL(urlCourante);
                var artistName = url.searchParams.get("name");
                var artistId = url.searchParams.get("id");

                medias.forEach(medias => {

                        if (medias.photographerId == artistId && medias.image) {

                                //=== création de la carte ===
                                var selectionCard = document.createElement('div');
                                ElementsFactory.addClass(selectionCard, `selection__card`);

                                //=== création de la div photo ===
                                var pictureDiv = document.createElement('a');
                                ElementsFactory.addClass(pictureDiv, `selection__card__div`);
                                ElementsFactory.addClass(pictureDiv, `image`);
                                var artistFirst = artistName.substring(0, artistName.lastIndexOf(" "));
                                var pictureUrl = "../images/" + artistFirst + "/tinified/" + medias.image;
                                pictureDiv.style.backgroundImage = `url("${pictureUrl}")`;
                                pictureDiv.style.backgroundSize = "cover";
                                ElementsFactory.addAttribut(pictureDiv, "href", `#`);


                                // === insertion de l'image cachée ===    
                                var imageHtml = document.createElement('img');
                                ElementsFactory.addClass(imageHtml, `photographer__profil__img`);
                                ElementsFactory.addAttribut(imageHtml, "src", `${"../images/" + artistFirst + "/tinified/" + medias.image}`);
                                ElementsFactory.addAttribut(imageHtml, "alt", `${artistName + " profil"}`);



                                // === création de la description ====

                                var pictureDescription = document.createElement("div");
                                ElementsFactory.addClass(pictureDescription, `selection__card__description`);

                                // === insertion des elts de la description de l'image ====
                                var cardTitle = document.createElement("span");
                                ElementsFactory.addClass(cardTitle, `card__title`);
                                ElementsFactory.addText(cardTitle, `${medias.image.substring(medias.image.lastIndexOf( "_" )+1).replace(".jpg", "")}`);

                                var cardPrice = document.createElement("span");
                                cardPrice.classList.add("card__price");
                                ElementsFactory.addClass(cardPrice, `card__price`);
                                ElementsFactory.addText(cardPrice, `${medias.price + " €"}`);

                                var cardLike = document.createElement("div");
                                ElementsFactory.addClass(cardLike, `card__likes`);


                                var likesNumber = document.createElement("span");
                                ElementsFactory.addClass(likesNumber, `card__likes__number`);
                                ElementsFactory.addText(likesNumber, `${medias.likes}`);


                                var likeIcon = document.createElement("i");
                                ElementsFactory.addClass(likeIcon, `fas`);
                                ElementsFactory.addClass(likeIcon, `fa-heart`);
                                ElementsFactory.addClass(likeIcon, `card__likes__icon`);


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
                var head = document.getElementById("head");

                var urlCourante = window.location.href;
                var url = new URL(urlCourante);
                var artistName = url.searchParams.get("name");
                var artistId = url.searchParams.get("id");

                photographers.forEach(photographers => {

                        if (photographers.id == artistId) {

                                var pageTitle = document.createElement('title');
                                ElementsFactory.addText(pageTitle, `${"Fisheye - " + artistName}`);

                                head.appendChild(pageTitle);
                        }

                });

        }

}