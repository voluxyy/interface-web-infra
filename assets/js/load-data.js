/**
 * Load data
 */
function loadData() {
    let container = document.getElementById("container-data");
    let table = createTable();
    container.appendChild(table);
}


function createTable() {
    let table = document.createElement("table");
    table.style.textAlign = "center";
    table.style.borderCollapse = "separate"; // Ajouter des lignes entre les cellules
    table.style.borderSpacing = "1"; // Supprimer l'espacement entre les cellules
    table.style.width = "75%";

    let row = table.insertRow();

    let checkboxCell = row.insertCell(0);
    checkboxCell.className = "table-checkboxCell";

    let nameCell = row.insertCell(1);
    nameCell.innerHTML = "Nom";
    nameCell.className = "table-dataCell";

    let typeCell = row.insertCell(2);
    typeCell.innerHTML = "Type";
    typeCell.className = "table-dataCell";

    let data = [
        { name: "Fichier 1", type: "PDF" },
        { name: "Fichier 2", type: "PNG" },
        { name: "Fichier 3", type: "JPG" }
    ];

    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();
        row.className = "table-row";

        let checkboxCell = row.insertCell(0);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
        checkboxCell.className = "table-checkboxCell";

        let nameCell = row.insertCell(1);
        nameCell.innerHTML = data[i].name;
        nameCell.className = "table-dataCell";

        let typeCell = row.insertCell(2);
        typeCell.innerHTML = data[i].type;
        typeCell.className = "table-dataCell";
    }

    return table;
}

function readDir() {
    let data = [];

    //Chemin d'accès sur server ubuntu : /home/server/Desktop/save
    fetch("./Desktop/save")
        .then(resp => resp.json())
        .then(files => {
            for (const file of files) {
                data.push(file);
            }
        })
        .catch(err => {
            console.error(err);
            data.push({
                "name": "Dossier",
                "type": "Directory"
            });
            data.push({
                "name": "File",
                "type": "File"
            });
            data.push({
                "name": "Text",
                "type": "Txt"
            });
        });
    return data;
}