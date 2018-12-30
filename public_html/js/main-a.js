// event listeners
document.getElementById("btn-helpdesk-guide").addEventListener("click",loadPage_HelpdeskGuide);
document.getElementById("btn-analytics").addEventListener("click",loadPage_Analytics);
document.getElementById("btn-manage-users").addEventListener("click",loadPage_ManageUsers);
document.getElementById("btn-manage-devices").addEventListener("click",loadPage_ManageDevices);

function loadPage_HelpdeskGuide(){
    alert(" + - -- --- ----- ------- ----- --- -- - +\n\+  Helpdesk Guide available soon.  +\n\ + - -- --- ----- ------- ----- --- -- - +");
}

function loadPage_Analytics(){
    alert("Analytics tools available soon...");
}

function loadPage_ManageUsers(){
    window.location = "manage-users.html";
}

function loadPage_ManageDevices(){
    window.location = "manage-devices.html";
}
