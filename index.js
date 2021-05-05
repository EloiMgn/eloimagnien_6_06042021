import {Index} from "./JS/indexClass.js";

if (sessionStorage.getItem('photo') === null) {
    fetch('./datas/datas.json')   
    .then(data => data.json())   
    .then(datasObj => {
        sessionStorage.setItem('photo', JSON.stringify(datasObj))
            Index.showPhotographers(datasObj);
            // console.log(datasObj);
            Index.tagLinks();
        })
} else {
    const storage = JSON.parse(sessionStorage.getItem('photo')) 
    Index.showPhotographers(storage);
    // console.log(storage);
    Index.tagLinks();
}



