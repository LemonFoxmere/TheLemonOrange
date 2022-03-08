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
    }, () => {
        document.getElementById("title-text").classList.remove("opacity-none")
        document.getElementById("logo-bg").classList.remove("app-bg-style")
        document.getElementById("logo-bg-shadow").classList.remove("app-bg-shadow-style")
    })
}, 20)