const createStats = obj => {
    let table = document.createElement("table");
    for (let property in obj) {
        let row = document.createElement("tr"),
            name = document.createElement("td"),
            value = document.createElement("td"),
            strProp = String(property).replace("_", " ");
        
        name.textContent = `${strProp}`;
        value.textContent = obj.property;
        row.appendChild(name);
        row.appendChild(value);
        table.appendChild(row);
    }

    return table;
}

const createModel = obj => {
    let model = document.createElement("div"),
        header1 = document.createElement("h1"),
        container = document.createElement("div"),
        previewText = document.createElement("p"),
        characteristicsText = document.createElement("p"),
        level = document.createElement("p"),
        link = document.createElement("a"),
        preview = document.createElement("div"),
        characteristics = document.createElement("div"),
        image = document.createElement("img"),
        icon = document.createElement("img");

    location.hash = `#${obj.model}`;
    link.href = "/";
    link.textContent = "Back to list view";
    container.className = "flex-container";
    icon.src = obj.country_image;
    icon.alt = `${obj.country}`;
    image.src = obj.preview;
    header1.textContent = obj.model;
    level.textContent = `(level ${obj.level})`;
    name.insertAdjacentElement('beforebegin', icon);
    name.insertAdjacentElement('afterend', level);
    previewText.textContent = "Preview";
    characteristicsText.textContent = "Characteristic";
    preview.appendChild(previewText);
    preview.appendChild(image);
    characteristics.appendChild(characteristicsText);
    characteristics.appendChild(createStats(obj.details));
    container.appendChild(preview);
    container.appendChild(characteristics);
    model.appendChild(header1);
    model.appendChild(container);
    model.appendChild(link);

    return model;
}

const buildList = data => {
    const tanksList = data.map(el => {
        createModel(el);
    });
    return tanksList;
}

const createMenu = data => {
    let menu = document.createElement("div");
    menu.className = "tank_list";

    data.forEach(el => {
        let section = document.createElement("div"),
            image = document.createElement("img"),
            icon = document.createElement("img"),
            header2 = document.createElement("h3"),
            link = document.createElement("a"),
            span = document.createElement("span");
        
        link.href = `#${el.model}`;
        icon.src = el.country_image;
        icon.title = `${el.country}`;
        image.src = el.preview;
        span.textContent = ` ${el.level} `;
        header2.textContent = `${el.model}`;
        header2.insertAdjacentElement('afterbegin', span);
        header2.insertAdjacentElement('afterbegin', icon);
        section.className = "tank_item";
        section.appendChild(image);
        section.appendChild(header2);
        link.appendChild(section);

        menu.appendChild(link);
    });
    
    return menu;
}

const createMainPage = data => {
    let mainPage = document.createElement("div"),
        header1 = document.createElement("h1");

    mainPage.className = "main_page";
    header1.textContent = " Most popular tanks";
    mainPage.appendChild(header1);
    mainPage.appendChild(createMenu(data));

    return mainPage;
}

document.getElementById("root").appendChild(createMainPage(tanks));

let linkArray = document.getElementsByTagName("a");
linkArray.forEach(el => {
    el.addEventListener("hashchange", function() {
        location.hash = 
    })
})