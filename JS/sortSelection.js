import { CreateSelection } from './pagesSelection.js';

export class SortSelection {
  static removeSelection () {
    const myNode = document.getElementById('selection');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
  }

  static sort (data) {
    const listbox = document.getElementById('sort_by');
    const medias = data.media;
    const url = new URL(window.location.href);
    const artistId = parseFloat(url.searchParams.get('id'));
    const mediasArray = [];

    // === création sélection de photo par artiste ===
    medias.forEach((media) => {
      if (media.photographerId === artistId) {
        mediasArray.push(media);
      }
    });
    // ==== tri par défaut par popularité =====

    const sortPopularity = (a, b) => b.likes - a.likes;
    const mediasArrayLikes = [...mediasArray].sort(sortPopularity);
    CreateSelection.showSelection(mediasArrayLikes);

    sessionStorage.setItem('mediasArray', JSON.stringify(mediasArrayLikes));

    // === écoute des évènements de la listbox ====
    listbox.addEventListener('input', () => {
      // === tri par popularité =====
      if (listbox.value === 'popularité') {
        this.removeSelection(); // efface la précédente sélection
        CreateSelection.showSelection(mediasArrayLikes); // créé la nouvelle sélection a partir de la liste triée

        // ==== stockage du résultat ====

        sessionStorage.setItem('mediasArray', JSON.stringify(mediasArrayLikes));
      }

      // ==== tri par date ====
      if (listbox.value === 'date') {
        const sortDate = (a, b) => {
          if (a.date < b.date) return 1;
          if (a.date === b.date) return 0;
          return -1;
        };
        const mediasArrayDate = [...mediasArray].sort(sortDate);
        this.removeSelection();
        CreateSelection.showSelection(mediasArrayDate);

        sessionStorage.setItem('mediasArray', JSON.stringify(mediasArrayDate));
      }

      // ==== tri par titre ====

      if (listbox.value === 'titre') {
        const sortTitle = (a, b) => {
          if (a.title < b.title) return -1;
          if (a.title === b.title) return 0;
          return 1;
        };

        const mediasArrayTitle = [...mediasArray].sort(sortTitle);
        this.removeSelection();
        CreateSelection.showSelection(mediasArrayTitle);

        sessionStorage.setItem('mediasArray', JSON.stringify(mediasArrayTitle));
      }
    });
  }
}
