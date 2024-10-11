var typed = new Typed(".typing",{
    strings:["Web Designer " , "Web Developer" ,"Web Designer" , "Web Developer"],
    typeSpeed:100,
     BackSpeed:60,
     loop:true
})


////Aside Start





























let section = document.querySelector(".skills");
let skills = document.querySelectorAll(".progress .progress-in");

window.onscroll = function() {
  
    if (window.scrollY >= section.offsetTop - 100) {
        console.log("Reached Section About");
        skills.forEach((skill) => {
          
            skill.style.width = skill.getAttribute('data-width');
        });
    }
};




