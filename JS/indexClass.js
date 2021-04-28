import {DomElement} from "./domElement.js";

export class Index {

       static showPhotographers(datas) {

                var section = document.getElementById('photographers__selection');
                var photographers = datas['photographers'];

                photographers.forEach(photographer => {

                        //=== création de la carte ===
                        const card = new DomElement("div");
                        DomElement.addClass(card, "photographer");
                        section.appendChild(card);

                        // === création du lien ===   
                        const cardLink = new DomElement("a");
                        DomElement.addClass(cardLink, "photographer__profil");
                        DomElement.addLink(cardLink, "pages/photographers.html" + `?name=${photographer.name}&id=${photographer.id}`);
                        card.appendChild(cardLink);

                        // === insertion de l'image cachée === 
                        const imageHtml = new DomElement("img");
                        DomElement.addClass(imageHtml, "photographer__profil__img");
                        DomElement.addImg(imageHtml, `./images/Photographers_profil_img/` + `${photographer.portrait}`, `${photographer.name}` + " profil");
                        cardLink.appendChild(imageHtml);

                        // === création div photo de profil === 
                        const photographerProfil = new DomElement("div");
                        DomElement.addClass(photographerProfil, "photographer__profil__portrait");
                        photographerProfil.style.backgroundImage = `url(${"./images/Photographers_profil_img/"+ photographer.portrait})`;
                        photographerProfil.style.margin = "auto";
                        cardLink.appendChild(photographerProfil);

                        // === insertion du Nom de l'artiste ===     
                        const photographerName = new DomElement("h2")
                        DomElement.addClass(photographerName, "photographer__profil__name");
                        DomElement.addText(photographerName, `${photographer.name}`);
                        cardLink.appendChild(photographerName);

                        // === création div description === 
                        const description = new DomElement("div");
                        DomElement.addClass(description, "description");
                        card.appendChild(description);

                        // === insertion de la ville dans la description ===
                        const location = new DomElement("h3");
                        DomElement.addClass(location, "description__location");
                        DomElement.addText(location, `${photographer.city}` + ", " + `${photographer.country}`);
                        description.appendChild(location);

                        // === insertion de la citation dans la description === 
                        const citation = new DomElement("p");
                        DomElement.addClass(citation, "description__citation");
                        DomElement.addText(citation, `${photographer.tagline}`);
                        description.appendChild(citation);

                        // === insertion du prix dans la description === 
                        const price = new DomElement("p");
                        DomElement.addClass(price, "description__price")
                        DomElement.addText(price, `${photographer.price}` + "€/jour");
                        description.appendChild(price);

                        // === création de la div contenant les tags ===
                        const tagsList = new DomElement("div");
                        DomElement.addClass(tagsList, "links");
                        card.appendChild(tagsList);

                        // === insertion des tags ===
                        var tags = photographer.tags;
                        tags.forEach(tags => {
                                const tag = new DomElement("a");
                                DomElement.addClass(tag, "navigation__tag");
                                DomElement.addLink(tag, "#");
                                DomElement.addText(tag, "#" + `${tags}`);
                                tagsList.appendChild(tag);
                        });

                });

        }
}
