/*change language datatable */
$(document).ready( () => {
    var timerHeader = setInterval(dataHeader, 3000);
    var counter = 0;
    function dataHeader() {
        if (counter == 0) {
            counter++;
            return;
        }
        $('div', '#head_table')
        .stop()
        .hide()
        .filter(function() {
            return this.id.match('lang' + counter);
        })
        .fadeIn(1000);
        counter == 2 ? counter = 0 : counter++;
    }

    var timerBody = setInterval(dataBody, 3000);
    var counterBody = 0;
    function dataBody() {
        if (counterBody == 0) {
            counterBody++;
            return;
        }
        $('div', '#body_table')
        .stop()
        .hide()
        .filter(function() {
            return this.id.match('lang' + counterBody);
        })
        .fadeIn(1000);
        counterBody == 2 ? counterBody = 0 : counterBody++;
    }
});

$(document).ready(function() {
    var table = $('#flight').DataTable({
        "searching": false,
        "ordering": false,
        "lengthChange": false,
        "info": false,
        "lengthMenu": [
            [28, 56, 84, -1], 
            [28, 56, 84, "All"]
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
    }, 6300);
});


/* show time automatically */
function timesFlightInfo(){
    var today = new Date();
    var date = today.getDate()+' '+ today.toLocaleString('default', { month: 'short' }) +' '+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    document.getElementById("timesFlight").innerText = dateTime;
    document.getElementById("timesFlight").textContent = dateTime;
    setTimeout(timesFlightInfo, 1000); 
}
timesFlightInfo();