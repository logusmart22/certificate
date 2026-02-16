function populateMonthSelect() {
    var select = document.getElementById("slsMonth");

    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (var i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i + 1); // Month number starts from 1
        option.textContent = months[i];
        option.value = [i + 1]
        select.appendChild(option);

    }
}





// Function to open the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    populateMonthSelect();
}
// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    // Untick the checkbox
    var checkbox = document.getElementById('sls');
    checkbox.checked = false;

}


function slsChange() {
    popupTable()
}

function popupTable() {
    var startDateInput = document.getElementById("start_date");
    var endDateInput = document.getElementById("end_date");
    var date1 = new Date(startDateInput.value);
    var date2 = new Date(endDateInput.value);
    var table = document.getElementById('myTable4');
    var slsMonth = document.getElementById("slsMonth").value;
    slsMonth = Number(slsMonth);
    var tbody = document.createElement('tbody');

    // Clear existing table content
    table.innerHTML = '';

    // Create table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headerCell1 = document.createElement('th');
    headerCell1.textContent = 'MONTH/YEAR';
    headerRow.appendChild(headerCell1);
    var headerCell2 = document.createElement('th');
    headerCell2.textContent = 'NO OF DAYS';
    headerRow.appendChild(headerCell2);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Loop through months and populate table
    var a = 0;
    for (var d = new Date(date1); d <= date2; d.setMonth(d.getMonth() + 1)) {
        var month = d.toLocaleString('default', { month: 'short' });
        var year = d.getFullYear();
        //var formattedDate = month + '-' + year;
        var monthNumber = convertMonth1(month);

        if (slsMonth === monthNumber) {
            var row = table.insertRow(++a);
            var cell1 = row.insertCell(0);
            var monthInput = createMonthInput(month, year); // Create month input with month and year
            cell1.appendChild(monthInput);

            var cell2 = row.insertCell(1);
            // Create radio buttons
            var radio1 = createRadioButton(15, a);
            var radio2 = createRadioButton(30, a);
            var radio3 = createRadioButton(0, a);

            // Append radio buttons to the cell
            cell2.appendChild(radio1);
            cell2.appendChild(document.createTextNode("15"));
            cell2.appendChild(radio2);
            cell2.appendChild(document.createTextNode("30"));
            cell2.appendChild(radio3);
            cell2.appendChild(document.createTextNode("0"));
        }
    }

    // Function to create radio button with specified value and group
    function createRadioButton(value, group) {
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'radioGroup_' + group; // Unique name for each set of radio buttons
        radio.value = value;
        return radio;
    }

}

// Function to create month input with month and year values

// Function to add key-value pairs to an object
const myslsObject = {};
function addObjectKeyValue(object, key, value) {
    object[key] = value;
}

// Create an empty object
let myObject = {};

// Add key-value pairs using the custom function
addObjectKeyValue(myObject, "key1", "value1");
addObjectKeyValue(myObject, "key2", "value2");
addObjectKeyValue(myObject, "key3", "value3");

console.log(myObject);



// Export the function convertMonth
function convertMonth1(mmm) {
    // Your implementation here
    mmm = mmm.toLowerCase();

    var monthMap = {
        'jan': '01',
        'january': '01',
        'feb': '02',
        'february': '02',
        'mar': '03',
        'march': '03',
        'apr': '04',
        'april': '04',
        'may': '05',
        'jun': '06',
        'june': '06',
        'jul': '07',
        'july': '07',
        'aug': '08',
        'august': '08',
        'sep': '09',
        'sept': '09',
        'september': '09',
        'oct': '10',
        'october': '10',
        'nov': '11',
        'november': '11',
        'dec': '12',
        'december': '12'
    };

    if (monthMap.hasOwnProperty(mmm)) {
        return parseInt(monthMap[mmm]);
    } else {
        return null;
    }
}



function createMonthInput(month, year) {
    var input = document.createElement("input");
    input.setAttribute("type", "month");
    input.setAttribute("value", year + '-' + ('0' + (new Date(month + ' 1, ' + year).getMonth() + 1)).slice(-2)); // Format the month value
    return input;
}

function createRadioButton(value, group) {
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'radioGroup_' + group; // Unique name for each set of radio buttons
    radio.value = value;
    return radio;
}
// Example usage:
// April 2024
// Append the input element to the document body or another container element
// Assuming you have the table element with id 'myTable3'
var data = []; // Define data array in the global scope

function slsvalue() {
    var table4 = document.getElementById('myTable4');

    // Loop through each row in the table
    for (var i = 1; i < table4.rows.length; i++) {
        var row = table4.rows[i];

        // Get the input month and year value
        var monthYearValue = row.cells[0].querySelector('input[type="month"]').value;
        var month = parseInt(monthYearValue.substring(5, 7)); // Convert month to integer
        var year = parseInt(monthYearValue.substring(0, 4)); // Convert year to integer
        // Get the radio button value
        var radioButton = 0; // Initialize radioButton to 0
        var radioInputs = row.cells[1].querySelectorAll('input[type="radio"]');
        radioInputs.forEach(function (radio) {
            if (radio.checked) {
                radioButton = parseInt(radio.value); // Convert radio button value to integer
            }
        });

        // Create an array with the month, year, and radio button value
        var rowData = [month, year, radioButton];

        // Push the array into the data array
        data.push(rowData);
    }

    // Now you have an array of arrays containing the month, year, and radio button value
    console.log(data);
}


// download pdf or excel function
function downloadTable() {
    const format = document.getElementById("formatSelect").value;
    const table = document.getElementById("myTable");
  
    if (format === "pdf") {
      // Generate PDF
      const doc = new jsPDF();
      doc.autoTable({ html: '#myTable' });
      doc.save("table.pdf");
    } else if (format === "excel") {
      // Generate Excel
      const wb = XLSX.utils.table_to_book(table, { raw: true });
      XLSX.writeFile(wb, "table.xlsx");
    }
  }