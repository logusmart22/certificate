
const myMatrix = [
    [15700, 16200, 16700, 17200, 17700, 18200, 18700, 19300, 19900, 20500, 21100, 21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53100, 54700, 56400, 58100],
    [15900, 16400, 16900, 17400, 17900, 18400, 19000, 19600, 20200, 20800, 21400, 22000, 22700, 23400, 24100, 24800, 25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400, 51900, 53500, 55100, 56800, 58500],
    [16600, 17100, 17600, 18100, 18600, 19200, 19800, 20400, 21000, 21600, 22200, 22900, 23600, 24300, 25000, 25800, 26600, 27400, 28200, 29000, 29900, 30800, 31700, 32700, 33700, 34700, 35700, 36800, 37900, 39000, 40200, 41400, 42600, 43900, 45200, 46600, 48000, 49400, 50900, 52400, 54000, 55600, 57300, 59000, 60800],
    [18000, 18500, 19100, 19700, 20300, 20900, 21500, 22100, 22800, 23500, 24200, 24900, 25600, 26400, 27200, 28000, 28800, 29700, 30600, 31500, 32400, 33400, 34400, 35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000],
    [18200, 18700, 19300, 19900, 20500, 21100, 21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200, 65100, 67100],
    [18500, 19100, 19700, 20300, 20900, 21500, 22100, 22800, 23500, 24200, 24900, 25600, 26400, 27200, 28000, 28800, 29700, 30600, 31500, 32400, 33400, 34400, 35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000],
    [19000, 19600, 20200, 20800, 21400, 22000, 22700, 23400, 24100, 24800, 25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400, 51900, 53500, 55100, 56800, 58500, 60300, 62100, 64000, 65900, 67900, 69900],
    [19500, 20100, 20700, 21300, 21900, 22600, 23300, 24000, 24700, 25400, 26200, 27000, 27800, 28600, 29500, 30400, 31300, 32200, 33200, 34200, 35200, 36300, 37400, 38500, 39700, 40900, 42100, 43400, 44700, 46000, 47400, 48800, 50300, 51800, 53400, 55000, 56700, 58400, 60200, 62000, 63900, 65800, 67800, 69800, 71900],
    [20000, 20600, 21200, 21800, 22500, 23200, 23900, 24600, 25300, 26100, 26900, 27700, 28500, 29400, 30300, 31200, 32100, 33100, 34100, 35100, 36200, 37300, 38400, 39600, 40800, 42000, 43300, 44600, 45900, 47300, 48700, 50200, 51700, 53300, 54900, 56500, 58200, 59900, 61700, 63600, 65500, 67500, 69500, 71600, 73700],
    [20600, 21200, 21800, 22500, 23200, 23900, 24600, 25300, 26100, 26900, 27700, 28500, 29400, 30300, 31200, 32100, 33100, 34100, 35100, 36200, 37300, 38400, 39600, 40800, 42000, 43300, 44600, 45900, 47300, 48700, 50200, 51700, 53300, 54900, 56500, 58200, 59900, 61700, 63600, 65500, 67500, 69500, 71600, 73700, 75900],
    [35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400],
    [35600, 36700, 37800, 38900, 40100, 41300, 42500, 43800, 45100, 46500, 47900, 49300, 50800, 52300, 53900, 55500, 57200, 58900, 60700, 62500, 64400, 66300, 68300, 70300, 72400, 74600, 76800, 79100, 81500, 83900, 86400, 89000, 91700, 94500, 97300, 100200, 103200, 106300, 109500, 112800, 116200, 119700, 123300, 127000, 130800],
    [35900, 37000, 38100, 39200, 40400, 41600, 42800, 44100, 45400, 46800, 48200, 49600, 51100, 52600, 54200, 55800, 57500, 59200, 61000, 62800, 64700, 66600, 68600, 70700, 72800, 75000, 77300, 79600, 82000, 84500, 87000, 89600, 92300, 95100, 98000, 100900, 103900, 107000, 110200, 113500, 116900, 120400, 124000, 127700, 131500],
    [36000, 37100, 38200, 39300, 40500, 41700, 43000, 44300, 45600, 47000, 48400, 49900, 51400, 52900, 54500, 56100, 57800, 59500, 61300, 63100, 65000, 67000, 69000, 71100, 73200, 75400, 77700, 80000, 82400, 84900, 87400, 90000, 92700, 95500, 98400, 101400, 104400, 107500, 110700, 114000, 117400, 120900, 124500, 128200, 132000],
    [36200, 37300, 38400, 39600, 40800, 42000, 43300, 44600, 45900, 47300, 48700, 50200, 51700, 53300, 54900, 56500, 58200, 59900, 61700, 63600, 65500, 67500, 69500, 71600, 73700, 75900, 78200, 80500, 82900, 85400, 88000, 90600, 93300, 96100, 99000, 102000, 105100, 108300, 111500, 114800, 118200, 121700, 125400, 129200, 133100],
    [36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400, 51900, 53500, 55100, 56800, 58500, 60300, 62100, 64000, 65900, 67900, 69900, 72000, 74200, 76400, 78700, 81100, 83500, 86000, 88600, 91300, 94000, 96800, 99700, 102700, 105800, 109000, 112300, 115700, 119200, 122800, 126500, 130300, 134200],
    [36700, 37800, 38900, 40100, 41300, 42500, 43800, 45100, 46500, 47900, 49300, 50800, 52300, 53900, 55500, 57200, 58900, 60700, 62500, 64400, 66300, 68300, 70300, 72400, 74600, 76800, 79100, 81500, 83900, 86400, 89000, 91700, 94500, 97300, 100200, 103200, 106300, 109500, 112800, 116200, 119700, 123300, 127000, 130800, 134700],
    [36900, 38000, 39100, 40300, 41500, 42700, 44000, 45300, 46700, 48100, 49500, 51000, 52500, 54100, 55700, 57400, 59100, 60900, 62700, 64600, 66500, 68500, 70600, 72700, 74900, 77100, 79400, 81800, 84300, 86800, 89400, 92100, 94900, 97700, 100600, 103600, 106700, 109900, 113200, 116600, 120100, 123700, 127400, 131200, 135100],
    [37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200, 65100, 67100, 69100, 71200, 73300, 75500, 77800, 80100, 82500, 85000, 87600, 90200, 92900, 95700, 98600, 101600, 104600, 107700, 110900, 114200, 117600, 121100, 124700, 128400, 132300, 136300],
    [37700, 38800, 40000, 41200, 42400, 43700, 45000, 46400, 47800, 49200, 50700, 52200, 53800, 55400, 57100, 58800, 60600, 62400, 64300, 66200, 68200, 70200, 72300, 74500, 76700, 79000, 81400, 83800, 86300, 88900, 91600, 94300, 97100, 100000, 103000, 106100, 109300, 112600, 116000, 119500, 123100, 126800, 130600, 134500, 138500],
    [55500, 57200, 58900, 60700, 62500, 64400, 66300, 68300, 70300, 72400, 74600, 76800, 79100, 81500, 83900, 86400, 89000, 91700, 94500, 97300, 100200, 103200, 106300, 109500, 112800, 116200, 119700, 123300, 127000, 130800, 134700, 138700, 142900, 147200, 151600, 156100, 160800, 165600, 170600, 175700, 181000, 186400, 192000, 197700, 203600],
    [56100, 57800, 59500, 61300, 63100, 65000, 67000, 69000, 71200, 73300, 75500, 77800, 80100, 82500, 85000, 87600, 90200, 92900, 95700, 98600, 101600, 104600, 107700, 110900, 114200, 117600, 121100, 124700, 128400, 132300, 136300, 140500, 144800, 149200, 153700, 158400, 163200, 168200, 173400, 178700, 184200, 189800, 195500, 201400, 207400],
    [56800, 58500, 60200, 62000, 63900, 65800, 67800, 69900, 72000, 74200, 76400, 78700, 81100, 83500, 86000, 88600, 91300, 94000, 96800, 99700, 102700, 105800, 109000, 112300, 115700, 119200, 122800, 126500, 130300, 134200, 138300, 142500, 146800, 151300, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800, 197500, 203400, 209500],
    [61100, 62900, 64700, 66600, 68600, 70700, 72800, 75000, 77200, 79500, 81800, 84200, 86700, 89200, 91800, 94500, 97300, 100200, 103200, 106300, 109500, 112800, 116200, 119700, 123300, 127000, 130800, 134700, 138700, 142900, 147200, 151600, 156100, 160800, 165600, 170600, 175700, 181000, 186400, 192000, 197700, 203600, 209700, 216000, 222400],
    [67100, 69100, 71200, 73300, 75500, 77800, 80100, 82500, 85000, 87600, 90200, 92900, 95700, 98600, 101600, 104600, 107700, 110900, 114200, 117600, 121100, 124700, 128400, 132300, 136300, 140500, 144800, 149200, 153700, 158400, 163200, 168200, 173400, 178700, 184200, 189800, 195500, 201400, 207400, 213500, 219800, 226200, 232700, 239400],
    [78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142500, 146800, 151300, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800, 197500, 203400, 209500, 215700, 222100, 228700, 235500, 242400, 249500, 256800, 264300, 272000, 279900],
    [79900, 82400, 84900, 87600, 90200, 92900, 95700, 98600, 101600, 104600, 107700, 110900, 114200, 117600, 121100, 124700, 128400, 132300, 136300, 140500, 144800, 149200, 153700, 158400, 163200, 168200, 173400, 178700, 184200, 189800, 195500, 201400, 207400, 213500, 219800, 226200, 232700, 239400, 246200, 253200, 260400, 267700, 275200, 282900],
    [123100, 126800, 130600, 134500, 138500, 142700, 147000, 151400, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800, 197600, 203500, 209600, 215900, 222400, 229100, 236000, 243100, 250400],
    [123400, 127100, 130900, 134800, 138800, 143000, 147300, 151700, 156300, 161000, 165800, 170800, 175900, 181200, 186600, 192200, 198000, 203900, 210000, 216300, 222800, 229500, 236400, 243500, 250800],
    [123600, 127300, 131100, 135000, 139100, 143300, 147600, 152000, 156600, 161300, 166100, 171100, 176200, 181500, 186900, 192500, 198300, 204200, 210300, 216600, 223100, 229800, 236700, 243800, 251100],
    [125200, 129000, 132900, 136900, 141000, 145200, 149600, 154100, 158700, 163500, 168400, 173500, 178700, 184100, 189600, 195300, 201200, 207200, 213400, 219800, 226400, 233200, 240200, 247400, 254800],
    [128900, 132800, 136800, 140900, 145100, 149500, 154000, 158600, 163400, 168300, 173300, 178500, 183900, 189400, 195100, 201000, 207000, 213200, 219600, 225000, 231800, 238800, 246000, 253400, 261000]
];

// Define the data as a two-dimensional array
const myHra = [
    [1300, 700, 600, 400, 250],
    [1500, 1000, 700, 450, 300],
    [1800, 1200, 800, 500, 350],
    [2100, 1400, 1000, 700, 400],
    [2600, 1700, 1200, 800, 400],
    [3100, 2000, 1500, 1000, 450],
    [3600, 2300, 1700, 1200, 500],
    [4200, 2600, 1800, 1500, 550],
    [4700, 3000, 2300, 1700, 600],
    [5200, 3300, 2600, 1900, 650],
    [5700, 3600, 2900, 2000, 650],
    [6200, 3800, 3100, 2200, 700],
    [6800, 4100, 3200, 2200, 750],
    [7300, 4300, 3200, 2200, 800],
    [7500, 4300, 3200, 2200, 850],
    [7800, 4300, 3200, 2200, 850],
    [8300, 4300, 3200, 2200, 850]
];
const myCca = [
    [360, 180],
    [500, 260],
    [800, 400],
    [1200, 720]
]

var data = []; // Define data array in the global scope

function slsvalue() {
    // Your function code here
}


var myArrey = [];

function dateF() {
    //for last  total count
    //var totaldutyPay = 0
    //var totalda = 0

    //var totalppPay = 0
    // var totalhraValue1 = 0
    // var totalccaValue1 = 0
    //var totalmaValue1 = 0
    // end //for last  total count

    slsvalue()

    document.querySelectorAll("myTable").forEach(td => td.innerHTML = "");
    console.log(myHra[3][1]);
    var startDateInput = document.getElementById("start_date");
    var endDateInput = document.getElementById("end_date");
    var inMonth = document.getElementById("inMonth").value;
    var index1 = document.getElementById("index1").value;
    var columnSelectValue = document.getElementById("column-select").value;
    var hraGrade = document.getElementById("hraGrade").value;
    var ccaGrade = document.getElementById("ccaGrade").value ? document.getElementById("ccaGrade").value : -1;

    // Get the values of the radio button and checkbox in a single line
    var haGrade = document.querySelector('input[name="yesNo"]:checked') ? document.querySelector('input[name="yesNo"]:checked').value : -1;
    var waGrade = document.getElementById('winterAllowanceCheckbox').checked ? document.getElementById('winterAllowanceCheckbox').value : -1;
    //personal pay
    var personalPay = document.querySelector('input[name="personalPay"]:checked');
    var ppGrade = personalPay ? Number(personalPay.value) : -1;


    console.log("Radio Button Value:", ppGrade);
    console.log("Checkbox Value:", waGrade);

    columnSelectValue = Number(columnSelectValue);
    index1 = Number(index1);
    hraGrade = Number(hraGrade);
    ccaGrade = Number(ccaGrade);
    var date1 = new Date(startDateInput.value);
    var date2 = new Date(endDateInput.value);

    //-------------------------------------------------------------------------------------------
    // Assuming you have a selection box with id "column-select"
    let mPay = 1; // Initialize mPay with a default value




    //----------------------------------------------------------------------
    //index1=1500

    var table = document.getElementById('myTable');
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headerCell1 = document.createElement('th');


    headerCell1.textContent = 'DATE';
    headerRow.appendChild(headerCell1);

    var headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Duty Pay';
    headerRow.appendChild(headerCell2);


    if (personalPay) {
        var headerCell2a = document.createElement('th');
        headerCell2a.textContent = 'Personal Pay';
        headerRow.appendChild(headerCell2a);
    }

    var headerCell3 = document.createElement('th');
    headerCell3.textContent = 'DA';
    headerRow.appendChild(headerCell3);

    var headerCell4 = document.createElement('th');
    headerCell4.textContent = 'HRA';
    headerRow.appendChild(headerCell4);

    if (ccaGrade == 0 || ccaGrade == 1) {
        var headerCell5 = document.createElement('th');
        headerCell5.textContent = 'CCA';
        headerRow.appendChild(headerCell5);
    }


    var headerCell6 = document.createElement('th');
    headerCell6.textContent = 'M.A.';
    headerRow.appendChild(headerCell6);
    if (haGrade == 1) {
        var headerCell7 = document.createElement('th');
        headerCell7.textContent = 'H.A.';
        headerRow.appendChild(headerCell7);
    }

    if (haGrade == 1) {
        var headerCell8 = document.createElement('th');
        headerCell8.textContent = 'W.A.';
        headerRow.appendChild(headerCell8);
    }
    // addtional due 1
    var dueName1 = document.getElementById('dueName1').value;
    var dueAmount1 = document.getElementById('dueAmount1').value;
    dueAmount1 = Number(dueAmount1);
    if (dueAmount1 > 0) {
        var headerCell17 = document.createElement('th');
        headerCell17.textContent = dueName1;
        headerRow.appendChild(headerCell17);
    }
    // additional due 2
    var dueName2 = document.getElementById('dueName2').value;
    var dueAmount2 = document.getElementById('dueAmount2').value;
    dueAmount2 = Number(dueAmount2);
    if (dueAmount2 > 0) {
        var headerCell18 = document.createElement('th');
        headerCell18.textContent = dueName2;
        headerRow.appendChild(headerCell18);
    }

    var headerCell9 = document.createElement('th');
    headerCell9.textContent = 'GROSS';
    headerRow.appendChild(headerCell9);
    //DEDUCTION-----------------------------------------------
    var scheme = document.querySelector('input[name="scheme"]:checked') ? document.querySelector('input[name="scheme"]:checked').value : (alert("Please select a scheme."), null);
    var gpf = document.getElementById("gpfAmount").value;
    gpf = Number(gpf);
    var headerCell10 = document.createElement('th');
    headerCell10.textContent = scheme;
    headerRow.appendChild(headerCell10);

    //famely penifit fund
    if (document.getElementById("fbf").checked) {
        var headerCell11 = document.createElement('th');
        headerCell11.textContent = "FBF";
        headerRow.appendChild(headerCell11);
    }
    //fpf
    if (document.querySelector('input[name="spf"]:checked')) {
        var spfGrade = document.querySelector('input[name="spf"]:checked').value;
        spfGrade = Number(spfGrade);
        var headerCell12 = document.createElement('th');
        headerCell12.textContent = "SPF";
        headerRow.appendChild(headerCell12);
    }

    if (document.getElementById("nhis").checked) {
        var headerCell13 = document.createElement('th');
        headerCell13.textContent = "NHIS";
        headerRow.appendChild(headerCell13);
    }


    var pli = document.getElementById('pli').value;
    pli = Number(pli)
    if (pli > 0) {
        var headerCell16 = document.createElement('th');
        headerCell16.textContent = "PLI";
        headerRow.appendChild(headerCell16);
    }
    var deduction1Name = document.getElementById('deduction1Name').value;
    var deduction1 = document.getElementById('deduction1Value').value;
    deduction1 = Number(deduction1)
    if (deduction1 > 0) {
        var headerCell14 = document.createElement('th');
        headerCell14.textContent = deduction1Name;
        headerRow.appendChild(headerCell14);
    }

    var deduction2Name = document.getElementById('deduction2Name').value;
    var deduction2 = document.getElementById('deduction2Value').value;
    deduction2 = Number(deduction2)
    if (deduction2 > 0) {
        var headerCell15 = document.createElement('th');
        headerCell15.textContent = deduction2Name;
        headerRow.appendChild(headerCell15);
    }


    var headerCell14 = document.createElement('th');
    headerCell14.textContent = "DEDUCTION";
    headerRow.appendChild(headerCell14);

    var headerCell15 = document.createElement('th');
    headerCell15.textContent = "NET";
    headerRow.appendChild(headerCell15);
    //DEDUCTION-----------------------------------------------



    thead.appendChild(headerRow);

    table.appendChild(thead);
    var ac = 0; //for sls function
    var ab = 1; // Initialize ab to 0
    var ary = 0; // this is for myArrey run
    var daPercentage;
    var result = undefined;
    var hraValue;
    var ccaValue = 0;
    for (var d = date1; d <= date2; d.setMonth(d.getMonth() + 1, 1)) {
        myArrey[ary] = [];// my aeery insert
        var month = d.toLocaleString('default', { month: 'short' });
        var year = d.getFullYear();
        var formattedDate = month + '-' + year;
        var tableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        tableData.textContent = formattedDate;
        tableRow.appendChild(tableData);
        table.appendChild(tableRow);
        var row = table.rows[ab]; // Access the row using the correct index
        var payCell = row.insertCell(1); // Insert cell at index 1


        var daMonth = convertMonth(month);
        //for found no. of present days of a month
        var date1days = date1.getDate();
        var datelastdaysss = getLastDayOfMonth(2026, 2);
        var datelastday = getLastDayOfMonth(year, daMonth);
        var presentDays = (datelastday - date1days) + 1;
        //---------------------------------------------
        //personal pay
        let k = 2;
        //-------------------------------------------------------------------
        var ppValue = null
        var ppValue1 = 0
        if (personalPay) {
            ppValue = ppGrade
            var ppCell = row.insertCell(k);
            k = k + 1;
            ppValue1 = Math.round((ppValue / datelastday) * presentDays);
            ppCell.innerHTML = ppValue1;
        }
        //---------------------------------------------------------------
        var daCell = row.insertCell(k);
        k = k + 1
        var hraCell = row.insertCell(k);
        k = k + 1


        // increment
        if (ab !== 1) {
            month === inMonth ? index1 = index1 + 1 : index1;
        }

        result = myMatrix[columnSelectValue][index1];
        //index1 = result1;
        var dutyPay = Math.round((result / datelastday) * presentDays);
        payCell.innerHTML = dutyPay;
        // da startiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

        daPercentage = calculateDA(daMonth, year);
        var daValue = Math.round((dutyPay * daPercentage) / 100);
        daCell.innerHTML = daValue;
        //iiiiiiiiiiiiiiiiiiiiiiiii hra start 
        let hraResult = getHra(result);
        hraValue = myHra[hraResult][hraGrade];
        var hraValue1 = Math.round((hraValue / datelastday) * presentDays);
        hraCell.innerHTML = hraValue1;

        // cca start iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii

        var ccaValue1 = 0
        if (ccaGrade == 0 || ccaGrade == 1) {
            var ccaCell = row.insertCell(k);
            k = k + 1;
            let ccaResult = getCca(result);
            ccaValue = myCca[ccaResult][ccaGrade];
            ccaValue1 = Math.round((ccaValue / datelastday) * presentDays);
            ccaCell.innerHTML = ccaValue1;
        }
        //medial allowance------------------------------------------------
        var maCell = row.insertCell(k);
        k = k + 1;
        var maValue = 300
        var maValue1 = Math.round((maValue / datelastday) * presentDays);
        maCell.innerHTML = maValue1;
        //cca end iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii hills allowance start
        var haValue;
        var haValue1 = 0;
        if (haGrade == 1) {
            var haCell = row.insertCell(k);
            k = k + 1;
            haValue = (result * 20) / 100;
            haValue = haValue <= 6000 ? haValue : 6000;
            var haValue1 = Math.round((haValue / datelastday) * presentDays);
            haCell.innerHTML = haValue1;
        }

        var waValue1 = 0;
        var waValue = 0;
        //end hills alowance iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii   winter allowance start
        if (haGrade == 1) {
            var waCell = row.insertCell(k);
            k = k + 1;
            if (daMonth == 11 || daMonth == 12 || daMonth == 1 || daMonth == 2) {
                if (waGrade == 1) {
                    waValue = (result * 10) / 100;
                    waValue = waValue <= 1500 ? waValue : 1500;
                } else {
                    waValue = (result * 5) / 100;
                    waValue = waValue <= 1200 ? waValue : 1200;
                }
                var waValue1 = Math.round((waValue / datelastday) * presentDays);
            }

            waCell.innerHTML = waValue1;
        }
        //iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii winter allownace end 
        //additional due1
        var due1Value1 = 0;
        if (dueAmount1 > 0) {
            var addDue1Cell = row.insertCell(k);
            k = k + 1;
            due1Value1 = Math.round((dueAmount1 / datelastday) * presentDays);
            addDue1Cell.innerHTML = due1Value1;
        }

        //additional due2
        var due2Value1 = 0;
        if (dueAmount2 > 0) {
            var addDue2Cell = row.insertCell(k);
            k = k + 1;
            due2Value1 = Math.round((dueAmount2 / datelastday) * presentDays);
            addDue2Cell.innerHTML = due2Value1;
        }

        var grossCell = row.insertCell(k);
        k = k + 1;
        var grossValue = dutyPay + ppValue1 + daValue + hraValue1 + ccaValue1 + maValue1 + haValue1 + waValue1 + due1Value1 + due2Value1;
        grossCell.innerHTML = grossValue;

        myArrey[ary].push(dutyPay, ppValue1, daValue, hraValue1, ccaValue1, maValue1, haValue1, waValue1, due1Value1, due2Value1);
        ab = ab + 1;
        document.getElementById('table-container').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
        document.getElementById('download').style.display = 'block';



        //deduction start-------------------------------------------------------------
        //GPF/GPS
        var schemeValue = scheme === "GPF" ? gpf : Math.round(((dutyPay + daValue) * 10) / 100);
        var schemeCell = row.insertCell(k);
        k = k + 1;
        //ccaValue1 = Math.round((ccaValue / datelastday) * presentDays);
        schemeCell.innerHTML = schemeValue;

        //FBF
        var fbfValue1 = 0;
        if (document.getElementById("fbf").checked) {
            var fbfCell = row.insertCell(k);
            k = k + 1;
            var fbfValue = 110;
            fbfValue1 = Math.round((fbfValue / datelastday) * presentDays);
            fbfCell.innerHTML = fbfValue1;
        }
        //spf
        var spfValue1 = 0
        if (document.querySelector('input[name="spf"]:checked')) {
            var spfCell = row.insertCell(k);
            k = k + 1;
            var spfValue = spfGrade;
            spfValue1 = Math.round((spfValue / datelastday) * presentDays);
            spfCell.innerHTML = spfValue1;
        }
        //NHIS
        var nhisValue1 = 0
        if (document.getElementById("nhis").checked) {
            var nhisCell = row.insertCell(k);
            k = k + 1
            var nhisValue = 300;
            nhisValue1 = Math.round((nhisValue / datelastday) * presentDays);
            nhisCell.innerHTML = nhisValue1;
        }
        // POSTAL LIFE INSURANCE

        if (pli > 0) {
            var pliCell = row.insertCell(k);
            k = k + 1
            pliCell.innerHTML = pli;
        }
        // deduction 1

        if (deduction1 > 0) {
            var deduction1Cell = row.insertCell(k);
            k = k + 1
            deduction1Cell.innerHTML = deduction1;
        }

        // deduction 2

        if (deduction2 > 0) {
            var deduction2Cell = row.insertCell(k);
            k = k + 1
            deduction2Cell.innerHTML = deduction2;
        }


        //TOTAL DEDUCTION
        var deductionCell = row.insertCell(k);
        k = k + 1
        var deductionValue = schemeValue + fbfValue1 + spfValue1 + nhisValue1 + pli + deduction1 + deduction2;
        deductionCell.innerHTML = deductionValue;
        myArrey[ary].push(schemeValue, fbfValue1, spfValue1, nhisValue1, pli, deduction1, deduction2);
        //console.table(myArrey)
        //NET
        var netCell = row.insertCell(k);
        k = k + 1;
        var netValue = grossValue - deductionValue;
        netCell.innerHTML = netValue;

        //deduction ended--------------------------------------------------------------

        //lastTotal(date2);
        slsCreate(year, daMonth, month);// sls run

        ary = ary + 1//myarrey increment

    }


    //Last Total
    function lastTotal(date2) {
        //all dues and deduction count for last total

        totaldutyPay = dutyPay + totaldutyPay + slsdutypayValue;
        totalda = daValue + totalda;
        totalppPay = ppValue1 + totalppPay + slsppValue
        totalhraValue1 = hraValue1 + totalhraValue1
        totalccaValue1 = ccaValue1 + totalccaValue1
        totalmaValue1 = maValue1 + totalmaValue1

        var date2Month = date2.getMonth() + 1;
        var date2Year = date2.getFullYear();
        if (daMonth === date2Month && year === date2Year) {
            var totaltableRow = document.createElement('tr');
            var totaltableData = document.createElement('td');
            totaltableData.textContent = "TOTAL";
            totaltableRow.appendChild(totaltableData);
            table.appendChild(totaltableRow);
            //total day
            var payTotaltd = document.createElement('td');
            payTotaltd.textContent = totaldutyPay; // Content for the second <td>
            totaltableRow.appendChild(payTotaltd);
            table.appendChild(totaltableRow);
            // total personal pay
            if (personalPay) {
                var ppTotaltd = document.createElement('td');
                ppTotaltd.textContent = totalppPay; // Content for the second <td>
                totaltableRow.appendChild(ppTotaltd);
                table.appendChild(totaltableRow);

            }
            //total da value
            var daTotaltd = document.createElement('td');
            daTotaltd.textContent = totalda; // Content for the second <td>
            totaltableRow.appendChild(daTotaltd);
            table.appendChild(totaltableRow);
            // total hra
            var hraTotaltd = document.createElement('td');
            hraTotaltd.textContent = totalhraValue1; // Content for the second <td>
            totaltableRow.appendChild(hraTotaltd);
            table.appendChild(totaltableRow);
            //total cca value
            if (ccaGrade == 0 || ccaGrade == 1) {
                var ccaTotaltd = document.createElement('td');
                ccaTotaltd.textContent = totalccaValue1; // Content for the second <td>
                totaltableRow.appendChild(ccaTotaltd);
                table.appendChild(totaltableRow);
            }
            // total ma
            var maTotaltd = document.createElement('td');
            maTotaltd.textContent = totalmaValue1; // Content for the second <td>
            totaltableRow.appendChild(maTotaltd);
            table.appendChild(totaltableRow);


        }
    }
    //XXXXXXXXXXXXXXXXXXXXXXXXXsls creationXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


    function slsCreate(year, daMonth, month) {
        if (data[ac] !== undefined) {
            // Assuming data is defined and accessible in the scope of this function
            var slsMonth = data[ac][0];
            var slsYear = data[ac][1];
            var slsDays = data[ac][2];
            //var ab = 0; // Assuming ab is initialized elsewhere in your code
            slsDays === 0 ? ac = ac + 1 : ac;
            if (daMonth === slsMonth && year === slsYear && slsDays !== 0) {
                ary = ary + 1// my arrey
                myArrey[ary] = [];//my arrey
                ac = ac + 1
                var slstableRow = document.createElement('tr');
                var slstableData = document.createElement('td');
                slstableData.textContent = "SLS" + ": " + month + "-" + year + "/" + slsDays;
                slstableRow.appendChild(slstableData);
                table.appendChild(slstableRow);
                var slsDays1;
                slsDays === 30 ? slsDays1 = 100 : slsDays1 = 50;
                //sls duty pay
                var slstableData2 = document.createElement('td');
                var slsdutypayValue = Math.round((result * slsDays1) / 100);
                slstableData2.textContent = slsdutypayValue; // Content for the second <td>
                slstableRow.appendChild(slstableData2);
                table.appendChild(slstableRow);
                //sls personal pay
                var slsppValue = 0
                if (personalPay) {
                    var slstableData2a = document.createElement('td');
                    slsppValue = Math.round((ppGrade * slsDays1) / 100);
                    slstableData2a.textContent = slsppValue; // Content for the second <td>
                    slstableRow.appendChild(slstableData2a);
                    table.appendChild(slstableRow);
                }
                //sls da
                var slstableData3 = document.createElement('td');
                let slsDa = (result * daPercentage) / 100;
                var slsdaValue = Math.round((slsDa * slsDays1) / 100);
                slstableData3.textContent = slsdaValue; // Content for the second <td>
                slstableRow.appendChild(slstableData3);
                table.appendChild(slstableRow);
                //sls hra
                var slstableData4 = document.createElement('td');
                var slshraValue = Math.round((hraValue * slsDays1) / 100);
                slstableData4.textContent = slshraValue; // Content for the second <td>
                slstableRow.appendChild(slstableData4);
                table.appendChild(slstableRow);

                //sls cca
                var slsccaValue = 0
                if (ccaGrade == 0 || ccaGrade == 1) {
                    var slstableData5 = document.createElement('td');
                    slsccaValue = Math.round((ccaValue * slsDays1) / 100);
                    slstableData5.textContent = slsccaValue; // Content for the second <td>
                    slstableRow.appendChild(slstableData5);
                    table.appendChild(slstableRow);
                }

                //sls ma empty td
                var slstableData6 = document.createElement('td');
                slstableData6.textContent = ""; // Content for the second <td>
                slstableRow.appendChild(slstableData6);
                table.appendChild(slstableRow);

                //sls hA allowance
                var slshaValue = 0
                if (haGrade == 1) {
                    var slstableData7 = document.createElement('td');
                    slshaValue = Math.round((haValue * slsDays1) / 100);
                    slstableData7.textContent = slshaValue; // Content for the second <td>
                    slstableRow.appendChild(slstableData7);
                    table.appendChild(slstableRow);
                }
                //sls wa allosance
                var slswaValue = 0
                if (haGrade == 1) {
                    var slstableData8 = document.createElement('td');
                    slswaValue = Math.round((waValue * slsDays1) / 100);
                    slstableData8.textContent = slswaValue; // Content for the second <td>
                    slstableRow.appendChild(slstableData8);
                    table.appendChild(slstableRow);
                }
                //sls additonala due one
                var slsdue1Value = 0
                if (dueAmount1 > 0) {
                    var slstableData10 = document.createElement('td');
                    slsdue1Value = Math.round((dueAmount1 * slsDays1) / 100);
                    slstableData10.textContent = slsdue1Value; // Content for the second <td>
                    slstableRow.appendChild(slstableData10);
                    table.appendChild(slstableRow);
                }
                //sls additonala due one
                var slsdue2Value = 0
                if (dueAmount2 > 0) {
                    var slstableData11 = document.createElement('td');
                    slsdue2Value = Math.round((dueAmount2 * slsDays1) / 100);
                    slstableData11.textContent = slsdue2Value; // Content for the second <td>
                    slstableRow.appendChild(slstableData11);
                    table.appendChild(slstableRow);
                }
                //sls grose
                var slstableData9 = document.createElement('td');
                var slsGross = slsdutypayValue + slsppValue + slsdaValue + slshraValue + slsccaValue + slshaValue + slswaValue + slsdue1Value + slsdue2Value;
                slstableData9.textContent = slsGross; // Content for the second <td>

                myArrey[ary].push(slsdutypayValue, slsppValue, slsdaValue, slshraValue, slsccaValue, slshaValue, slswaValue, slsdue1Value, slsdue2Value)
                slstableRow.appendChild(slstableData9);
                table.appendChild(slstableRow);
                ab = ab + 1;
            }
        }
    }





    //ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    function calculateDA(month, year) {
        let da = 0;

        // Convert month and year to integers for comparison
        month = parseInt(month);
        year = parseInt(year);

        if (year === 2016 && month >= 1 && month < 7) {
            da = 0;
        } else if (year === 2016 && month >= 7 && month <= 12) {
            da = 2;
        } else if (year === 2017 && month >= 1 && month < 7) {
            da = 4;
        } else if (year === 2017 && month >= 7 && month <= 12) {
            da = 5;
        } else if (year === 2018 && month >= 1 && month < 7) {
            da = 7;
        } else if (year === 2018 && month >= 7 && month <= 12) {
            da = 9;
        } else if (year === 2019 && month >= 1 && month < 7) {
            da = 12;
        } else if (year === 2019 && month >= 7 && month <= 12) {
            da = 17;
        } else if (year === 2020 && month >= 1 && month < 7) {
            da = 17;
        } else if (year === 2020 && month >= 7 && month <= 12) {
            da = 17;
        } else if (year === 2021 && month >= 1 && month < 7) {
            da = 17;
        } else if (year === 2021 && month >= 7 && month <= 12) {
            da = 17;
        } else if (year === 2022 && month >= 1 && month < 7) {
            da = 31;
        } else if (year === 2022 && month >= 7 && month <= 12) {
            da = 34;
        } else if (year === 2023 && month >= 1 && month < 4) {
            da = 38;
        } else if (year === 2023 && month >= 4 && month < 7) {
            da = 42;
        } else if (year === 2023 && month >= 7 && month <= 12) {
            da = 46;
        } else if (year === 2024 && month >= 1 && month < 7) {
            da = 50;
        } else if (year === 2024 && month >= 7 && month <= 12) {
            da = 53;
        } else if (year === 2025 && month >= 1 && month < 7) {
            da = 55;
        } else if (year === 2025 && month >= 7 && month <= 12) {
            da = 58;
        }
        else if (year === 2026 && month >= 1 && month <= 12) {
            da = 58;
        }
        return da;

        // Example usage:

    }
    //ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    function convertMonth(mmm) {
        // Convert month abbreviation to lowercase to handle case-insensitivity
        mmm = mmm.toLowerCase();

        // Define a map of month abbreviations to their respective numeric values
        var monthMap = {
            'jan': '01',
            'feb': '02',
            'mar': '03',
            'apr': '04',
            'may': '05',
            'jun': '06',
            'jul': '07',
            'aug': '08',
            'sep': '09',
            'sept': '09',
            'oct': '10',
            'nov': '11',
            'dec': '12'
        };

        // Check if the input month abbreviation exists in the map
        if (monthMap.hasOwnProperty(mmm)) {
            // If found, return the corresponding numeric value
            return parseInt(monthMap[mmm]);
        } else {
            // If not found, return null or throw an error, depending on your requirement
            return null; // You can customize this behavior as needed
        }
    }

    //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    function getHra(myGradePay) {


        if (myGradePay >= 1 && myGradePay <= 13600) {
            hra = 0;
        } else if (myGradePay >= 13601 && myGradePay <= 17200) {
            hra = 1;
        } else if (myGradePay >= 17201 && myGradePay <= 21000) {
            hra = 2;
        } else if (myGradePay >= 21001 && myGradePay <= 23900) {
            hra = 3;
        } else if (myGradePay >= 23901 && myGradePay <= 27200) {
            hra = 4;
        } else if (myGradePay >= 27201 && myGradePay <= 30600) {
            hra = 5;
        } else if (myGradePay >= 30601 && myGradePay <= 35400) {
            hra = 6;
        } else if (myGradePay >= 35401 && myGradePay <= 37300) {
            hra = 7;
        } else if (myGradePay >= 37301 && myGradePay <= 41100) {
            hra = 8;
        } else if (myGradePay >= 41101 && myGradePay <= 44500) {
            hra = 9;
        } else if (myGradePay >= 44501 && myGradePay <= 50200) {
            hra = 10;
        } else if (myGradePay >= 50201 && myGradePay <= 51600) {
            hra = 11;
        } else if (myGradePay >= 51601 && myGradePay <= 54000) {
            hra = 12;
        } else if (myGradePay >= 54001 && myGradePay <= 55500) {
            hra = 13;
        } else if (myGradePay >= 55501 && myGradePay <= 56900) {
            hra = 14;
        } else if (myGradePay >= 56901 && myGradePay <= 64200) {
            hra = 15;
        } else if (myGradePay >= 64201 && myGradePay <= 1000000) {
            hra = 16;
        }
        return hra;
    }

    //bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    function getCca(myCcaPay) {
        if (myCcaPay >= 1 && myCcaPay <= 20600) {
            cca = 0;
        } else if (myCcaPay >= 20601 && myCcaPay <= 30800) {
            cca = 1;
        } else if (myCcaPay >= 30801 && myCcaPay <= 41100) {
            cca = 2;
        } else if (myCcaPay >= 41101 && myCcaPay <= 1000000) {
            cca = 3;
        }
        return cca;
    }
    //bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb


    function checkInput(input) {
        let myId;
        // Check if input is falsy, -1, 'no', 'not selected', undefined, or null
        if (!input || input === -1 || input.toLowerCase() === 'no' || typeof input === 'undefined' || input.toLowerCase() === 'not selected' || input === null || input === false) {
            // If any of the conditions are met, assign 9 to da
            myId = 1;
        } else {
            // If none of the conditions are met, assign 100 to da
            myId = 0
        }
        // Return the value of da
        return myId;
    }

    //VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
 
    function getLastDayOfMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    //iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
}

function feedOption() {
    var columnSelectValue = document.getElementById("column-select").value;
    columnSelectValue = Number(columnSelectValue)
    var select = document.getElementById("index1");

    select.innerHTML = "";

    // Assuming myMatrix is a global variable
    // Loop through the specified array and create an option element for each item
    for (var i = 0; i < myMatrix[columnSelectValue].length; i++) {
        var option = document.createElement("option");
        option.text = myMatrix[columnSelectValue][i];
        option.value = i; // Set the option value to the array element itself
        select.appendChild(option);
    }





}

//edit ------------------------------------------------------------------


let transformed = false; // Variable to track transformation state

function transformTdToInput() {
    // Indices of td elements to transform
    const indicesToTransform = [1, 3, 4, 5]; // Modify this array as needed

    // Get all rows in the table
    const rows = document.querySelectorAll('#myTable tr');

    // Iterate through each row
    rows.forEach(row => {
        // Get all td elements within the row
        const tds = row.querySelectorAll('td');

        // Iterate through each td in the row
        tds.forEach((td, index) => {
            // Check if the current index is in the indicesToTransform array
            if (indicesToTransform.includes(index)) {
                // Create an input element
                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'dynamic-input'; // Apply the class for styling
                // Set the input value to the content of the td
                input.value = td.textContent.trim();
                // Listen for input changes to adjust width dynamically
                ///input.addEventListener('input', function () {
                ///this.style.width = (this.value.length * 10) + 'px'; // Adjust width based on content length
                ///});
                // Replace the td content with the input element
                td.innerHTML = ''; // Clear the content
                td.appendChild(input);
            }
        });
    });
}

function revertInputToTd() {
    // Get all input elements with the class 'dynamic-input'
    const inputs = document.querySelectorAll('.dynamic-input');

    // Iterate through each input element
    inputs.forEach(input => {
        // Get the parent td element
        const td = input.parentNode;
        // Set the td innerHTML to the input value
        td.innerHTML = input.value;
    });
}

function toggleTransformation() {
    if (transformed) {
        revertInputToTd();
        transformed = false; // Set transformation state to false
    } else {
        transformTdToInput();
        transformed = true; // Set transformation state to true
    }
}

//mytable input lenth decide code

