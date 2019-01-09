var helpTicketStatus = document.getElementById("ticket-select-category-help-icon");
var allInputFields = document.getElementsByTagName("input");
var allTextFields = document.getElementsByTagName("textarea");
var allSelectFields = document.getElementsByTagName("select");



// event listeners
helpTicketStatus.addEventListener("mouseover",toggleHelpDisplay);
helpTicketStatus.addEventListener("mouseout",toggleHelpDisplay);
document.getElementById("btn-ticket-submit").addEventListener("click",submitTicket);
document.getElementById("btn-ticket-note-add-new").addEventListener("click",postNewNote);

function toggleHelpDisplay(){
    let popupBox = document.getElementById("ticket-select-category-help-popup");
    popupBox.classList.toggle("show-help-box");
}

function submitTicket(){
    //validate all fields
    alert("New ticket has been raised."); // and add new ticket entry to DB
    // clear fields
    clearAllUserInputFields();
}

/* >>>>>>>>>>>>>>>>>>> DELETE <<<<<<<<<<<<<<<<< */
function submitNewUser(){
    if(validateInputFields() === true){
        alert("New User: "
                +document.getElementById("add-new-user-first-name").value
                +" "
                +document.getElementById("add-new-user-last-name").value
                +" has been added to the database.");
        //assign values to User object and update a database
        clearInputFields();
    }
    else{
        alert("Please fill in all the fields (all fields are mandatory!).");
    }
}
/* >>>>>>>>>>>>>>>>>>> DELETE <<<<<<<<<<<<<<<<< */


function postNewNote(){
    let noteText = document.getElementById("note-new-text").value;    
    if(noteText == ""){
        alert("Please enter text of your note into provided field.");
        return;
    }
    let username = document.getElementById("signed-in-username").innerHTML;
    let dateTime = getCurrentTimeDate();
    let noteStamp  = username + "<br>" + dateTime;
    
    let n = document.getElementById("notes-list");
    existingHTML = n.innerHTML;
    latestNote = '<div id="note"><div id="note-stamp">'+noteStamp+'</div><div id="note-text">'+noteText+'</div></div>';
    n.innerHTML = latestNote + existingHTML;
        
    alert("New note has been posted.");
    //clear input field
    document.getElementById("note-new-text").value = "";
}


function getCurrentTimeDate(){
    var currentDate = new Date();
    var time = currentDate.getHours() + ":" 
            + currentDate.getMinutes() + ":"
            + currentDate.getSeconds();
    var date = currentDate.getDate().toString();
    if(date.length < 2){
        d = date;
        date = '0' + d;
    }
    var month = (currentDate.getMonth()+1).toString();
    if(month.length < 2){
        m = month;
        month = '0' + m;
    }
    date = date + "/" + month + "/" + currentDate.getFullYear();
    
    return time + " @ " + date;
}


function validateAllUserInputFields(){
    for(let i=0; i<allInputFields.length; i++){
        if(allInputFields[i].value == ""){
            return false;
        }
    }
    return true;
}

function clearAllUserInputFields(){
    for(let i=0; i<allInputFields.length; i++){
        allInputFields[i].value = "";
    }
    for(let i=0; i<allTextFields.length; i++){
        allTextFields[i].value = "";
    }
    for(let i=0; i<allSelectFields.length; i++){
        allSelectFields[i].value = "none-chosen";
    }
}