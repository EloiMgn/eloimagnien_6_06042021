import {DomElement} from "./domElement.js";

export class ResizeImagesSelection{

    static getImageSize(){
        const medias = document.querySelectorAll(".photographer__profil__img__selection");
       
        medias.forEach(media=>{
            // console.log(media.clientWidth);
            // console.log(media.clientHeight);
        })
 
        // console.log(medias);
    }
}