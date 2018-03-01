const createStats = obj => {
    let table = document.createElement("table");
    for (let property in obj) {
        let row = document.createElement("tr"),
            name = document.createElement("td"),
            value = document.createElement("td");
        
        name.textContent = `${property}`;
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

    link.href = "#";
    link.textContent = "Back to list view";
    container.className = "flex-container";
    icon.setAttribute("src", obj.country_image);
    icon.setAttribute("alt", obj.country);
    header1.textContent = obj.model;
    level.textContent = `(level ${obj.level})`;
    name.insertAdjacentElement('beforebegin', icon);
    name.insertAdjacentElement('afterend', level);
    previewText.textContent = "Preview";
    characteristicsText.textContent = "Characteristic";
    image.setAttribute("src", obj.preview);
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
    menu.className = "tank_list"

    data.forEach(el => {
        let section = document.createElement("div"),
            image = document.createElement("img"),
            icon = document.createElement("img"),
            header2 = document.createElement("h3"),
            span = document.createElement("span");

        icon.setAttribute("src", el.country_image);
        span.textContent = `${el.level}`;
        header2.textContent = `${el.model}`;
        header2.insertAdjacentElement('beforebegin', icon);
        header2.insertAdjacentElement('afterbegin', span);
        image.setAttribute("src", el.preview);
        section.className = "tank_item";
        section.appendChild(image);
        section.appendChild(header2);

        menu.appendChild(section);
    });
    
    return menu;
}

const createMainPage = data => {
    let mainPage = document.createElement("div"),
        header1 = document.createElement("h1");

    mainPage.className = "main_page";
    header1.textContent = "Most popular tanks";
    mainPage.appendChild(header1);
    mainPage.appendChild(createMenu(data));

    return mainPage;
}