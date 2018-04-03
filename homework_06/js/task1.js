let http = {
    get: url => {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();

            req.open("GET", url, true);
            req.onreadystatechange = () => {
                if (req.readyState === 4) {
                    if (req.status !== 200) {
                        reject(`${req.status} - error ${req.statusText}`);
                    } else {
                        resolve(req.response);
                    }
                }
            }
            
            req.send();
        });
    },

    post: (url, reqBody) => {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();

            req.open("POST", url, true);
            req.onreadystatechange = () => {
                if (req.readyState === 4) {
                    if (req.status !== 200) {
                        reject(`${req.status} - error ${req.statusText}`);
                    } else {
                        resolve(req.response);
                    }
                }
            }
            req.send(reqBody);
        });
    }
}
