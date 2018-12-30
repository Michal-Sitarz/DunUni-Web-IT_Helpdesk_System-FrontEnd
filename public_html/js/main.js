// event listeners
document.getElementById("btnHelpdeskGuide").addEventListener("click",loadPage_HelpdeskGuide);
document.getElementById("btnReportIncident").addEventListener("click",loadPage_ReportIncident);
document.getElementById("btnNewRequest").addEventListener("click",loadPage_NewRequest);
document.getElementById("btnTicketsHistory").addEventListener("click",loadPage_TicketsHistory);

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