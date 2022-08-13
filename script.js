var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var password = document.getElementById("password");

function eventAfterClick() {
    if (input.value.length > 0 &&
        password.value.length > 0) {
        alert("Access Granted");
    }else{
        alert("Access Denied");
    }
}

button.addEventListener("click", eventAfterClick);



