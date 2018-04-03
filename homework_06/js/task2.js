let validationServer = "https://shrouded-garden-94580.herokuapp.com/";
let outerContainer = document.getElementById("response");


let template = {
    'IP Address': obj.ip,
    'City': obj.city,
    'Region': obj.region,
    'Country': `${obj.country}/${obj.country_name}`,
    'Postal Code': obj.postal,
    'Latitude / Longitude': `${obj.latitude}, ${obj.longitude}`,
    'Time Zone': `${obj.timezone}(${obj.utc_offset})`,
    'Currency': obj.currency,
    'Languages': obj.languages,
    'ASN': obj.asn,
    'Org': obj.org
};

let generateInfo = obj => {
    let table = document.createElement("table");

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            let tr = document.createElement("tr"),
                nameCell = document.createElement("td"),
                valueCell = document.createElement("td");
            
            nameCell.appendChild(i);
            valueCell.appendChild(obj[i]);
            tr.appendChild(nameCell);
            tr.appendChild(valueCell);
        }
    }
    return table;
}

let generateValidation = bla => {
    let btn = document.createElement("button");
    
    btn.textContent = "Validate\n response"
    btn.id = "validate-response"
    return btn;
}

let createMap = (lat, lng) => {
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

outerContainer.appendChild(generateInfo());
outerContainer.appendChild(generateValidation());