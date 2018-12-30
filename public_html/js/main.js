// event listeners
document.getElementById("btn-helpdesk-guide").addEventListener("click",loadPage_HelpdeskGuide);
document.getElementById("btn-report-incident").addEventListener("click",loadPage_ReportIncident);
document.getElementById("btn-new-request").addEventListener("click",loadPage_NewRequest);
document.getElementById("btn-tickets-history").addEventListener("click",loadPage_TicketsHistory);

function loadPage_HelpdeskGuide(){
    alert(" + - -- --- ----- ------- ----- --- -- - +\n\+  Helpdesk Guide available soon.  +\n\ + - -- --- ----- ------- ----- --- -- - +");
}

function loadPage_ReportIncident(){

}

function loadPage_NewRequest(){

}

function loadPage_TicketsHistory(){
    window.location = "historical-tickets.html";
}