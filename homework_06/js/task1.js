let http = {
    get: url => {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();

            req.open("GET", url, true);
            req.onload = () => resolve(req.responseText);
            req.onerror = () => reject(req.statusText);
            req.send();
        });
    },

    post: (url, reqBody) => {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();

            req.open("POST", url, true);
            req.onload = () => resolve(req.responseText);
            req.onerror = () => reject(req.statusText);
            req.send(reqBody);
        });
    }
}
