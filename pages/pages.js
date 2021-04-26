import { Pages } from "../JS/class.js";

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
}



const modalBtn = document.querySelectorAll(".modal-btn");

modalBtn.forEach((btn) => btn.addEventListener("click", function () {
    launchModal();
  }));

  function launchModal() {
    modalbg.style.display = "block";
  }










