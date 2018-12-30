// event listeners
document.getElementById("btn-helpdesk-guide").addEventListener("click",loadPage_HelpdeskGuide);
document.getElementById("btn-analytics").addEventListener("click",loadPage_Analytics);
document.getElementById("btn-manage-users").addEventListener("click",loadPage_ManageUsers);
document.getElementById("btn-manage-devices").addEventListener("click",loadPage_ManageDevices);

function loadPage_HelpdeskGuide(){
    window.location = "helpdesk-guide.html";
}

function loadPage_Analytics(){
    window.location = "analytics.html";
}

function loadPage_ManageUsers(){
    window.location = "manage-users.html";
}

function loadPage_ManageDevices(){
    window.location = "manage-devices.html";
}
