if(!is_mobile()){ // if user is not on mobile
    logo_reveal_tl.play()
    logo_reveal_tl_size.play()
    logo_reveal_tl_color.play()
} else { // skip the whole animation
    logo_reveal_tl.seek(9999)
    logo_reveal_tl_size.seek(9999)
    logo_reveal_tl_color.seek(9999)
}

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

let options_language = {
    strings: [
        "hello!",
        "哈咯!",
        "안녕!",
        "Tere!",
        "Terve!",
        "hola!",
        "salut!",
        "hallo!",
    ],
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 2200,
    typeSpeed: 65,
    backSpeed: 65,
    showCursor: false,
};
let typed_language = new Typed('#hello-language', options_language)