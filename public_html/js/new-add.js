var addNewUser_CreateAccountItself = document.getElementById("btn-create-account-submit");
var addNewUser = document.getElementById("btn-add-new-user-submit");
var addNewDevice = document.getElementById("btn-add-new-device-submit");
var allInputFields = document.getElementsByClassName("input-add-new");

if(addNewUser_CreateAccountItself != null){
    addNewUser_CreateAccountItself.addEventListener("click",submitNewUser);
    document.getElementById("btn-create-account-cancel").addEventListener("click",cancelCreatingAccount);
}

if(addNewUser != null){
    addNewUser.addEventListener("click",submitNewUser);
    
}
if(addNewDevice != null){
    addNewDevice.addEventListener("click",submitNewDevice);
}

function cancelCreatingAccount(){
    window.location = "login.html";
}

function submitNewUser(){
    if(validateInputFields() === true){
        alert("New User: "
                +document.getElementById("add-new-user-first-name").value
                +" "
                +document.getElementById("add-new-user-last-name").value
                +" has been added to the database.");
        //assign values to User object and update a database
        clearInputFields();
        if(addNewUser_CreateAccountItself != null){
            alert("You can now login using your new account's details.");
            window.location = "login.html";
        }
    }
    else{
        alert("Please fill in all the fields (all fields are mandatory!).");
    }
}

function submitNewDevice(){
    if(validateInputFields() === true){
        alert("New Device: "
                +document.getElementById("add-new-device-hostname").value
                +" ("
                +document.getElementById("add-new-device-type").value
                +") has been added to the database.");
        
        //assign values to Device object and update a database
        clearInputFields();
    }
    else{
        alert("Please fill in all the fields (all fields are mandatory!).");
    }
}

function validateInputFields(){
    for(let i=0; i<allInputFields.length; i++){
        if(allInputFields[i].value == ""){
            return false;
        }
    }
    return true;
}

function clearInputFields(){
    for(let i=0; i<allInputFields.length; i++){
        allInputFields[i].value = "";
    }
}

