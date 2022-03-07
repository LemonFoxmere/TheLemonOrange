logo_reveal_tl.play()
logo_reveal_tl_size.play()
logo_reveal_tl_color.play()

anime({
    targets:"#title-text",
    letterSpacing:["1rem", 0],
    easing:"easeInOutQuint",
    duration: 2500,
    delay:100,
    opacity:[0,1]
})

// text typing animation
let options = {
    strings: [
        "Hello, I am a web developer",
        "Hello, I am an AI/ML researcher",
        "Hello, I am a graphics designer",
        "Hello, I am an animator",
        "Hello, I am a digital artist",
        "Hello, I am a cat lover",
        "Hello, I am a high schooler",
    ],
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 3300,
    typeSpeed: 30,
    backSpeed: 30,
    showCursor: false,
};
// let typed = new Typed('#hello-i-am', options)