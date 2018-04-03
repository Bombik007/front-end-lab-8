let validationServer = "https://shrouded-garden-94580.herokuapp.com/";
let outerContainer = document.getElementById("response");
let data;
let isValidField = document.getElementById("isValid");

isValidField.className = "text-center"; 


const createTemplate = json => {
    let build = {
        "IP Address": json.ip,
        "City": json.city,
        "Region": json.region,
        "Country": `${json.country}/${json.country_name}`,
        "Postal Code": json.postal,
        "Coordinates": `${json.latitude}, ${json.longitude}`,
        "Time Zone": `${json.timezone} ${json.utc_offset}`,
        "Currency": json.currency,
        "Languages": json.languages,
        "Asn": json.asn,
        "Org": json.org
    };

    return build;
}

const validateIP = ip => (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip));

const generateInfo = obj => {
    let table = document.createElement("table");

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            let row = document.createElement("tr"),
                nameCell = document.createElement("td"),
                valueCell = document.createElement("td");
            
            nameCell.appendChild(i);
            valueCell.appendChild(obj[i]);
            row.appendChild(nameCell);
            row.appendChild(valueCell);
        }
    }

    return table;
}

const postRequest = requestBody => {
    http.post("https://shrouded-garden-94580.herokuapp.com/", requestBody).then(response => {
        isValidField.textContent = response;
   }).catch(err => {
        console.log(`Ip validation failed: ${err}`);
    })
}

const getRequest = ip => {
        http.get(`https://ipapi.co/${ip}/json/`).then(response => {
        data = JSON.parse(response);
        if (json.reserved) return;
        outerContainer.appendChild(generateInfo(data));
    }).catch(err => {
        console.log(`Error found: ${err}`);
    });
}


const createMap = (lat, lng) => {
    let coordinates = new google.maps.LatLng(lat, lng);
    let opt = {
        center: centerLatLng,
        zoom: 6
    };
    let mapBody = new google.maps.Map(document.getElementById("map"), opt);
    let marker = new google.maps.Marker({
        position: coordinates,
        map: mapBody
    });
}
