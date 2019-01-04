
// main buttons event listeners
if(document.getElementById("btn-helpdesk-guide") != null){
    document.getElementById("btn-helpdesk-guide").addEventListener("click",loadPage_HelpdeskGuide);
}
if(document.getElementById("btn-analytics") != null){
    document.getElementById("btn-analytics").addEventListener("click",loadPage_Analytics);
}
if(document.getElementById("btn-manage-users") != null){
    document.getElementById("btn-manage-users").addEventListener("click",loadPage_ManageUsers);
}
if(document.getElementById("btn-manage-devices") != null){
    document.getElementById("btn-manage-devices").addEventListener("click",loadPage_ManageDevices);
}
if(document.getElementById("btn-add-new-user") != null){
    document.getElementById("btn-add-new-user").addEventListener("click",loadPage_AddNewUSER);
}
if(document.getElementById("btn-add-new-device") != null){
    document.getElementById("btn-add-new-device").addEventListener("click",loadPage_AddNewDEVICE);
}



// load page functions
function loadPage_HelpdeskGuide(){
    window.location = "helpdesk-guide-a.html";
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

function loadPage_AddNewUSER(){
    window.location = "manage-users-add-new.html";
}

function loadPage_AddNewDEVICE(){
    window.location = "manage-devices-add-new.html";
}

