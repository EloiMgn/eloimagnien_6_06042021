
import {init} from "../JS/pagesInit.js";

        if (sessionStorage.getItem('datas') === null) {
            fetch('../datas/datas.json') // return qql    
                .then(data => data.json()) // return un autre truc    
                .then(obj => {
                    sessionStorage.setItem('datas', JSON.stringify(obj))
                    // const query = {
                    //     'photographer': 'MimiKeel',
                    //     'id': 123
                    // }
                    // sessionStorage.setItem('query') 
                    init(obj)

                })
        } else {
            const storage = JSON.parse(sessionStorage.getItem('datas')) 
            init(storage)
        }