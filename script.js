var typingEffect=new Typed(".typedText",{
    strings:["Developer", "Web Designer","Pixel-Pefectionist"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
});


//Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.remove('bx-moon');
        darkmode.classList.add('bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.remove('bx-sun');
        darkmode.classList.add('bx-moon');
        document.body.classList.remove('active');
    }
};

//Scroll Animation

const sr=ScrollReveal({
    origin:"top",
    distance:"80px",
    dusration:2000,
    reset:true,
}
);

    sr.reveal(".social_icons",{});
    sr.reveal(".hello",{delay:200});
    sr.reveal(".featured-name",{delay:200});
    sr.reveal(".featured-text-info",{delay:200});
    sr.reveal(".featured-image",{delay:200});
    sr.reveal(".services-content",{interval:200});
    

    //About animation

    const srLeft=ScrollReveal({
        origin:"left",
        distance:"80px",
        duration:2000,
        rest:true,
    });
      
    srLeft.reveal(".about-container",{delay:200});
    srLeft.reveal(".contact-form",{delay:200});


    const srRight=ScrollReveal({
        origin:"Right",
        distance:"80px",
        duration:2000,
        rest:true,
    });
      
    srRight.reveal(".portfolio-content",{delay:200});



