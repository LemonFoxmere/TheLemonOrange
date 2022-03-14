// if user is on mobile
let is_mobile = () => window.innerWidth < 900
let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if(isSafari) document.querySelectorAll(".shadow-logo").forEach(e => e.classList.add("disable-hidden"))

if(is_mobile()){
    let real_height = document.getElementById("logo-bg-container").getBoundingClientRect().height
    document.getElementById("logo-bg-container").style.height = `${real_height}px`
}