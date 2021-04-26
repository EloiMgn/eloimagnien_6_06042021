import { Pages, ContactModal } from "../JS/class.js";

var requestURL = '../datas/datas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var photographers = request.response;
    var medias = request.response;
    Pages.showBanner(photographers);
    Pages.showSelection(medias);
    Pages.pageHeader(photographers);
    ContactModal.createModal();
    ContactModal.modalOpen();
    ContactModal.modalClose();
}











