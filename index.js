
var section = document.getElementById('row1');
var requestURL = 'utils/datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    showPhotographer(photographers);
}

function showPhotographer(jsonObj) {
    var photographers = jsonObj['photographers'];
    
    for (var i = 0; i < photographers.length; i++) {

        var card = document.createElement('div');
        card.classList.add("photographer" );
        card.classList.add(photographers[i].pseudo);

        var cardLink = document.createElement("a");
        cardLink.classList.add("photographer__profil");
        

        var myPara2 = document.createElement('p');
        var imageHtml = document.createElement('img');
        var photographerName = document.createElement('h2');
        var photographerProfil = document.createElement ('div');
        var description = document.createElement('div');
        var location = document.createElement("h3");


        var attributeImg = "utils/images/Photographers_profil_img/" + photographers[i].portrait;
        var attributeLink = "photographers/" + photographers[i].pseudo+ ".html";

        
        
        photographerName.textContent = photographers[i].name;
        location.textContent = photographers[i].city + ", " + photographers[i].country;
        myPara2.textContent = photographers[i].tags;
        

        photographerProfil.classList.add("photographer__profil--" + photographers[i].pseudo);
        imageHtml.classList.add ("photographer__profil__img");
        photographerName.classList.add("photographer__profil__name");
        description.classList.add("description");
        location.classList.add("description__location");

        imageHtml.setAttribute("src", attributeImg );
        cardLink.setAttribute("href", attributeLink );
        
        
        card.appendChild(cardLink);
        card.appendChild(description);
        cardLink.appendChild(photographerProfil);
        cardLink.appendChild(imageHtml);
        cardLink.appendChild(photographerName);
        description.appendChild(location);
    
        
        section.appendChild(card);
    }
}
