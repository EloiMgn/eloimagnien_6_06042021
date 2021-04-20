var banner = document.getElementById ("banner");
var requestURL = '../utils/datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    showBanner(photographers);
}

function showBanner(jsonObj) {
    var photographers = jsonObj['photographers'];

    for (var i = 3; i < 4; i++) {
        
        //=== création de la carte ===
        var bannerProfil = document.createElement('div');
        bannerProfil.classList.add("banner__profil");
        
        // === insertion du Nom de l'artiste ===     
        var photographerName = document.createElement('h1');
        photographerName.textContent = photographers[i].name;
        photographerName.classList.add("banner__profil__name");

        // === création de la description ===     
        var description = document.createElement('div');
        description.classList.add("banner__description");

        // === insertion des éléments de la description ===     
        var location = document.createElement('h2');
        location.classList.add("banner__description__location");
        location.textContent = location.textContent = photographers[i].city + ", " + photographers[i].country;

        var citation = document.createElement('p');
        citation.classList.add("banner__description__citation")
        citation.textContent = photographers[i].tagline;

        // === création de la div des liens ===     
        var tagsList = document.createElement("div");
        tagsList.classList.add("banner__links");

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

        // === création du bouton ===     
        var button = document.createElement('button');
        button.classList.add("contact");

        var contactMe = document.createElement("span");
        contactMe.classList.add("contact__text");
        contactMe.textContent = "Contactez moi";

        // === création div photo de profil === 
        var photographerProfil = document.createElement('div');
        photographerProfil.classList.add("photographer__profil--" + photographers[i].pseudo);

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "utils/images/Photographers_profil_img/" + photographers[i].portrait;
        var altImage = photographers[i].name + " profil";
        imageHtml.classList.add("photographer__profil__img");
        imageHtml.setAttribute("src", attributeImg);
        imageHtml.setAttribute("alt", altImage);


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
}