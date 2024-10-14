var typed = new Typed(".typing", {
    strings: ["Web Designer ", "Web Developer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


////Aside Start
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
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
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
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
        SecureToken: "3e08a2c7-dfa6-428a-a440-a12e1d8b4853",
        To: 'ahmedabdelgaber74@gmail.com',
        From: "ahmedabdelgaber74@gmail.com",
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





















