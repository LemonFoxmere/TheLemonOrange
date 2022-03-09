passed_trigger = (trigger_id, set_trigger_id, when_passed, when_back) => {
    if(document.getElementById(trigger_id).getBoundingClientRect().top < 
            document.getElementById(set_trigger_id).getBoundingClientRect().top){
        when_passed()
    } else {
        when_back()
    }
}

// update loops
setInterval(() => {
    passed_trigger("trig-1", "trig-beta", ()=>{ // trigger 1 which fades out the title text and move the logo to the other side
        document.getElementById("title-text").classList.add("opacity-none")
        document.getElementById("logo-bg").classList.add("app-bg-style")
        document.getElementById("logo-bg-shadow").classList.add("app-bg-shadow-style")
        document.getElementById("page1").style.opacity = 1
    }, () => {
        document.getElementById("title-text").classList.remove("opacity-none")
        document.getElementById("logo-bg").classList.remove("app-bg-style")
        document.getElementById("logo-bg-shadow").classList.remove("app-bg-shadow-style")
        document.getElementById("page1").style.opacity = 0
    })

    passed_trigger("trig-2", "trig-epsilon", ()=>{ // trigger 2 which transitions the page to an interactive project page
        document.getElementById("logo-trans-right").classList.remove("disable-hidden")
        document.getElementById("logo-trans-left").classList.remove("disable-hidden")

        // unhide the projects page and hide the about page
        document.getElementById("page1").classList.add("disable-hidden")
        document.getElementById("page2").classList.remove("disable-hidden")
    }, () => {
        document.getElementById("logo-trans-right").classList.add("disable-hidden")
        document.getElementById("logo-trans-left").classList.add("disable-hidden")

        // hide the projects page and unhide the about page
        document.getElementById("page1").classList.remove("disable-hidden")
        document.getElementById("page2").classList.add("disable-hidden")    
    })
}, 10)