var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
var user_name = [];
var user_password = [];
var newRecipe = [];

function search() {
    x = document.getElementById("id").value;
    y = document.getElementsByClassName("animals");
    for (i = 0; i < y.length; i++) {
        if (!y[i].innerHTML.toLowerCase().includes(x))
            y[i].style.display = "none";
        else {
            y[i].style.display = "list-item";
        }
    }
}

function getRndInteger() {
    return Math.floor(Math.random() * (3)) + 1;
}

function randomRecipe() {
    var dailyDish = "templet" + getRndInteger() + ".html";
    window.open(dailyDish, "_self");
}

function fmce() {
    male = document.getElementById("male");
    female = document.getElementById("female");
    avatar = document.getElementById("avatar");
    if (male.checked)
        avatar.src = "img/avatar-icon-images-4.jpg";
    else
        avatar.src = "img/female.png";
}

function check() {
    pass = document.getElementById("pass");
    user = document.getElementById("name").value;
    if (pass.value.match(passw)) {
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
        user_name.push(user);
        user_password.push(pass.value);
        localStorage.setItem("user_name", user_name);
        localStorage.setItem("user_password", user_password);
        location.href = 'home.html';
    } else {
        alert("Your password must contain at least one upper case letter and lower case letter and one number digit (ex: 0, 1, 2, 3, etc.) 5)");
        return false;
    }
}

function login() {
    x = document.getElementById("name").value;
    pa = document.getElementById("pass").value;
    if (x == localStorage.getItem("user_name") &&
        pa == localStorage.getItem("user_password")) {
        alert("hello " + x);
    } else {
        alert("please enter a vaild input");
    }
}

function usr_greading() {
    if (localStorage.getItem("user_name") != "" ||
        localStorage.getItem("user_password") != "") {

        usr = document.getElementsByClassName("usr_wlc");
        usr[3].innerText = "hello " + localStorage.getItem("user_name");
    }
}

function clearArr() {
    newRecipe.length = 0;
}

function addStep() {
    var step = prompt("Please enter the next step", "e.g. Poil water");
    newRecipe.push(step);
    while (confirm("Do you wanna add another step?")) {
        var step = prompt("Please enter the next step", "e.g. Poil water");
        newRecipe.push(step);
    }
}

function addRecipe() {
    addStep();
    for (i = 0; i < newRecipe.length; i++) {
        var out = (i + 1) + " - " + newRecipe[i];
        alert(out);
    }
}

function is_admin() {
    ad = document.getElementsByClassName("usr_wlc");
    if (localStorage.getItem("user_name") != "" ||
        localStorage.getItem("user_password") != "") {
        ad[0].style.display = "none";
        ad[1].style.display = "none";

    } else {
        ad[2].style.display = "none";
        return false;
    }
}

function logout() {

    localStorage.setItem("user_name", "");
    localStorage.setItem("user_password", "");


}

/*
function admin() {
    this.userName = null;
    this.password = null;
    this.recipes = null;
}

var admins = [];

// if Admin Doesn't exist
var newAdmin = new admin();
newAdmin.userName = 'aymanred121';
newAdmin.password = "plzD0n'tPntrtMe";

admins.push(newAdmin);
*/