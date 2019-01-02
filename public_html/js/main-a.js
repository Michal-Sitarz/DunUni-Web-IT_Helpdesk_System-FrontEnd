var inputSearchBarTICKET = document.getElementById("search-bar-ticket");
var inputSearchBarUSER = document.getElementById("search-bar-user");
var inputSearchBarDEVICE = document.getElementById("search-bar-device");

// search bar event handlers
if(inputSearchBarTICKET != null){
    inputSearchBarTICKET.addEventListener("focus",enterInputSearchBarTICKET);
    inputSearchBarTICKET.addEventListener("focusout",checkInputSearchBarTICKET);
    setInputSearchBarToDefault(inputSearchBarTICKET, "Search for... TICKET");
}
if(inputSearchBarUSER != null){
    inputSearchBarUSER.addEventListener("focus",enterInputSearchBarUSER);
    inputSearchBarUSER.addEventListener("focusout",checkInputSearchBarUSER);
    setInputSearchBarToDefault(inputSearchBarUSER, "Search for... USER"); 
}
if(inputSearchBarDEVICE != null){
    inputSearchBarDEVICE.addEventListener("focus",enterInputSearchBarDEVICE);
    inputSearchBarDEVICE.addEventListener("focusout",checkInputSearchBarDEVICE);
    setInputSearchBarToDefault(inputSearchBarDEVICE, "Search for... DEVICE");
}

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


// search bar fields functionality
function setInputSearchBarToDefault(element, defaultText){
    element.value = defaultText;
    element.style.color = "gray";
}

/*
function enterInputSearchBar(element){
    if(element.value === "Search for... TICKET"){
        element.value = "";
        element.style.color = "black";
    }
}
*/
function enterInputSearchBarTICKET(){
    if(inputSearchBarTICKET.value === "Search for... TICKET"){
        inputSearchBarTICKET.value = "";
        inputSearchBarTICKET.style.color = "black";
    }
}
function enterInputSearchBarUSER(){
    if(inputSearchBarUSER.value === "Search for... USER"){
        inputSearchBarUSER.value = "";
        inputSearchBarUSER.style.color = "black";
    }
}
function enterInputSearchBarDEVICE(){
    if(inputSearchBarDEVICE.value === "Search for... DEVICE"){
        inputSearchBarDEVICE.value = "";
        inputSearchBarDEVICE.style.color = "black";
    }
}

function checkInputSearchBarTICKET(){
    if(inputSearchBarTICKET.value === "")
    {
        setInputSearchBarToDefault(inputSearchBarTICKET, "Search for... TICKET");
    }
}
function checkInputSearchBarUSER(){
    if(inputSearchBarUSER.value === "")
    {
        setInputSearchBarToDefault(inputSearchBarUSER, "Search for... USER");
    }
}
function checkInputSearchBarDEVICE(){
    if(inputSearchBarDEVICE.value === "")
    {
        setInputSearchBarToDefault(inputSearchBarDEVICE, "Search for... DEVICE");
    }
}