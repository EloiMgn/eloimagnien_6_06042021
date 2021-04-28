import {DomElement} from "./domElement.js";

export class CreateBanner {

    // ==== Méthode de modification de la bannière de la page en fonction de l'artiste ====

    static showBanner(datas) {

            const photographers = datas['photographers'];
            const banner = document.getElementById("banner");

            const url = new URL(window.location.href);
            const artistName = url.searchParams.get("name");

            photographers.forEach(photographer => {


                    if (artistName === photographer.name) {

                            //=== création de la bannière ===
                            const bannerProfil = new DomElement("div");
                            DomElement.addClass(bannerProfil, "banner__profil");
                            banner.appendChild(bannerProfil);


                            // === insertion du Nom de l'artiste ===     
                            const photographerName = new DomElement("h1");
                            DomElement.addClass(photographerName, "banner__profil__name")
                            DomElement.addText(photographerName, `${photographer.name}`);
                            bannerProfil.appendChild(photographerName);

                            // === création de la description ===     
                            const description = new DomElement("div");
                            DomElement.addClass(description, "banner__description");
                            bannerProfil.appendChild(description);

                            // === insertion des éléments de la description ===     
                            const location = new DomElement("h2");
                            DomElement.addClass(location, "banner__description__location");
                            location.textContent = `${photographer.city + ", " + photographer.country}`;
                            description.appendChild(location);

                            const citation = new DomElement("p");
                            DomElement.addClass(citation, "banner__description__citation");
                            DomElement.addText(citation, `${photographer.tagline}`);
                            description.appendChild(citation);

                            // === création de la div des liens ===     
                            const tagsList = new DomElement("div");
                            DomElement.addClass(tagsList, "banner__links");
                            bannerProfil.appendChild(tagsList);

                            // === insertion des tags ===
                            const tags = photographer.tags;
                            tags.forEach(tags => {
                                    const tag = new DomElement("a");
                                    // tag.textContent = "#";
                                    DomElement.addAttribute(tag, "href", "#");
                                    DomElement.addClass(tag,"navigation__tag");
                                    DomElement.addClass(tag, `${tags}`);
                                    DomElement.addText(tag, "#"+`${tags}`);

                                    tagsList.appendChild(tag);
                            });

                            
                            // === création du bouton ===   
                                   var Lscreen = screen.width;
                                   const button = new DomElement('button');
                                   const body = document.getElementById('main');

                                    if (768 < Lscreen){
                                        DomElement.addClass(button, `contact`);
                                        DomElement.addAttribute(button, "id", `modal-btn`);
                                        banner.appendChild(button);
                                            
                                    } else {
                                        DomElement.addClass(button, `contact`);
                                        DomElement.addAttribute(button, "id", "contact__responsive");
                                        body.appendChild(button);
                                    }
                            

                            const contactMe = new DomElement("span");
                            DomElement.addClass(contactMe, `contact__text`);
                            DomElement.addText(contactMe, `Contactez moi`);
                            button.appendChild(contactMe);

                            // === création div photo de profil === 
                            const photographerProfil = new DomElement('div');
                            DomElement.addClass(photographerProfil, `photographer__profil__portrait`);
                            photographerProfil.style.backgroundImage = `url("${"../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg"}")`;
                            photographerProfil.style.marginLeft = "auto";
                            photographerProfil.style.marginRight = "50px";
                            if (768 > Lscreen) {
                                DomElement.addAttribute(photographerProfil, "id", "photographer__profil__responsive");
                            }


                            // === insertion de l'image cachée ===    
                            const imageHtml = new DomElement('img');
                            DomElement.addClass(imageHtml, `photographer__profil__img`);
                            DomElement.addImg(imageHtml, `${"../images/Photographers_ID_Photos/tinified/" + artistName.replace(" ", "") + ".jpg"}`, `${artistName + "profil"}`);
                            banner.appendChild(photographerProfil);
                            
                    }
            });
    }
    
    // === modification du titre de la page en fonction de l'artiste ==== 
    static pageHeader(data) {

            const photographers = data['photographers'];
            const head = document.getElementById("head");

            const urlCourante = window.location.href;
            const url = new URL(urlCourante);
            const artistName = url.searchParams.get("name");
            const artistId = url.searchParams.get("id");

            photographers.forEach(photographers => {

                    if (photographers.id == artistId) {

                            const pageTitle = new DomElement('title');
                            DomElement.addText(pageTitle, `${"Fisheye - " + artistName}`);

                            head.appendChild(pageTitle);
                    }

            });

    }

}