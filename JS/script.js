
// var typed = new Typed(".typing", {
//     strings: ["Web Designer ", "Web Developer", "Web Designer", "Web Developer"],
//     typeSpeed: 100,
//     BackSpeed: 60,
//     loop: true
// })


////Aside Start
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
<<<<<<< HEAD

=======
>>>>>>> 3721eb7a2f4be857da5201b96f1a699c8940a0db
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {

        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }

            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this)
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
<<<<<<< HEAD
function animateProgressBars(section) {
    const progressBars = section.querySelectorAll(".progress-in");
    progressBars.forEach(bar => {
        // Save original width if not saved yet
        if (!bar.dataset.width) {
            bar.dataset.width = bar.style.width;
        }
        // Set width to 0 and remove transition temporarily
        bar.style.transition = 'none';
        bar.style.width = '0%';

        // Force reflow so the browser registers the 0% width
        void bar.offsetWidth;

        // Apply transition and target width
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = bar.dataset.width;
    });
}

function animatePortfolioItems(section) {
    const items = section.querySelectorAll(".portfolio-item");
    items.forEach(item => {
        item.classList.remove("animate-in");
    });
    // Force reflow
    void section.offsetWidth;
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate-in");
        }, index * 120);
    });
}

function animateServiceItems(section) {
    const items = section.querySelectorAll(".service-item");
    items.forEach(item => {
        item.classList.remove("animate-in", "animate-done");
    });
    // Force reflow
    void section.offsetWidth;
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate-in");
            item.addEventListener("animationend", function handler(e) {
                if (e.animationName === "serviceItemIn") {
                    item.classList.remove("animate-in");
                    item.classList.add("animate-done");
                    item.removeEventListener("animationend", handler);
                }
            });
        }, index * 150);
    });
}

function animateAboutItems(section) {
    const items = section.querySelectorAll(".about-text, .personal-info, .skills, .education, .experience");
    items.forEach(item => {
        item.classList.add("about-anim-item");
        item.classList.remove("animate-in");
    });
    // Force reflow
    void section.offsetWidth;
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate-in");
        }, index * 150);
    });
}

function animateContactItems(section) {
    // Animate titles from the left
    const titles = section.querySelectorAll(".contact-title, .contact-sub-title");
    titles.forEach(item => {
        item.classList.remove("animate-in");
    });

    // Animate info items and form from the right
    const items = section.querySelectorAll(".contact-info-item, .contact-form");
    items.forEach(item => {
        item.classList.remove("animate-in");
    });

    // Force reflow
    void section.offsetWidth;

    // Titles first (from left)
    titles.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate-in");
        }, index * 150);
    });

    // Then info items (from right), after titles
    const titleDelay = titles.length * 150;
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animate-in");
        }, titleDelay + index * 150);
    });
}

=======
>>>>>>> 3721eb7a2f4be857da5201b96f1a699c8940a0db
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
<<<<<<< HEAD
    const targetSection = document.querySelector("#" + target);
    targetSection.classList.add("active");

    // Animate about items and progress bars if in about section
    if (target === "about") {
        animateAboutItems(targetSection);
        // Delay progress bars slightly so they animate after the skills container slides in
        setTimeout(() => {
            animateProgressBars(targetSection);
        }, 300);
    } else {
        animateProgressBars(targetSection);
    }

    // Animate portfolio items if in portfolio section
    if (target === "portfolio") {
        animatePortfolioItems(targetSection);
    }
    
    // Animate service items if in service section
    if (target === "service") {
        animateServiceItems(targetSection);
    }

    // Animate contact items if in contact section
    if (target === "contact") {
        animateContactItems(targetSection);
    }
=======
    document.querySelector("#" + target).classList.add("active")
>>>>>>> 3721eb7a2f4be857da5201b96f1a699c8940a0db
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open")
    }
}






// Contact Me
function sendEmail(ev) {
    console.log("sendEmail function called");
    ev.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("textarea").value.trim();


    if (!name || !email || !subject || !message) {
        Swal.fire({
            icon: 'error',
            title: 'Fields are required',
            text: 'Please fill out all the fields before submitting.',
        });
        return;
    }

    Email.send({
        SecureToken: "0aedbd7b-4655-47c1-8a20-a6ad055a7af2",
        To: 'casharel1999@gmail.com',
        From: "casharel1999@gmail.com",
        Subject: subject,
        Body: "Name: " + name
            + "<br>Email: " + email
            + "<br>Subject: " + subject
            + "<br>Message: " + message
    }).then(
        message => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.',
            });
        }
    ).catch(
        error => {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an error sending your message.',
            });
            console.error("Error sending email: ", error);
        }
    );
}

<<<<<<< HEAD
// Animate on load if active section contains them
window.addEventListener('load', () => {
    const activeSection = document.querySelector(".section.active");
    if (activeSection) {
        // slight delay to ensure CSS has fully loaded
        setTimeout(() => {
            if (activeSection.id === "about") {
                animateAboutItems(activeSection);
                setTimeout(() => animateProgressBars(activeSection), 300);
            } else if (activeSection.id === "portfolio") {
                animatePortfolioItems(activeSection);
            } else if (activeSection.id === "service") {
                animateServiceItems(activeSection);
            } else if (activeSection.id === "contact") {
                animateContactItems(activeSection);
            }
        }, 100);
    }
});
=======

>>>>>>> 3721eb7a2f4be857da5201b96f1a699c8940a0db


