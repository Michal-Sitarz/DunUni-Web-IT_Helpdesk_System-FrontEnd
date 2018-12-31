var inputSearchBarTICKET = document.getElementById("search-bar-ticket");
var inputSearchBarUSER = document.getElementById("search-bar-user");
var inputSearchBarDEVICE = document.getElementById("search-bar-device");

setInputSearchBarToDefault(inputSearchBarTICKET, "Search for... TICKET");
setInputSearchBarToDefault(inputSearchBarUSER, "Search for... USER");
setInputSearchBarToDefault(inputSearchBarDEVICE, "Search for... DEVICE");

// event listeners
document.getElementById("btn-helpdesk-guide").addEventListener("click",loadPage_HelpdeskGuide);
document.getElementById("btn-analytics").addEventListener("click",loadPage_Analytics);
document.getElementById("btn-manage-users").addEventListener("click",loadPage_ManageUsers);
document.getElementById("btn-manage-devices").addEventListener("click",loadPage_ManageDevices);

inputSearchBarTICKET.addEventListener("focus",enterInputSearchBarTICKET);
inputSearchBarTICKET.addEventListener("focusout",checkInputSearchBarTICKET);


// load page functions
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

// set default appearance functions
function setInputSearchBarToDefault(element, defaultText){
    element.value = defaultText;
    element.style.color = "gray";
}
/*
function setInputSearchBarTICKET(){
    inputSearchBarTICKET.value = "Search for... TICKET";
    inputSearchBarTICKET.style.color = "gray";
}

function setInputSearchBarUSER(){
    inputSearchBarUSER.value = "Search for... USER";
    inputSearchBarUSER.style.color = "gray";
}

function setInputSearchBarDEVICE(){
    inputSearchBarDEVICE.value = "Search for... DEVICE";
    inputSearchBarDEVICE.style.color = "gray";
}
*/

function enterInputSearchBarTICKET(){
    if(inputSearchBarTICKET.value === "Search for... TICKET"){
        inputSearchBarTICKET.value = "";
        inputSearchBarTICKET.style.color = "black";
    }
}

function checkInputSearchBarTICKET(){
    if(inputSearchBarTICKET.value === "")
    {
        setInputSearchBarToDefault(inputSearchBarTICKET, "Search for... TICKET");
    }
}