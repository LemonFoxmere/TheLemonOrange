let detect_trig_alpha = detect_trig_beta = detect_trig_delta = detect_trig_omicron = []

passed_trigger = (trigger_id, set_trigger_id, callback) => {
    if(document.getElementById(trigger_id).getBoundingClientRect().top < 
            document.getElementById(set_trigger_id).getBoundingClientRect().top){
        callback()
    }
}

setInterval(() => {
        passed_trigger("trig-1", "trig-beta", ()=>{
        console.log("passed")
    })
}, 1)