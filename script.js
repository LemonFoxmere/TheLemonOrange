logo_reveal_tl.play()
logo_reveal_tl_size.play()
logo_reveal_tl_color.play()

// text typing animation
let options = {
    strings: [
        "web developer",
        "software engineer",
        "AI/ML researcher",
        "graphics designer",
        "digital artist",
        "animator",
        "cat lover",
    ],
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 3300,
    typeSpeed: 30,
    backSpeed: 30,
    showCursor: false,
};
let typed = new Typed('#hello-i-am', options)