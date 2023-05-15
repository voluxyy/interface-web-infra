/**
 * Load data
 */
function loadData() {
    let container = document.getElementById("container-data");
    let contains = document.getElementById("data");
    if (contains !== null) {
        contains.remove();
    }

    let div = document.createElement("div");
    div.id = "data";

    container.appendChild(div);


    let data = readDir();

    let table = document.createElement("table");
    let row = table.insertRow();

    let checkboxCell = row.insertCell(0);


    let nameCell = row.insertCell(1);
    nameCell.innerHTML = "Nom";

    let typeCell = row.insertCell(2);
    typeCell.innerHTML = "Type";


    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow();

        let checkboxCell = row.insertCell(0);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);


        let nameCell = row.insertCell(1);
        nameCell.innerHTML = data[i].name;

        let typeCell = row.insertCell(2);
        typeCell.innerHTML = data[i].type;
    }

    div.appendChild(table);
}

function readDir() {
    let data = [];
    fetch("./Desktop/save")
        .then(resp => resp.json())
        .then(files => {
            for (const file of files) {
                data.push(file);
            }
        })
        .catch(err => console.error(err));
    return data;
}