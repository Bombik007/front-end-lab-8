let rootNode = document.getElementById("root");

const createIcon = className => {
    let icon = document.createElement("i");
    icon.className = className;
    return icon;
};

const createEl = (title, folder) => {
    let element = document.createElement("li"),
        name = document.createElement("p"),
        elementIcon = createIcon("material-icons"),
        clss = (folder) ? "folder" : "file";

    elementIcon.innerHTML = (folder) ? "folder": "insert_drive_file";
    name.className = clss;
    elementIcon.classList.add(clss);
    name.innerHTML = title;
    name.insertAdjacentElement('afterbegin', elementIcon);
    element.appendChild(name);

    return element;
};

const createFileSystem = str => {
    let empty = document.createElement("p");
    empty.innerHTML = "Folder is empty";
    empty.className = "italic";
    let node = document.createElement("ul");
    for (let i = 0; i < str.length; i++) {
        if (str[i].folder) {
            let topFolder = createEl(str[i].title, str[i].folder);
            if (Array.isArray(str[i].children)) {
                topFolder.appendChild(createFileSystem(str[i].children));
            } else {
                topFolder.appendChild(empty);
            }
            node.appendChild(topFolder);
        } else {
            let newFile = createEl(str[i].title, str[i].folder);
            node.appendChild(newFile);
        }
    }
    return node;
};

rootNode.appendChild(createFileSystem(structure));

let folderArray = document.querySelectorAll("p.folder");
folderArray.forEach(el => {
    el.addEventListener("click", function() {
        if (!el.classList.contains("open")) {
            el.classList.add("open");
            el.children[0].innerHTML = "folder_open";
        } else {
            el.classList.remove("open");
            el.children[0].innerHTML = "folder";
        }
    });
});