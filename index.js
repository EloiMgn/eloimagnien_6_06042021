var section = document.getElementById('row');

var requestURL = 'datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    showPhotographerRow(photographers);
}

// === fonction ajout d'une classe === 
function addClass(variable, classe) {
    variable.classList.add(classe);
}

// === fonction ajout d'un attribut === 
function addAttribut(variable, attributType, attributValue) {
    variable.setAttribute(attributType, attributValue);
}


// === fonction ajout texte === 

function addText(variable, text){
    variable.textContent = text;
}

// fonction création d'un element ===

function addElement(variable, classe, attributType, attributValue){
    addClass(variable, classe);
    addAttribut(variable, attributType, attributValue);
}

function showPhotographerRow(jsonObj) {
    var photographers = jsonObj['photographers'];

    photographers.forEach(photographers => {
        var card = document.createElement("div");

        //=== création de la carte ===
        addElement(card, "photographer"); 


        // === création du lien ===   
        var cardLink = document.createElement("a");
        addElement(cardLink, "photographer__profil", "href", "pages/photographers.html" + `?name=${photographers.name}&id=${photographers.id}`)


        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        addElement(imageHtml, "photographer__profil__img", "src", `./images/Photographers_profil_img/` + `${photographers.portrait}`);
        addAttribut(imageHtml, "alt", `${photographers.name}` + " profil");

        // === création div photo de profil === 
        var photographerProfil = document.createElement('div');
        addElement(photographerProfil, "photographer__profil__portrait");
        var pictureUrl = "./images/Photographers_profil_img/" + photographers.portrait;
        photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
        photographerProfil.style.margin = "auto";

        // === insertion du Nom de l'artiste ===     
        var photographerName = document.createElement('h2');
        addText(photographerName, `${photographers.name}`);
        addClass(photographerName, "photographer__profil__name");

        // === création div description === 
        var description = document.createElement('div');
        description.classList.add("description");
        addClass(description, "description");

        // === insertion de la ville dans la description ===
        var location = document.createElement("h3");
        addText(location, `${photographers.city}` + ", " + `${photographers.country}`);
        addClass(location, "description__location");

        // === insertion de la citation dans la description === 
        var citation = document.createElement('p');
        addClass(citation, "description__citation");
        addText(citation, `${photographers.tagline}`);

        // === insertion du prix dans la description === 
        var price = document.createElement('p');
        addClass(price, "description__price");
        addText(price, `${photographers.price}` + "€/jour");

        // === création de la div contenant les tags ===
        var tagsList = document.createElement("div");
        addClass(tagsList, "links");

        // === insertion des tags ===
        var tags = photographers.tags;
        tags.forEach(tags => {
            var tag = document.createElement("a");
            addText(tag, "#"+`${tags}`);

            var tagsAttribute = "#"
            tag.setAttribute("href", tagsAttribute);
            addAttribut(tag, "href", `#`);
            addClass(tag, "navigation__tag");
            addClass(description, `${tags}`);

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