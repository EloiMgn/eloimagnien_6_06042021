function createNewElement(parent, name, elementType, classe, text) {
        var getName = function (name) {
                document.createElement(`${elementType}`);
                getName.classList.add(`${classe}`);
                getName.textContent = `${text}`;

                return getName
        }
}

function createName(varName){
        var varName = function (){
                return
        }
}

function createVarName(varName) {
        var getName = function () {
                return varName;
        }
        return getName;
}



class element {
        constructor(name, classe, text) {
                this.name = name;
                this.classe = classe;
                this.text = text;

        }
}

let newCard = new element(section, card, photographer, text);


var card = document.createElement("div");
card.classList.add(newCard.classe);
section.appendChild(card);


var div = document.createElement("div");
var link = document.createElement("a");
var image = document.createElement("img");
var paragraph = document.createElement("p");
var title1 = document.createElement("h1");
var title2 = document.createElement("h2");
var title3 = document.createElement("h3");

function createCard(classe) {
        div.classList.add(`${classe}`);
}

function createPicture(classe, pictureUrl) {
        div.classList.add(`${classe}`);
        div.style.backgroundImage = `url("${pictureUrl}")`;
}