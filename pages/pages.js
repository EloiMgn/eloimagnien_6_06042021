
import {Init} from "../JS/pagesInit.js";


        if (sessionStorage.getItem('datas') === null) {
            fetch('../datas/datas.json') // return qql    
                .then(data => data.json()) // return un autre truc    
                .then(obj => {
                    sessionStorage.setItem('datas', JSON.stringify(obj))
                    
                Init(obj);

                })
        } else {
            const storage = JSON.parse(sessionStorage.getItem('datas')) 
            Init(storage)
        }