// if user is on mobile
let is_mobile = () => window.innerWidth < 900
let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if(isSafari) document.querySelectorAll(".shadow-logo").forEach(e => e.classList.add("disable-hidden"))