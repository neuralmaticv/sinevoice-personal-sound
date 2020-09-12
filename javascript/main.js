function navSlide() {
    const burger = document.querySelector(".burger-button");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle button
        nav.classList.toggle("nav-active");
        
        //Animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        
       //Burger button animation
       burger.classList.toggle("toggle");
    });
    
}
navSlide();