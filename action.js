//Show - hide JS
function decimal_show(){
    var decimal_mat = document.getElementById("decimal-mat");
    if(decimal_mat.style.display === "none"){
        decimal_mat.style.display = "block";
    }
    else{
        decimal_mat.style.display = "none";
    }
}
function binary_show(){
    var binary_mat = document.getElementById("binary-mat");
    if(binary_mat.style.display === "none"){
    binary_mat.style.display = "block";
    }
    else{
        binary_mat.style.display = "none";
    }
}
function octal_show(){
    var octal_mat = document.getElementById("octal-mat");
    if(octal_mat.style.display === "none"){
        octal_mat.style.display = "block";
    }
    else{
        octal_mat.style.display = "none";
    }
}
function hex_show(){
    var hex_mat = document.getElementById("hex-mat");
    if(hex_mat.style.display === "none"){
        hex_mat.style.display = "block";
    }
    else{
        hex_mat.style.display = "none";
    }
}

//Converting JS

//From decimal to other
function dtb(){
    console.log("Script running")
    dnumin = parseInt(prompt("Enter decimal no."));
    let dnumout = dnumin.toString(2);
    alert(`The binary number is: ${dnumout}`)
}
function dto(){
    console.log("Script running")
    dnumin = parseInt(prompt("Enter decimal no."));
    let dnumout = dnumin.toString(8);
    alert(`The octal number is: ${dnumout}`)
}
function dth(){
    console.log("Script running")
    dnumin = parseInt(prompt("Enter decimal no."));
    let dnumout = dnumin.toString(16);
    alert(`The Hexadecimal number is: ${dnumout}`)
}