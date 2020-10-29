setUpDataTableEng();
async function setUpDataTableEng() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    var users = data.map(el => Object.values(el));
    $(document).ready( () => {
        var table = $('#flight').DataTable({
            "searching": false,
            "ordering": false,
            "lengthChange": false,
            "info": false,
            scrollY: 'calc(100vh - 170px)',
            scrollResize: true,
            scrollCollapse: true,
            paging:         true,
            // "aLengthMenu": [5, 10, 15, 20, 25],
            // "iDisplayLength": 5,
            data: users,
            columns : [
                { title: "FLIGHT" },
                { title: "TIME" },
                { title: "DESTINATION" },
                { title: "GATE" }
            ]
        });
        var pageInfo = table.page.info(),
        endInt = pageInfo.end,   
        currentInt = 0,
        interval = setInterval(function(){
            table.page( currentInt ).draw( 'page' ); 
            currentInt++;
            if ( currentInt ===  endInt)
            currentInt = 0;
        }, 1500);
    });
}

setUpDataTableIna();
async function setUpDataTableIna() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    var users = data.map(el => Object.values(el));
    $(document).ready( () => {
        var table = $('#flights').DataTable({
            "searching": false,
            "ordering": false,
            "lengthChange": false,
            "info": false,
            scrollY: 'calc(100vh - 170px)',
            scrollResize: true,
            scrollCollapse: true,
            paging:         true,
            // "aLengthMenu": [5, 10, 15, 20, 25],
            // "iDisplayLength": 5,
            data: users,
            columns : [
                { title: "PENERBANGAN" },
                { title: "WAKTU" },
                { title: "TUJUAN" },
                { title: "GATE" }
            ]
        });
        var pageInfo = table.page.info(),
        endInt = pageInfo.end,   
        currentInt = 0,
        interval = setInterval(function(){
            table.page( currentInt ).draw( 'page' ); 
            currentInt++;
            if ( currentInt ===  endInt)
            currentInt = 0;
        }, 1500);
    });
}

/* show time automatically */
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplayEng").innerText = time;
    document.getElementById("MyClockDisplayEng").textContent = time;
    document.getElementById("MyClockDisplayIna").innerText = time;
    document.getElementById("MyClockDisplayIna").textContent = time;
    setTimeout(showTime, 1000);   
}
showTime();

/* show date now */
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var currentDate = new Date(Date.now()),
    day = currentDate.getDate(),
    month = monthNames[currentDate.getMonth()+ 1],
    year = currentDate.getFullYear();
document.getElementById("datesEng").innerText = day + " " + month + " " + year;
document.getElementById("datesIna").innerText = day + " " + month + " " + year;