let tableContainer = document.getElementById("response"),
    validationResult = document.getElementById("isValid"),
    mapContainer = document.getElementById("map-container"),
    validationButton = document.getElementById("val-btn"),
    submitButton = document.getElementById("track-btn"),
    responseBody,
    parsedData;



const createTemplate = json => {
    const build = {
        "IP Address": json.ip,
        "City": json.city,
        "Region": json.region,
        "Country": `${json.country}/${json.country_name}`,
        "Postal Code": json.postal,
        "Latitude": `${json.latitude}`, 
        "Longitude": `${json.longitude}`,
        "Time Zone": `${json.timezone}`,
        "UTC offset": ` ${json.utc_offset}`,
        "Country calling code": `${json.country_calling_code}`,
        "Currency": json.currency,
        "Languages": json.languages,
        "Asn": json.asn,
        "Org": json.org
    };

    return build;
}

const validateIP = ip => (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip));

const generateTable = obj => {
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
            table.appendChild(row);
        }
    }

    return table;
}

const generateMap = (lat, lng) => {
    let coordinates = new google.maps.LatLng(lat, lng);
    let opt = {
        center: centerLatLng,
        zoom: 6
    };
    let mapBody = new google.maps.Map(document.getElementById("map-container"), opt);
    let marker = new google.maps.Marker({
        position: coordinates,
        map: mapBody
    });
}

const postRequest = requestBody => {
    http.post("https://shrouded-garden-94580.herokuapp.com/", requestBody).then(response => {
        validationResult.textContent = response;
   }).catch(err => {
        console.log(`Ip validation failed: ${err}`);
    })
}

const getRequest = ip => {
        http.get(`https://ipapi.co/${ip}/json/`).then(response => {
        responseBody = response;
        parsedData = JSON.parse(response);
        if (parsedData.reserved) return;
        return parsedData;
    }).catch(err => {
        console.log(`Error found: ${err}`);
    });
}


validationButton.addEventListener("click", () => {
    if (responseBody) {
        postRequest(responseBody);
    }
})

submitButton.addEventListener("click", e => {
    e.preventDefault();
    let inputValue = document.getElementById("ip-adrr").value;
    if (validateIP(inputValue)) {
        let requestResult = getRequest(inputValue);
        tableContainer.appendChild(generateTable(createTemplate(parsedData)));
        mapContainer.appendChild(generateMap(requestResult.latitude, requestResult.longitude));
    } else {
        validationResult.textContent = "Invalid IP"
    }
})

