var banner = document.getElementById ("banner");
var requestURL = '../datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    showBanner(photographers);
    var medias = request.response;
    showSelection(medias);
    pageHeader(photographers);
}

var urlCourante = window.location.href;
var url = new URL(urlCourante);
var artistName = url.searchParams.get("name");
var artistId = url.searchParams.get("id");




function showBanner(jsonObj) {
    var photographers = jsonObj['photographers'];
    

    photographers.forEach (photographers => {
        
        if (artistName === photographers.name){
            
        
        //=== création de la carte ===
        var bannerProfil = document.createElement('div');
        bannerProfil.classList.add("banner__profil");
        
        // === insertion du Nom de l'artiste ===     
        var photographerName = document.createElement('h1');
        photographerName.textContent = photographers.name;
        photographerName.classList.add("banner__profil__name");

        // === création de la description ===     
        var description = document.createElement('div');
        description.classList.add("banner__description");

        // === insertion des éléments de la description ===     
        var location = document.createElement('h2');
        location.classList.add("banner__description__location");
        location.textContent = location.textContent = photographers.city + ", " + photographers.country;

        var citation = document.createElement('p');
        citation.classList.add("banner__description__citation")
        citation.textContent = photographers.tagline;

        // === création de la div des liens ===     
        var tagsList = document.createElement("div");
        tagsList.classList.add("banner__links");

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

        // === création du bouton ===     
        var button = document.createElement('button');
        button.classList.add("contact");

        var contactMe = document.createElement("span");
        contactMe.classList.add("contact__text");
        contactMe.textContent = "Contactez moi";

        // === création div photo de profil === 
        var photographerProfil = document.createElement('div');
        
        photographerProfil.classList.add("photographer__profil__portrait");
        var pictureUrl = "../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg";
        photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
        photographerProfil.style.marginLeft = "auto";
        photographerProfil.style.marginRight = "50px";
        

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg";
        var altImage = artistName + " profil";
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
    });
}

var selection = document.getElementById ("selection");


function showSelection(jsonObj) {
    var medias = jsonObj['media'];

    medias.forEach(medias => {

         if (medias.photographerId == artistId && medias.image){

        //=== création de la carte ===
        var selectionCard = document.createElement('div');
        selectionCard.classList.add("selection__card");

        //=== création de la div photo ===
        var pictureDiv = document.createElement('a');
        pictureDiv.classList.add("selection__card__div");
        artistFirst =  artistName.substring (0, artistName.lastIndexOf( " " ) );
        var pictureUrl = "../images/" + artistFirst + "/tinified/" + medias.image;
        pictureDiv.style.backgroundImage = `url("${pictureUrl}")`;
        pictureDiv.style.backgroundSize = "cover";
        pictureDiv.setAttribute("href", "#")

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "../images/" + artistFirst + "/tinified/" + medias.image;
        var altImage = artistName + " profil";
        imageHtml.classList.add("photographer__profil__img");
        imageHtml.setAttribute("src", attributeImg);
        imageHtml.setAttribute("alt", altImage);
        
        
        // === création de la description ====

        var pictureDescription = document.createElement("div");
        pictureDescription.classList.add("selection__card__description");

        // === insertion des elts de la description ====
        var cardTitle = document.createElement("span");
        cardTitle.classList.add("card__title");
        cardTitle.textContent = medias.image.substring(medias.image.lastIndexOf( "_" )+1).replace(".jpg", "");
        var cardPrice = document.createElement("span");
        cardPrice.classList.add("card__price");
        cardPrice.textContent = medias.price + " €";
        var cardLike = document.createElement("div");
        cardLike.classList.add("card__likes");

        var likesNumber = document.createElement("span");
        likesNumber.classList.add("card__likes__number");
        likesNumber.textContent = medias.likes;

        var likeIcon = document.createElement("i");
        likeIcon.classList.add("fas");
        likeIcon.classList.add("fa-heart");
        likeIcon.classList.add("card__likes__icon"); 

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

var head = document.getElementById ("head");


function pageHeader(jsonObj) {
    var photographers = jsonObj['photographers'];

    photographers.forEach(photographers => {

         if (photographers.id == artistId){

            var pageTitle = document.createElement('title');
            pageTitle.textContent = "Fisheye - " + artistName;
        
            head.appendChild(pageTitle);
         }

    });
    
}