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
                    description.classList.add("description");
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
                        CreateCards.addText(tag, "#"+`${tags}`);
            
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