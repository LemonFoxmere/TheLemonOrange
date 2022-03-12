function sendmail() {
    let is_email = email => {
        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;          
        return regexp.test(String(email).toLowerCase());
    }
    let valid_response = true
    let response_completed = false
    let animation_complete = false
    let animation_duration = 800
    let loop_delay = 1
    let loop_completed = 0

    let name = document.getElementById("contact-name").value
    if(name == ""){ // check name
        shake_element("contact-name")
        valid_response = false
    }

    let email = document.getElementById("contact-email").value
    if(!is_email(email)){ // check email
        shake_element("contact-email")
        valid_response = false
    }

    let message = document.getElementById("contact-msg").value
    if(message == ""){ // check message
        shake_element("contact-msg")
        valid_response = false
    }

    if(!valid_response) return

    // show the spinning rings and hide the button
    document.querySelectorAll(".spinning-ring").forEach(e => e.classList.remove("disable-hidden"))
    anime({
        targets:"#sendmail-button",
        width: is_mobile() ? 0 : "1rem",
        opacity:0,
        duration:1000,
        complete: ()=>{
            document.getElementById("sendmail-button").classList.add("disable-hidden")
        }
    })

    let check_anim = anime({ // check mark animation
        targets: '#ring-check-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0,1],
        duration: 1200,
        easing:'easeOutQuart',
        autoplay:false
    })

    let ring1_animation = anime({ // animate ring1 (biggest & slowest ring)
        targets:"#ring1",
        rotateX: 360,
        rotateY: 360,
        duration: animation_duration+100,
        easing:"linear",
        loop:true,
        // direction:"alternate",
        loopBegin: () => {
            loop_completed++
            if(loop_completed == loop_delay){ // this executes when the anti-spam delay finishes, and the email tries to get sent
                // NOTE: animation will not end until email promise is resolved
                emailjs.send("service_i5ad0ne", "template_x6004ai", {
                    from_name:name,
                    from_email:email,
                    message:message
                }).then(res => {
                    anime({
                        targets:"#ring2, #ring3",
                        opacity: 0,
                        duration: "100ms",
                        easing: "easeOutQuad",
                    })
                    response_completed = true
                })   
                // response_completed = true            
            }
            if(response_completed){ // when this statement is true, the animation will play 1 more time, the inner 2 rings will hide, and the animation will end
                anime({
                    targets:"#ring2, #ring3",
                    opacity: 0,
                    duration: 50,
                    easing: "linear",
                })
                document.getElementById("ring-check-path").style.opacity = 1
                ring1_animation.pause()
                check_anim.play()
                anime({
                    targets:"#ring1",
                    rotateY: [0, 180],
                    rotateX: [0, 180],
                    duration: 700,
                    easing: "easeOutQuart",
                    complete:() => {
                        ring2_animation.pause()
                        ring3_animation.pause()
                    }
                })
            }
        }
    })
    let ring2_animation = anime({ // animate ring1 (biggest & slowest ring)
        targets:"#ring2",
        rotateY: [45,135],
        duration: animation_duration+250,
        easing:"linear",
        loop:true,
        // direction:"alternate",
    })
    let ring3_animation = anime({ // animate ring1 (biggest & slowest ring)
        targets:"#ring3",
        rotateX: -360,
        duration: animation_duration,
        easing:"linear",
        loop:true,
    })
}

let shake_element = id => {
    anime({ // shake the email area and show invalid
        targets:`#${id}`,
        keyframes: [
            {translateX: 15},
            {translateX: -15},
            {translateX: 7},
            {translateX: -7},
            {translateX: 0},
        ],
        duration: 400,
        easing:"easeOutQuad"
    })
    anime({ // make it red and back again
        targets:`#${id}`,
        outlineColor: ["#ff4444", "#eaeaea"],
        duration: 1500,
        easing:"easeInOutQuad"
    })
}