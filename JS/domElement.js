export class DomElement {
  constructor (element) {
    return document.createElement(element);
  }

  static addAttribute (element, attributeType, attributeName) {
    element.setAttribute(attributeType, attributeName);
  }

  static addClass (element, className) {
    element.classList.add(className);
  }

  static addLink (element, linkUrl, linkText = null) {
    element.setAttribute('href', linkUrl);
    element.textContent = linkText;
  }

  static addImg (element, imgUrl, imgAlt) {
    element.setAttribute('src', imgUrl);
    element.setAttribute('alt', imgAlt);
  }

  static addText (element, text) {
    element.textContent = `${text}`;
  }
}
