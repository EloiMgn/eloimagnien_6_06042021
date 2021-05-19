import {Index} from "./JS/indexClass.js";

if (sessionStorage.getItem('data') === null) {
    fetch('./datas/datas.json')   
    .then(data => data.json())   
    .then(datasObj => {
        sessionStorage.setItem('data', JSON.stringify(datasObj))
            Index.showPhotographers(datasObj);
            // console.log(datasObj);
            Index.tagLinks();
        })
} else {
    const storage = JSON.parse(sessionStorage.getItem('data')) 
    Index.showPhotographers(storage);
    // console.log(storage);
    Index.tagLinks();
}



