/**
 * we have a static global bool to knwo if the user is logged
 */

// when click the loggin button we validate the dat with our hardcoded usename and password
const loginbtn = document.querySelector(".logbutton");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const login = document.querySelector(".login");
const logout = document.querySelector(".logout");

const username = "admin";
const password = "admin";

let usernameValid = false;
let passwordValid = false;

loginbtn.addEventListener("click", () => {

    //validate "login"

    if (usernameInput.value !== username) {
        usernameInput.classList.add("bad");
        usernameValid = false;
    } else {
        usernameInput.classList.remove("bad");
        usernameValid = true;
    }

    if (passwordInput.value !== password) {
        passwordInput.classList.add("bad");
        passwordValid = false;
    } else {
        passwordInput.classList.remove("bad");
        passwordValid = true;
    }

    if (usernameValid && passwordValid) {
        session = true;
        logout.classList.remove("hidden");
        login.classList.add("hidden")

        document.querySelector(".login").classList.remove("active");
        document.querySelector(".home").classList.add("active");
        window.location = "#home";
    }
});