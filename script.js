logo_reveal_tl.play()
logo_reveal_tl_size.play()
logo_reveal_tl_color.play()

// text typing animation
let options = {
    strings: [
        "web developer",
        "software engineer",
        "AI/ML researcher",
        "UI designer",
        "digital artist",
        "animator",
        "cat lover",
    ],
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 3300,
    typeSpeed: 65,
    backSpeed: 65,
    showCursor: true,
    cursorChar: '_',
};
let typed = new Typed('#hello-i-am', options)