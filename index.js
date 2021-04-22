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


function showPhotographerRow(jsonObj) {
    var photographers = jsonObj['photographers'];

    photographers.forEach (photographers => {

        //=== création de la carte ===
        var card = document.createElement("div");;
        card.classList.add("photographer");
        

        // === création du lien ===   
        var cardLink = document.createElement("a");
        cardLink.classList.add("photographer__profil");
        var attributeLink = "pages/photographers.html" + `?name=${photographers.name}&id=${photographers.id}`;
        cardLink.setAttribute("href", attributeLink);

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "./images/Photographers_profil_img/" + photographers.portrait;
        var altImage = photographers.name + " profil";
        imageHtml.classList.add("photographer__profil__img");
        imageHtml.setAttribute("src", attributeImg);
        imageHtml.setAttribute("alt", altImage);

        // === création div photo de profil === 
        var photographerProfil = document.createElement('div');
    
        photographerProfil.classList.add("photographer__profil__portrait");
        var pictureUrl = "./images/Photographers_profil_img/" + photographers.portrait;
        photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
        photographerProfil.style.margin = "auto";

        // === insertion du Nom de l'artiste ===     
        var photographerName = document.createElement('h2');
        photographerName.textContent = photographers.name;
        photographerName.classList.add("photographer__profil__name");

        // === création div description === 
        var description = document.createElement('div');
        description.classList.add("description");

        // === insertion de la ville dans la description ===
        var location = document.createElement("h3");
        location.textContent = photographers.city + ", " + photographers.country;
        location.classList.add("description__location");

        // === insertion de la citation dans la description === 
        var citation = document.createElement('p');
        citation.classList.add("description__citation")
        citation.textContent = photographers.tagline;

        // === insertion du prix dans la description === 
        var price = document.createElement('p');
        price.classList.add("description__price")
        price.textContent = photographers.price + "€/jour";

        // === création de la div contenant les tags ===
        var tagsList = document.createElement("div");
        tagsList.classList.add("links");

        // === insertion des tags ===
        var tags = photographers.tags;
        tags.forEach (tags => {
            var tag = document.createElement("a");
            tag.textContent = "#" + tags;

            var tagsAttribute = "#"
            tag.setAttribute("href", tagsAttribute);
            tag.classList.add("navigation__tag");
            tag.classList.add(tags);
            
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


    }
    );
}

