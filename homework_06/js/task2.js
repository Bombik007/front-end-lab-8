let tableContainer = document.getElementById("response"),
    validationResult = document.getElementById("isValid"),
    mapContainer = document.getElementById("map-container"),
    validationButton = document.getElementById("val-btn"),
    submitButton = document.getElementById("track-btn"),
    loader = document.getElementById("loader"),
    responseBody, parsedData;


const createTemplate = obj => {
    const build = {
        "City": obj.city,
        "Region": obj.region,
        "Country": `${obj.country}/${obj.country_name}`,
        "Postal Code": obj.postal,
        "Latitude": `${obj.latitude}`, 
        "Longitude": `${obj.longitude}`,
        "Time Zone": `${obj.timezone}`,
        "UTC offset": ` ${obj.utc_offset}`,
        "Country calling code": `${obj.country_calling_code}`,
        "Currency": obj.currency,
        "Languages": obj.languages
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

            nameCell.textContent = i;
            valueCell.textContent = obj[i];
            row.appendChild(nameCell);
            row.appendChild(valueCell);
            table.appendChild(row);
        }
    }

    tableContainer.appendChild(table);
}

const postRequest = requestBody => {
    http.post("https://shrouded-garden-94580.herokuapp.com/", requestBody).then(response => {
        validationResult.textContent = response;
        loader.style.display = "none";
   }).catch(err => {
        console.log(`Ip validation failed: ${err}`);
    })
}

const getRequest = ip => {
        http.get(`https://ipapi.co/${ip}/json/`).then(response => {
        responseBody = response;
        parsedData = JSON.parse(response);
        generateTable(createTemplate(parsedData));
        loader.style.display = "none";
        validationButton.style.display = "block";
        if (parsedData.reserved) return;
    }).catch(err => {
        console.log(`Error found: ${err}`);
    });
}

validationButton.addEventListener("click", () => {
    loader.style.display = "block";
    if (responseBody) {
        postRequest(responseBody);
    }
})

submitButton.addEventListener("click", () => {
    loader.style.display = "block";
    let inputValue = document.getElementById("ip-adrr").value;
    if (validateIP(inputValue)) {
        let requestResult = getRequest(inputValue);
        tableContainer.appendChild(generateTable(createTemplate(parsedData)));
        mapContainer.appendChild(generateMap(requestResult.latitude, requestResult.longitude));
    } else {
        validationResult.textContent = "Invalid IP"
    }
})