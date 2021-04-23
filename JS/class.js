// === fonticon ajout d'une classe === 
function addClass(variable, classe) {
        variable.classList.add(classe);
}

// === fonction ajout d'un attribut === 
function addAttribut(variable, attributType, attributValue) {
        variable.setAttribute(attributType, attributValue);
}

// fonction création d'un element ===

function addElement(variable, classe, attributType, attributValue){
        addClass(variable, classe);
        addAttribut(variable, attributType, attributValue);
    }
    
// === fonction ajout texte === 

function addText(variable, text){
        variable.textContent = text;
    }