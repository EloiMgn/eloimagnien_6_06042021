import { CreateIndex } from './JS/createIndex.js';

if (sessionStorage.getItem('data') === null) {
  fetch('./datas/datas.json')
    .then((data) => data.json())
    .then((datasObj) => {
      sessionStorage.setItem('data', JSON.stringify(datasObj));
      CreateIndex.showPhotographers(datasObj);
      // console.log(datasObj);
      CreateIndex.tagLinks();
    });
} else {
  const storage = JSON.parse(sessionStorage.getItem('data'));
  CreateIndex.showPhotographers(storage);
  // console.log(storage);
  CreateIndex.tagLinks();
}
