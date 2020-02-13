function create() {
    let tableRow;
    let rowData;
    let clone1;
    let clone2;
    let btnDel;
    tableRow = document.createElement("tr");
    rowData = document.createElement("td");
    btnDel = document.createElement("button");
    btnDel.textContent = 'Delete Me';
    clone1 = rowData.cloneNode();
    clone2 = rowData.cloneNode();
    document.getElementById("table-body").appendChild(tableRow);
    tableRow.appendChild(rowData);
    tableRow.appendChild(clone1);
    tableRow.appendChild(clone2);
    tableRow.appendChild(btnDel);
    rowData.textContent = document.querySelectorAll('form input')[0].value;
    clone1.textContent = document.querySelectorAll('form input')[1].value;
    clone2.textContent = document.querySelectorAll('form input')[2].value;
    btnDel.addEventListener('click',
        () => {
            document.querySelector('#table-body tr button').parentElement.parentElement.removeChild(btnDel.parentElement);
        })
};

document.querySelector('form').lastElementChild.onclick = function(e) {
    e.preventDefault();
};

document.querySelector('form').lastElementChild.addEventListener("click", create);

