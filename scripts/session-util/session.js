/**
 * we have a static global bool to knwo if the user is logged
 */

// when click the loggin button we validate the dat with our hardcoded usename and password
const loginbtn = document.querySelector(".logbutton");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const login = document.querySelector(".loginselector");
const logout = document.querySelector(".logoutselector");

const username = "admin";
const password = "admin";

let usernameValid = false;
let passwordValid = false;

function validateLogin() {
    //validate "login"
    if (usernameInput.value !== username) {
        usernameInput.classList.add("bad");
        usernameValid = false;
        usernameInput.value = "";
    } else {
        usernameInput.classList.remove("bad");
        usernameValid = true;
    }

    if (passwordInput.value !== password) {
        passwordInput.classList.add("bad");
        passwordValid = false;
        passwordInput.value = "";
    } else {
        passwordInput.classList.remove("bad");
        passwordValid = true;
    }

    // sucessfull loged
    if (usernameValid && passwordValid) {
        Cookies.set("session", true);
        window.location.reload();
    }
}

loginbtn.addEventListener("click", validateLogin);

logout.addEventListener("click", () => {
    Cookies.set("session", false);
    window.location.reload();
});

// checks if is logged everytime the page is loaded to show edit options
document.addEventListener("DOMContentLoaded", () => {
    // checks with true cause the value is a string and can be anything
    if (Cookies.get("session") === "true") {
        login.classList.add("hidden");
        logout.classList.remove("hidden");
        addEdits();
    } else {
        login.classList.remove("hidden");
        logout.classList.add("hidden");
        removeEdits();
    }

    // clean login input
    usernameInput.value = "";
    passwordInput.value = "";
});

function addEdits() {
    console.log("added");

    const paras = document.querySelectorAll(".editablePara");
    const bars = document.querySelectorAll(".editableBar");

    for (const para of paras) {
        para.addEventListener("click", function () { changePara(this) });
        para.classList.add("editable-content");
    }

    for (const bar of bars) {
        bar.addEventListener("click", function () { changeBar(this) });
        bar.classList.add("editable-content");
    }


}

function removeEdits() {
    console.log("removed");
    const paras = document.querySelectorAll(".editablePara");
    const bars = document.querySelectorAll(".editableBar");

    for (const para of paras) {
        para.removeEventListener("click", function () { changePara(this) });
        para.classList.remove("editable-content");
    }

    for (const bar of bars) {
        bar.removeEventListener("click", function () { changeBar(this) });
        bar.classList.remove("editable-content");
    }
}