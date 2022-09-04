/*typing animation control  */

var typed = new Typed(".typing", {
    strings: ["FrontEnd", "BackEnd", "FullStack"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* aside control */
const nav = document.querySelector(".nav");
const navlist = nav.querySelectorAll("li");
const totalNavList = navlist.length;
const allSections = document.querySelectorAll(".section");
const totalSection = allSections.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                allSections[j].classList.add("back-section");
            } else {
                allSections[j].classList.remove("back-section");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {

        }
    });
}

function showSection(section) {

    for (let i = 0; i < totalSection; i++) {
        allSections[i].classList.remove("active");
    }

    const target = section.getAttribute("href");
    document.querySelector(target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSections[i].classList.toggle("open");
    }
}