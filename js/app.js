const sections = document.querySelectorAll("main section");     // sections to build nav
const nav = document.querySelector("#navbar__list");     // nav list required to fill

// scrolling function
function sectionScroll(e) {
    e.preventDefault();
    window.scrollTo( {
            top: document.querySelector(this.getAttribute("href")).offsetTop,
            left: 0,
            behavior: "smooth"
        });
}

// build the nav
(function() {
    let container="";
    for(const section of sections) {
        container+=`<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
    }
    nav.innerHTML=container;
})();

// Add class 'active' to section when near top of viewport
const navList = document.querySelectorAll("nav li");
window.addEventListener("scroll",function() {
    if(sections[1].offsetTop-200>window.scrollY) {
        sections[0].classList.add("active");
        navList[0].classList.add("active");
        sections[sections.length-1].classList.remove("active");
        navList[navList.length-1].classList.remove("active");
    }
    else if(sections[sections.length-1].offsetTop-200<=window.scrollY) {
        sections[sections.length-1].classList.add("active");
        navList[navList.length-1].classList.add("active");
        sections[0].classList.remove("active");
        navList[0].classList.remove("active");
    }
    else {
        sections[0].classList.remove("active");
        navList[0].classList.remove("active");
        sections[sections.length-1].classList.remove("active");
        navList[navList.length-1].classList.remove("active");
    }
    for(let i=1;i<sections.length-1;i++) {
        if(sections[i].offsetTop-200<=window.scrollY&&sections[i+1].offsetTop-200>window.scrollY) {
            sections[i].classList.add("active");
            navList[i].classList.add("active");
        }
        else {
            sections[i].classList.remove("active");
            navList[i].classList.remove("active");
        }

    }
});
// Listening to click event to scroll
(function() {
    const navLinks = document.querySelectorAll("nav a");
    for(const navLink of navLinks) {
        navLink.addEventListener("click", sectionScroll);
    }
})();




