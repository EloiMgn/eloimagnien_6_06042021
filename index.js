var requestURL = 'datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    ShowPhotographer.showPhotographerRow(photographers);
}

import { ShowPhotographer } from "./JS/class.js";


