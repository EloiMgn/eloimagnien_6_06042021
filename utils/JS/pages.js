var banner = document.getElementById ("banner");
var requestURL = '../utils/datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    showBanner(photographers);
    var medias = request.response;
    showSelection(medias);
}

var urlCourante = window.location.href;
var url = new URL(urlCourante);
var artistName = url.searchParams.get("name");
var artistId = url.searchParams.get("id");




function showBanner(jsonObj) {
    var photographers = jsonObj['photographers'];
    

    for (var i = 0; i < photographers.length; i++) {
        
        if (artistName === photographers[i].name){
            
        
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
        
        photographerProfil.classList.add("photographer__profil__portrait");
        var pictureUrl = "../utils/images/Photographers_ID_Photos/" + artistName.replace(" ", "") + ".jpg";
        photographerProfil.style.backgroundImage = `url("${pictureUrl}")`;
        photographerProfil.style.marginLeft = "auto";
        photographerProfil.style.marginRight = "50px";
        

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "../utils/images/Photographers_ID_Photos/" + artistName.replace(" ", "") + ".jpg";
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
    }
}

var selection = document.getElementById ("selection");


function showSelection(jsonObj) {
    var medias = jsonObj['media'];

    for (var i = 0; i < medias.length; i++) {

         if (medias[i].photographerId == artistId && medias[i].image){

        //=== création de la carte ===
        var selectionCard = document.createElement('div');
        selectionCard.classList.add("selection__card");

        //=== création de la div photo ===
        var pictureDiv = document.createElement('a');
        pictureDiv.classList.add("selection__card__div");
        artistFirst =  artistName.substring (0, artistName.lastIndexOf( " " ) );
        var pictureUrl = "../utils/images/" + artistFirst + "/tinified/" + medias[i].image;
        pictureDiv.style.backgroundImage = `url("${pictureUrl}")`;
        pictureDiv.style.backgroundSize = "cover";
        pictureDiv.setAttribute("href", "#")

        // === insertion de l'image cachée ===    
        var imageHtml = document.createElement('img');
        var attributeImg = "../utils/images/" + artistFirst + "/tinified/" + medias[i].image;
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
        cardTitle.textContent = medias[i].image.substring(medias[i].image.lastIndexOf( "_" )+1).replace(".jpg", "");
        var cardPrice = document.createElement("span");
        cardPrice.classList.add("card__price");
        cardPrice.textContent = medias[i].price + " €";
        var cardLike = document.createElement("div");
        cardLike.classList.add("card__likes");

        var likesNumber = document.createElement("span");
        likesNumber.classList.add("card__likes__number");
        likesNumber.textContent = medias[i].likes;

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

    }
    
}