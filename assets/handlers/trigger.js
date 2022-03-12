passed_trigger = (trigger_id, set_trigger_id, when_passed, when_back) => {
    if(document.getElementById(trigger_id).getBoundingClientRect().top < 
            document.getElementById(set_trigger_id).getBoundingClientRect().top){
        when_passed()
    } else {
        when_back()
    }
}

let trig1_passed = false, trig1_passed_prev = false
let trig2_passed = false, trig2_passed_prev = false
let trig3_passed = false, trig3_passed_prev = false
let trig4_passed = false, trig4_passed_prev = false
let trig4_1_passed = false, trig4_1_passed_prev = false

let scroll_with_page_y = 0

// update loops
window.onscroll = e => {
    passed_trigger("trig-1", "trig-beta", ()=>{ // trigger 1 which fades out the title text and move the logo to the other side
        trig1_passed = true
        if(trig1_passed_prev == false && trig1_passed == true){ // prevent repeated execution
            document.getElementById("title-text").classList.add("opacity-none")
            document.getElementById("logo-bg").classList.add("app-bg-style")
            document.getElementById("logo-bg-shadow").classList.add("app-bg-shadow-style")
            // if on mobile, hide the connection buttons
            if(is_mobile()) document.querySelectorAll(".connection-btn").forEach(e => e.classList.add("disable-hidden"))
            document.getElementById("page1").style.opacity = 1
        }
        trig1_passed_prev = true
    }, () => {
        trig1_passed = false
        if(trig1_passed_prev == true && trig1_passed == false){ // prevent repeated execution
            document.getElementById("title-text").classList.remove("opacity-none")
            document.getElementById("logo-bg").classList.remove("app-bg-style")
            document.getElementById("logo-bg-shadow").classList.remove("app-bg-shadow-style")
            document.querySelectorAll(".connection-btn").forEach(e => e.classList.remove("disable-hidden")) // for mobile
            document.getElementById("page1").style.opacity = 0
        }
        trig1_passed_prev = false
    })

    passed_trigger("trig-2", "trig-epsilon", ()=>{ // trigger 2 which transitions the page to an interactive project page
        trig2_passed = true
        if(trig2_passed_prev == false && trig2_passed == true){ // prevent repeated execution
            update_project_to(app_index, false, true)

            document.getElementById("logo-trans-right").classList.remove("disable-hidden")
            document.getElementById("logo-trans-left").classList.remove("disable-hidden")
            document.getElementById("carousel-indicator-container").classList.remove("disable-hidden")

            document.querySelectorAll(".connection-btn").forEach(e => e.classList.remove("disable-hidden"))
    
            // unhide the projects page and hide the about page
            document.getElementById("page1").classList.add("disable-hidden")
            document.getElementById("logo-bg").classList.add("project-mobile")
            document.getElementById("page2").classList.remove("disable-hidden")
        }
        trig2_passed_prev = true
    }, () => {
        trig2_passed = false
        if(trig2_passed_prev == true && trig2_passed == false){ // prevent repeated execution
            update_project_to(0)
        
            document.getElementById("logo-trans-right").classList.add("disable-hidden")
            document.getElementById("logo-trans-left").classList.add("disable-hidden")
            document.getElementById("carousel-indicator-container").classList.add("disable-hidden")
    
            if(is_mobile()) document.querySelectorAll(".connection-btn").forEach(e => e.classList.add("disable-hidden"))

            // hide the projects page and unhide the about page
            document.getElementById("page1").classList.remove("disable-hidden")
            document.getElementById("logo-bg").classList.remove("project-mobile")
            document.getElementById("page2").classList.add("disable-hidden")    
        }
        trig2_passed_prev = false
    })

    passed_trigger("trig-3", "trig-epsilon", ()=>{ // trigger 3 which transitions the page to a contact form
        trig3_passed = true
        if(trig3_passed_prev == false && trig3_passed == true){ // prevent repeated execution
            // hide the interactive element
            document.getElementById("carousel-indicator-container").classList.add("disable-hidden")
            document.getElementById("logo-trans-right").classList.add("disable-hidden")
            document.getElementById("logo-trans-left").classList.add("disable-hidden")

            // update_project_to(0)
            hide_connections()

            // hide the project page
            document.getElementById("page2").classList.add("disable-hidden")
            document.getElementById("page3").classList.remove("disable-hidden")

            // change the logo card to a contact card
            document.getElementById("logo-bg").classList.add("app-bg-contact-style")
            document.getElementById("logo-bg").classList.remove("app-bg-style")
            document.getElementById("logo-bg-shadow").classList.add("app-bg-contact-shadow-style")
            document.getElementById("logo-bg-shadow").classList.remove("app-bg-shadow-style")
            
            // add contact mode to container to configure everything inside
            document.getElementById("logo-bg-container").classList.add("contact-mode")

            // show all contact elements
            document.querySelectorAll(".contact-elements").forEach(e => e.classList.remove("disable-hidden"))
        }
        trig3_passed_prev = true
    }, () => {
        trig3_passed = false
        if(trig3_passed_prev == true && trig3_passed == false){ // prevent repeated execution
            // update_project_to(app_index, false, true)
            update_connections_to(app_index)

            // hide all contact elements
            document.querySelectorAll(".contact-elements").forEach(e => e.classList.add("disable-hidden"))

            // show the interactive element
            document.getElementById("logo-trans-right").classList.remove("disable-hidden")
            document.getElementById("logo-trans-left").classList.remove("disable-hidden")
            document.getElementById("carousel-indicator-container").classList.remove("disable-hidden")

            // unhide the projects page
            document.getElementById("page2").classList.remove("disable-hidden")
            document.getElementById("page3").classList.add("disable-hidden")

            // change the logo card back to normal
            document.getElementById("logo-bg").classList.add("app-bg-style")
            document.getElementById("logo-bg").classList.remove("app-bg-contact-style")
            document.getElementById("logo-bg-shadow").classList.add("app-bg-shadow-style")
            document.getElementById("logo-bg-shadow").classList.remove("app-bg-contact-shadow-style")

            document.getElementById("logo-bg-container").classList.remove("contact-mode")
        }
        trig3_passed_prev = false
    })

    passed_trigger("trig-4", "trig-alpha", ()=>{ // trigger 3 which transitions the page to a contact form
        trig4_passed = true
        if(trig4_passed_prev == false && trig4_passed == true && !is_mobile()){ // prevent repeated execution
            document.getElementById("logo-bg-container").style.position = "absolute"
            document.getElementById("logo-bg-container").style.top = `${(
                document.getElementById("trig-4").getBoundingClientRect().top - document.getElementById("trig-alpha").getBoundingClientRect().top) + window.scrollY}px`
        }
        trig4_passed_prev = true
    }, () => {
        trig4_passed = false
        if(trig4_passed_prev == true && trig4_passed == false && !is_mobile()){ // prevent repeated execution
            document.getElementById("logo-bg-container").style.top = `0px`
            document.getElementById("logo-bg-container").style.position = "fixed"
        }
        trig4_passed_prev = false
    })

    passed_trigger("trig-4", "trig-delta", ()=>{ // trigger 3 which transitions the page to a contact form
        trig4_1_passed = true
        if(trig4_1_passed_prev == false && trig4_1_passed == true){ // prevent repeated execution

            document.getElementById("logo-bg-container").classList.add("disable-hidden")
            document.getElementById("page3").classList.add("disable-hidden")
            document.getElementById("end-screen").classList.remove("disable-hidden")
        }
        trig4_1_passed_prev = true
    }, () => {
        trig4_1_passed = false
        if(trig4_1_passed_prev == true && trig4_1_passed == false){ // prevent repeated execution

            document.getElementById("logo-bg-container").classList.remove("disable-hidden")
            document.getElementById("page3").classList.remove("disable-hidden")
            document.getElementById("end-screen").classList.add("disable-hidden")
        }
        trig4_1_passed_prev = false
    })
}

window.onresize = () => {
    if((trig1_passed && !trig2_passed)){
        // reset connection buttons if screen width is big enough again
        if(!is_mobile()){document.querySelectorAll(".connection-btn").forEach(e => e.classList.remove("disable-hidden"))}
        else{document.querySelectorAll(".connection-btn").forEach(e => e.classList.add("disable-hidden"))}    
    }
}