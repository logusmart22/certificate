var emisData = [];

function readExcel() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        console.log("No file selected.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming first sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert sheet data to JSON
        emisData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log("Extracted Data:", emisData);
        runn();
    };

    reader.readAsArrayBuffer(file);
}

function runn1() {
    for (let i = 1; i < emisData.length; i++) {
        createCertificates(i)
        conduct(i);
        attendance(i);
        handleSelectChange();//hidel conduct or certificate
    }
    hideLink()//hide div in html


}


function runn() {
    hideLink()//hide div in html
    var mySelect = document.querySelector('select[name="category"]');
    var myValue = mySelect.value;
    for (let i = 1; i < emisData.length; i++) {
        if (myValue === '1') {
            createCertificates2(i)
            conduct(i, 2);
            i = i + 1;
            conduct(i, 1);
            //handleSelectChange();//hidel conduct or certificate
        } else if (myValue === '2') {
            createCertificates3(i)
            attendance(i, 2);
            i = i + 1;
            attendance(i, 1);
            //handleSelectChange();//hidel conduct or certificate
        } else if (myValue === '3') {
            createCertificates(i)
            conduct(i, 1);
            attendance(i, 1);
            //handleSelectChange();//hidel conduct or certificate
        } else if (myValue === '4') {
            camp();
        }

    }



}

function conduct(i, x) {
    //var i = 1;

    function setLastElementText(id, text) {
        var elements = document.querySelectorAll("#" + id);
        if (elements.length > 0) {
            elements[elements.length - x].textContent = text;
        }
    }

    //setLastElementText("name", emisData[i][1]);
    setLastElementText("schoolName", emisData[i][6]);
    setLastElementText("name", emisData[i][1]);
    setLastElementText("emis1", emisData[i][0]);
    setLastElementText("standard", emisData[i][3]);
    setLastElementText("year", emisData[i][7]);
    setLastElementText("date", excelSerialToDate(emisData[i][8]));
    setLastElementText("place", emisData[i][9]);


}


function attendance(i, x) {

    //let i=1;
    function setLastElementText(id, text) {
        var elements = document.querySelectorAll("#" + id);
        if (elements.length > 0) {
            elements[elements.length - x].textContent = text;
        }
    }

    var totalTa = emisData[i][10];
    var presenTa = emisData[i][11];
    let presenTaa = Math.round((presenTa / totalTa) * 100) + "%";
    setLastElementText("schoolName1", emisData[i][6]);
    setLastElementText("name1", emisData[i][1]);
    setLastElementText("emis", emisData[i][0]);
    setLastElementText("father", emisData[i][5]);
    setLastElementText("class1", emisData[i][3]);
    setLastElementText("admission", emisData[i][25]);
    setLastElementText("year1", emisData[i][7]);
    setLastElementText("totalDays", totalTa);
    setLastElementText("present", presenTa);
    setLastElementText("percentage", presenTaa);
    setLastElementText("date1", excelSerialToDate(emisData[i][8]));
    setLastElementText("place1", emisData[i][9]);
}


//hide elementuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu

function handleSelectChange() {
    const categorySelect = document.querySelector('select[name="category"]');
    const selectedValue = categorySelect.value;

    // Get all matching elements
    const allSchoolNames = document.querySelectorAll('#schoolName');
    const allCertificateNames = document.querySelectorAll('#certificateName');
    const allCertificates = document.querySelectorAll('.certificate');

    const allSchoolNames1 = document.querySelectorAll('#schoolName1');
    const allCertificateNames1 = document.querySelectorAll('#certificateName1');
    const allCertificates2 = document.querySelectorAll('.certificate2');

    // Select the last elements
    const lastSchoolName = allSchoolNames[allSchoolNames.length - 1] || null;
    const lastCertificateName = allCertificateNames[allCertificateNames.length - 1] || null;
    const lastCertificate = allCertificates[allCertificates.length - 1] || null;

    const lastSchoolName1 = allSchoolNames1[allSchoolNames1.length - 1] || null;
    const lastCertificateName1 = allCertificateNames1[allCertificateNames1.length - 1] || null;
    const lastCertificate2 = allCertificates2[allCertificates2.length - 1] || null;

    // Function to hide an element safely
    function hideElement(element) {
        if (element) element.style.display = 'none';
    }

    // Function to show an element safely
    function showElement(element) {
        if (element) element.style.display = 'block';
    }

    // Hide last elements based on selection
    if (selectedValue === '1') {
        hideElement(lastSchoolName);
        hideElement(lastCertificateName);
        hideElement(lastCertificate);

        showElement(lastSchoolName1);
        showElement(lastCertificateName1);
        showElement(lastCertificate2);

    } else if (selectedValue === '2') {
        hideElement(lastSchoolName1);
        hideElement(lastCertificateName1);
        hideElement(lastCertificate2);

        showElement(lastSchoolName);
        showElement(lastCertificateName);
        showElement(lastCertificate);

    } else {
        // If "Both" (or any other value), show everything
        showElement(lastSchoolName);
        showElement(lastCertificateName);
        showElement(lastCertificate);

        showElement(lastSchoolName1);
        showElement(lastCertificateName1);
        showElement(lastCertificate2);
    }
}





//lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll




function updateFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = "";
    }
}


function excelSerialToDate(serial) {
    if (isNaN(serial)) {
        return serial; // Return the input as-is if it's not a number
    }

    let excelStartDate = new Date(1900, 0, 1); // January 1, 1900
    let convertedDate = new Date(excelStartDate.getTime() + (serial - 1) * 86400000);

    // Excel incorrectly considers 1900 as a leap year, so dates >= 60 are off by one day
    if (serial >= 60) {
        convertedDate.setDate(convertedDate.getDate() - 1);
    }

    let day = String(convertedDate.getDate()).padStart(2, '0');
    let month = String(convertedDate.getMonth() + 1).padStart(2, '0');
    let year = convertedDate.getFullYear();

    return `${day}/${month}/${year}`;
}

// Example Usage
console.log(excelSerialToDate(45728)); // Output: "18/04/2025"
console.log(excelSerialToDate("invalid")); // Output: "invalid"
console.log(excelSerialToDate("45728A")); // Output: "45728A"
console.log(excelSerialToDate(null)); // Output: null
console.log(excelSerialToDate(undefined)); // Output: undefined



function hideLink() {
    var link = document.getElementById("hideIng"); // Get the element
    if (link) {
        link.style.display = "none"; // Hide the element
    }
}




function createCertificates() {
    const container = document.createElement("div");
    container.className = "a4-page";
    container.innerHTML = `
        <h1 id="schoolName">GOVERNMENT HIGHER SECONDARY SCHOOL</h1>
        <h1 id="certificateName">CONDUCT CERTIFICATE</h1>
        <div class="certificate">
            <div class="certificate1">
                <div class="a1"> This is to certify that <span id="name"></span></div>
                <div class="a2">with the EMIS No. <span id="emis1"></span>was a pupil in   </div>
                <div class="a3">this school in<span id="standard"></span>  standard during the academic </div>
                <div class="a4">year <span id="year"></span>.  His/Her character and conduct  </div>
                <div class="a5">were ___________________________</div>
            </div>
            <div class="signature1">
                <div class="b8">Date : <span id="date"></span></div>
                <div class="b9">Place :<span id="place"></span></div>
            </div>
            <div class="signature">
                <div class="b10">Headmaster</div>
            </div>
        </div>

        <h1 id="schoolName1">GOVERNMENT HIGHER SECONDARY SCHOOL</h1>
        <h1 id="certificateName1">ATTENDANCE CERTIFICATE</h1>

        <div class="certificate2">
            <form class="form-container">
                <div class="table1">
                    <table cellspacing="0" cellpadding="5">
                        <tr>
                            <th>Student Name</th>
                            <td>:</td>
                            <td id="name1">SANJAY M</td>
                        </tr>
                        <tr>
                        <th>EMIS NO</th>
                        <td>:</td>
                        <td id="emis"></td>
                    </tr>
                        <tr>
                            <th>Father Name</th>
                            <td>:</td>
                            <td id="father">MUTHURASU</td>
                        </tr>
                        <tr>
                            <th>Class</th>
                            <td>:</td>
                            <td id="class1">12</td>
                        </tr>
                        <tr>
                            <th>Admission No.</th>
                            <td>:</td>
                            <td id="admission">2807</td>
                        </tr>
                    </table>
                </div>
                <br>
                <div class="table2">
                    <table border="1" cellspacing="0" cellpadding="5">
                        <tr>
                            <th>Year</th>
                            <th>Total No. of Working Days</th>
                            <th>No. of Days Present</th>
                            <th>Percentage</th>
                        </tr>
                        <tr>
                            <td id="year1">2023-24</td>
                            <td id="totalDays">171</td>
                            <td id="present">163.5</td>
                            <td id="percentage">96%</td>
                        </tr>
                    </table>
                </div>
            </form>
            <div class="signature1">
                <div class="b8">Date : <span id="date1"></span></div>
                <div class="b9">Place :<span id="place1"></span></div>
            </div>
            <div class="signature2">
                <div class="b10">Headmaster </div>
            </div>
        </div>
    `;
    document.body.appendChild(container);
}

function createCertificates2() {
    const container = document.createElement("div");
    container.className = "a4-page";
    container.innerHTML = `
        <h1 id="schoolName">GOVERNMENT HIGHER SECONDARY SCHOOL</h1>
        <h1 id="certificateName">CONDUCT CERTIFICATE</h1>

        <div class="certificate">
            <div class="certificate1">
                <div class="a1"> This is to certify that <span id="name"></span></div>
                <div class="a2">with the EMIS No. <span id="emis1"></span>was a pupil in   </div>
                <div class="a3">this school in<span id="standard"></span>  standard during the academic </div>
                <div class="a4">year <span id="year"></span>.  His/Her character and conduct  </div>
                <div class="a5">were ___________________________</div>
            </div>
            <div class="signature1">
                <div class="b8">Date : <span id="date"></span></div>
                <div class="b9">Place :<span id="place"></span></div>
            </div>
            <div class="signature">
                <div class="b10">Headmaster</div>
            </div>
        </div>

        <h1 id="schoolName">GOVERNMENT HIGHER SECONDARY SCHOOL</h1>
        <h1 id="certificateName">CONDUCT CERTIFICATE</h1>

        <div class="certificate">
            <div class="certificate1">
                <div class="a1"> This is to certify that <span id="name"></span></div>
                <div class="a2">with the EMIS No. <span id="emis1"></span>was a pupil in   </div>
                <div class="a3">this school in<span id="standard"></span>  standard during the academic </div>
                <div class="a4">year <span id="year"></span>.  His/Her character and conduct  </div>
                <div class="a5">were ___________________________</div>
            </div>
            <div class="signature1">
                <div class="b8">Date : <span id="date"></span></div>
                <div class="b9">Place :<span id="place"></span></div>
            </div>
            <div class="signature">
                <div class="b10">Headmaster</div>
            </div>
        </div>
       
    `;
    document.body.appendChild(container);
}

function createCertificates3() {
    const container = document.createElement("div");
    container.className = "a4-page";
    container.innerHTML = `
    <h1 id="schoolName1">GOVERNMENT HIGHER SECONDARY SCHOOL</h1>
    <h1 id="certificateName1">ATTENDANCE CERTIFICATE</h1>

    <div class="certificate2">
        <form class="form-container">
            <div class="table1">
                <table cellspacing="0" cellpadding="5">
                    <tr>
                        <th>Student Name</th>
                        <td>:</td>
                        <td id="name1">SANJAY M</td>
                    </tr>
                    <tr>
                    <th>EMIS NO</th>
                    <td>:</td>
                    <td id="emis"></td>
                </tr>
                    <tr>
                        <th>Father Name</th>
                        <td>:</td>
                        <td id="father">MUTHURASU</td>
                    </tr>
                    <tr>
                        <th>Class</th>
                        <td>:</td>
                        <td id="class1">12</td>
                    </tr>
                    <tr>
                        <th>Admission No.</th>
                        <td>:</td>
                        <td id="admission">2807</td>
                    </tr>
                </table>
            </div>
            <br>
            <div class="table2">
                <table border="1" cellspacing="0" cellpadding="5">
                    <tr>
                        <th>Year</th>
                        <th>Total No. of Working Days</th>
                        <th>No. of Days Present</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td id="year1">2023-24</td>
                        <td id="totalDays">171</td>
                        <td id="present">163.5</td>
                        <td id="percentage">96%</td>
                    </tr>
                </table>
            </div>
        </form>
        <div class="signature1">
            <div class="b8">Date : <span id="date1"></span></div>
            <div class="b9">Place :<span id="place1"></span></div>
        </div>
        <div class="signature2">
            <div class="b10">Headmaster </div>
        </div>
    </div>

        <h1 id="schoolName1">GOVERNMENT HIGHER SECONDARY SCHOOL</h1>
        <h1 id="certificateName1">ATTENDANCE CERTIFICATE</h1>

        <div class="certificate2">
            <form class="form-container">
                <div class="table1">
                    <table cellspacing="0" cellpadding="5">
                        <tr>
                            <th>Student Name</th>
                            <td>:</td>
                            <td id="name1">SANJAY M</td>
                        </tr>
                        <tr>
                        <th>EMIS NO</th>
                        <td>:</td>
                        <td id="emis"></td>
                    </tr>
                        <tr>
                            <th>Father Name</th>
                            <td>:</td>
                            <td id="father">MUTHURASU</td>
                        </tr>
                        <tr>
                            <th>Class</th>
                            <td>:</td>
                            <td id="class1">12</td>
                        </tr>
                        <tr>
                            <th>Admission No.</th>
                            <td>:</td>
                            <td id="admission">2807</td>
                        </tr>
                    </table>
                </div>
                <br>
                <div class="table2">
                    <table border="1" cellspacing="0" cellpadding="5">
                        <tr>
                            <th>Year</th>
                            <th>Total No. of Working Days</th>
                            <th>No. of Days Present</th>
                            <th>Percentage</th>
                        </tr>
                        <tr>
                            <td id="year1">2023-24</td>
                            <td id="totalDays">171</td>
                            <td id="present">163.5</td>
                            <td id="percentage">96%</td>
                        </tr>
                    </table>
                </div>
            </form>
            <div class="signature1">
                <div class="b8">Date : <span id="date1"></span></div>
                <div class="b9">Place :<span id="place1"></span></div>
            </div>
            <div class="signature2">
                <div class="b10">Headmaster </div>
            </div>
        </div>
    `;
    document.body.appendChild(container);
}

// Call the function to create the certificates
//createCertificates();

function printPage() {
    // hideLinkk()
    window.print(); // This opens the print dialog
}



