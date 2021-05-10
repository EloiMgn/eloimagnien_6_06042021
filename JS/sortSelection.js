
import { CreateSelection} from "./pagesSelection.js";
import{CreateBanner} from "./pagesBanner.js";
import {Init} from "./pagesInit.js";

export class SortSelection {

    static removeSelection() {
        const myNode = document.getElementById("selection");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }

    static sort(data) {
        const listbox = document.getElementById("sort_by");
        const medias = data["media"];
        const url = new URL(window.location.href);
        const artistId = url.searchParams.get("id");
        var mediasArray = [];

        medias.forEach(media => {
            if (media.photographerId == artistId) {
                mediasArray.push(media);
            }
        });

        CreateSelection.showSelection(mediasArray);

        listbox.addEventListener("input", () => {

            
            CreateBanner.removeBanner();

            if (listbox.value === "popularité") {

                const sortPopularity = (a, b) => {
                    return b.likes - a.likes;
                }
                const mediasArrayLikes = [...mediasArray].sort(sortPopularity);
                this.removeSelection();
                CreateSelection.showSelection(mediasArrayLikes);
                CreateBanner.showBanner(data);
                CreateBanner.pageHeader(data);
            }

            if (listbox.value === "date") {

                const sortDate = (a, b) => {
                    if (a.date < b.date) return 1;
                    else if (a.date == b.date) return 0;
                    else return -1;
                }
                const mediasArrayDate = [...mediasArray].sort(sortDate);
                this.removeSelection();
                CreateSelection.showSelection(mediasArrayDate);
                CreateBanner.showBanner(data);
                CreateBanner.pageHeader(data);
            }

            if (listbox.value === "titre") {
                const sortTitle = (a, b) => {
                    if (a.title < b.title) return -1;
                    else if (a.title == b.title) return 0;
                    else return 1;
                }

                const mediasArrayTitle = [...mediasArray].sort(sortTitle);
                this.removeSelection();
                CreateSelection.showSelection(mediasArrayTitle);
                CreateBanner.showBanner(data);
                CreateBanner.pageHeader(data);
            }

        });
    }
}