function clearScreen() {
    document.getElementById("result").value ="";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value
    var q = eval(p);
    document.getElementById("result").value = q;
}


// var dt = new Date();
// document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +""+ (("0"+dt.getHours()+1).slice(-2)) +"."+calculate(("0" +dt.getMinutes()+1).slice(-2));



// Psw = prompt("Enter Password");
// Psw2 = prompt("Retype Password");

if (Psw === Psw2) {
    alert("Access Granted...you're now in!!");
} else {
    alert("Wrong Password Omo wereyy")
}


// function myFunction() {
//     document.getElementById("btnn").value
// }


// else {
//     alert("Access Granted...you're fully in!!");
// }

// else if ("Psw === Psw2") {
//     alert("Password does not match with each other");
// } else {
//     alert("Access Granted...you're fully in"); 
// }
