export class HiddenContent {
  static showHiddenContent () {
    const hidden = document.getElementById('hidden');
    window.addEventListener('scroll', () => {
      hidden.style.display = 'flex';
    });
  }

  static hiddenAction () {
    const hidden = document.getElementById('hidden');
    let linkArray = document.querySelectorAll('.photographer__profil');
    linkArray = Array.prototype.slice.call(linkArray);
    hidden.addEventListener('click', () => {
      linkArray[0].focus();
    });
  }
}
