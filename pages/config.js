import { Init } from '../JS/pagesInit.js';

if (sessionStorage.getItem('data') === null) {
  fetch('../datas/datas.json') // return qql
    .then((data) => data.json()) // return un autre truc
    .then((obj) => {
      sessionStorage.setItem('data', JSON.stringify(obj));

      Init(obj);
    });
} else {
  const storage = JSON.parse(sessionStorage.getItem('data'));
  Init(storage);
}
