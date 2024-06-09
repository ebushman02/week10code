// // Get a reference to the table
// var table = document.getElementsByClassName("table");

// function addRow() {
//     let parent = document.createElement("tr");

//     // Create and append cells
//     for (let i = 0; i < 5; i++) {
//         let cell = document.createElement("td");
//         parent.appendChild(cell);
//     }

//     // Append the row to the table
//     document.getElementById("myTable").appendChild(parent);
// }

// // Attach the function to the button click
// let addRowBtn = document.getElementById('addRowButton');
// addRowBtn.addEventListener("click", addRow);

let inputRow = document.getElementById('inputRow')
function saveRow() {
    const tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    const lastRow = tableBody.lastElementChild;

    // Extract input values from the last row
    const name = lastRow.querySelector('#Input1').value;
    const address = lastRow.querySelector('#Input2').value;
    const phone = lastRow.querySelector('#Input3').value;
    const email = lastRow.querySelector('#Input4').value;

    // Create a new row with the extracted values
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th>${tableBody.children.length}</th>
        <td>${name}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${email}</td>
    `;

    tableBody.insertBefore(newRow, lastRow);
     // Clear input values
     lastRow.querySelector('#Input1').value = '';
     lastRow.querySelector('#Input2').value = '';
     lastRow.querySelector('#Input3').value = '';
     lastRow.querySelector('#Input4').value = '';



}
    
