import { CreateIndex } from './JS/createIndex.js';
// import { ResponsiveDesignIndex } from './JS/responsiveDesignIndex.js';

if (sessionStorage.getItem('data') === null) {
  fetch('./datas/datas.json')
    .then((data) => data.json())
    .then((datasObj) => {
      sessionStorage.setItem('data', JSON.stringify(datasObj));
      CreateIndex.showPhotographers(datasObj);
      // ResponsiveDesignIndex.mobileDesign();
      CreateIndex.tagLinks();
    });
} else {
  const storage = JSON.parse(sessionStorage.getItem('data'));
  CreateIndex.showPhotographers(storage);
  // ResponsiveDesignIndex.mobileDesign();
  CreateIndex.tagLinks();
}
