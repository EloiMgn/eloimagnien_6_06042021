var section1 = document.getElementById('row1');
var section2 = document.getElementById('row2');
var requestURL = 'utils/datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    showPhotographerRow1(photographers);
    showPhotographerRow2(photographers);
}

function showPhotographerRow1(jsonObj) {
    var photographers = jsonObj['photographers'];

    for (var i = 0; i < 3; i++) {

        //=== création de la carte ===
        var card = document.createElement('div');
        card.classList.add("photographer");
        card.classList.add(photographers[i].pseudo);

        // === création du lien ===   
        var cardLink = document.createElement("a");
        cardLink.classList.add("photographer__profil");
        var attributeLink = "photographers/" + photographers[i].pseudo + ".html";
        cardLink.setAttribute("href", attributeLink);

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "utils/images/Photographers_profil_img/" + photographers[i].portrait;
        var altImage = photographers[i].name + " profil";
        imageHtml.classList.add("photographer__profil__img");
        imageHtml.setAttribute("src", attributeImg);
        imageHtml.setAttribute("alt", altImage);

        // === création div photo de profil === 
        var photographerProfil = document.createElement('div');
        photographerProfil.classList.add("photographer__profil--" + photographers[i].pseudo);

        // === insertion du Nom de l'artiste ===     
        var photographerName = document.createElement('h2');
        photographerName.textContent = photographers[i].name;
        photographerName.classList.add("photographer__profil__name");

        // === création div description === 
        var description = document.createElement('div');
        description.classList.add("description");

        // === insertion de la ville dans la description ===
        var location = document.createElement("h3");
        location.textContent = photographers[i].city + ", " + photographers[i].country;
        location.classList.add("description__location");

        // === insertion de la citation dans la description === 
        var citation = document.createElement('p');
        citation.classList.add("description__citation")
        citation.textContent = photographers[i].tagline;

        // === insertion du prix dans la description === 
        var price = document.createElement('p');
        price.classList.add("description__price")
        price.textContent = photographers[i].price + "€/jour";

        // === création de la div contenant les tags ===
        var tagsList = document.createElement("div");
        tagsList.classList.add("links");

        // === insertion des tags ===
        var tags = photographers[i].tags;
        for (var j = 0; j < tags.length; j++) {
            var tag = document.createElement("a");
            tag.textContent = "#" + tags[j];

            var tagsAttribute = "#"
            tag.setAttribute("href", tagsAttribute);
            tag.classList.add("navigation__tag");
            tag.classList.add(tags[j]);
            
            tagsList.appendChild(tag);
          }
        

        section1.appendChild(card);

        card.appendChild(cardLink);
        card.appendChild(description);
        card.appendChild(tagsList);

        cardLink.appendChild(photographerProfil);
        cardLink.appendChild(imageHtml);
        cardLink.appendChild(photographerName);

        description.appendChild(location);
        description.appendChild(citation);
        description.appendChild(price);


    }
}

function showPhotographerRow2(jsonObj) {
    var photographers = jsonObj['photographers'];

    for (var i = 3; i < photographers.length; i++) {

        //=== création de la carte ===
        var card = document.createElement('div');
        card.classList.add("photographer");
        card.classList.add(photographers[i].pseudo);

        // === création du lien ===   
        var cardLink = document.createElement("a");
        cardLink.classList.add("photographer__profil");
        var attributeLink = "photographers/" + photographers[i].pseudo + ".html";
        cardLink.setAttribute("href", attributeLink);

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "utils/images/Photographers_profil_img/" + photographers[i].portrait;
        var altImage = photographers[i].name + " profil";
        imageHtml.classList.add("photographer__profil__img");
        imageHtml.setAttribute("src", attributeImg);
        imageHtml.setAttribute("alt", altImage);

        // === création div photo de profil === 
        var photographerProfil = document.createElement('div');
        photographerProfil.classList.add("photographer__profil--" + photographers[i].pseudo);

        // === insertion du Nom de l'artiste ===     
        var photographerName = document.createElement('h2');
        photographerName.textContent = photographers[i].name;
        photographerName.classList.add("photographer__profil__name");

        // === création div description === 
        var description = document.createElement('div');
        description.classList.add("description");

        // === insertion de la ville dans la description ===
        var location = document.createElement("h3");
        location.textContent = photographers[i].city + ", " + photographers[i].country;
        location.classList.add("description__location");

        // === insertion de la citation dans la description === 
        var citation = document.createElement('p');
        citation.classList.add("description__citation")
        citation.textContent = photographers[i].tagline;

        // === insertion du prix dans la description === 
        var price = document.createElement('p');
        price.classList.add("description__price")
        price.textContent = photographers[i].price + "€/jour";

        // === création de la div contenant les tags ===
        var tagsList = document.createElement("div");
        tagsList.classList.add("links");

        // === insertion des tags ===
        var tags = photographers[i].tags;
        for (var j = 0; j < tags.length; j++) {
            var tag = document.createElement("a");
            tag.textContent = "#" + tags[j];

            var tagsAttribute = "#"
            tag.setAttribute("href", tagsAttribute);
            tag.classList.add("navigation__tag");
            tag.classList.add(tags[j]);
            
            tagsList.appendChild(tag);
          }
        

        section2.appendChild(card);

        card.appendChild(cardLink);
        card.appendChild(description);
        card.appendChild(tagsList);

        cardLink.appendChild(photographerProfil);
        cardLink.appendChild(imageHtml);
        cardLink.appendChild(photographerName);

        description.appendChild(location);
        description.appendChild(citation);
        description.appendChild(price);


    }
}