var inputUsername = document.getElementById("inputUsername");
var inputPassword = document.getElementById("inputPassword");
var username = "";
var password = "";


setInputUsernameToDefault();
setInputPasswordToDefault();

// event listeners
document.getElementById("btnLogin").addEventListener("click",login);
inputUsername.addEventListener("focus",enterInput_Username);
inputPassword.addEventListener("focus",enterInput_Password);
inputUsername.addEventListener("focusout",checkInput_Username);
inputPassword.addEventListener("focusout",checkInput_Password);



function setInputUsernameToDefault(){
    inputUsername.value = "Username";
    inputUsername.style.color = "gray";
}

function setInputPasswordToDefault(){
    inputPassword.value = "Password";
    inputPassword.style.color = "gray";
    inputPassword.type = "text";
}


function enterInput_Username(){
    if(inputUsername.value === "Username"){
        inputUsername.value = "";
        inputUsername.style.color = "black";
    }
}

function enterInput_Password(){
    if(inputPassword.value === "Password"){
        inputPassword.value = "";
        inputPassword.style.color = "black";
        inputPassword.type = "password";
    }
}

function checkInput_Username(){
    if(inputUsername.value === "")
    {
        setInputUsernameToDefault();
    }
    else{
        username = inputUsername.value;
    }
}

function checkInput_Password(){
    if(inputPassword.value === "")
    {
        setInputPasswordToDefault();
    }
    else{
        password = inputPassword.value;
    }
}

function login(){
    alert('username: '+username+'\npassword: '+password);
}


