var addNewUser = document.getElementById("btn-add-new-user-submit");
var addNewDevice = document.getElementById("btn-add-new-device-submit");


if(addNewUser != null){
    addNewUser.addEventListener("click",submitNewUser);
    
}
if(addNewDevice != null){
    addNewDevice.addEventListener("click",submitNewDevice);
}

function submitNewUser(){
    alert("New User: "
            +document.getElementById("add-new-user-first-name").value
            +" "
            +document.getElementById("add-new-user-last-name").value
            +" has been added to the database.");
    //assign values to User object and update a database
    clearInputFields();
}
function submitNewDevice(){
    alert("New Device: "
            +document.getElementById("add-new-device-hostname").value
            +" ("
            +document.getElementById("add-new-device-type").value
            +") has been added to the database.");
    //assign values to Device object and update a database
    clearInputFields();
}

function clearInputFields(){
    if (addNewUser != null){
        document.getElementById("add-new-user-first-name").value="";
        document.getElementById("add-new-user-last-name").value="";
        document.getElementById("add-new-user-email").value="";
        document.getElementById("add-new-user-password").value="";
    }
    if(addNewDevice != null){
        document.getElementById("add-new-device-hostname").value="";
        document.getElementById("add-new-device-type").value="";
        document.getElementById("add-new-device-serial-number").value="";
        document.getElementById("add-new-device-owner").value="";
    }
}