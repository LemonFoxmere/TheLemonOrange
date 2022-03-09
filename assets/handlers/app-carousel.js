let change_innerhtml = (id, new_val) => {
    anime({
        targets:`#${id}`,
        opacity: 0,
        duration:150,
        easing: "linear",
        complete: ani => {
            document.getElementById(id).innerHTML = new_val;
            anime({
                targets:`#${id}`,
                easing: "linear",
                opacity: 1,
                duration:150,
            })
        }
    })
}

let update_medias = (target) => {
    document.querySelectorAll(".connection-img").forEach(e => {
        if(target[e.id] === undefined){
            e.classList.add("noheight")
        } else {
            if(target[e.id] !== 1) e.parentElement.href = target[e.id]
            e.classList.remove("noheight")
        }
    })
}

let update_logo = (target) => {
    document.querySelectorAll(".logo-3d").forEach(e => {
        if(e.id === target){
            e.classList.remove("logo-icon-hidden")
            e.style.zIndex = 2
        } else {
            e.classList.add("logo-icon-hidden")
            e.style.zIndex = 1
        }
    })
}

let app_index = 0
// let available_apps = ["lemonorange", "deepfusion", "musiccat", "aivis", "renderingengine"]
let available_apps = [
    { // original one
        title:"My Projects 🥡",
        description:"The app icon on the left is interactive! You can browse through my featured projects on there if you like, and the description for each one will pop up here.",
        medias:{"twitter-conn":"https://twitter.com/LemonOrangeTW",
                "reddit-conn":"https://www.reddit.com/user/The747IsDead",
                "youtube-conn":"https://www.youtube.com/channel/UCut2xeBl7HcPEPatqpEUoQw",
                "github-conn":"https://github.com/LemonOrangeWasTaken"},
        logo:"logo-container"
    },
    { // DeepFusion
        title:"DeepFusion",
        description:" In a nutshell: DeepFusion is an app that provides allows you to create and train neural networks graphically. It allows you to create, train, and test neural networks without any code.<br>Check it out by clicking the \"Launch\" button in the app icon!",
        medias:{"github-conn":"https://github.com/LemonOrangeWasTaken/DeepFusion",
                "launch-conn":"https://deepfusion.org"},
        logo:"deepfusion-icon"
    }
]

// event listner for buttons
document.getElementById("logo-trans-right").onclick = e => {
    app_index += 1
    if(app_index > available_apps.length-1) app_index = 0

    // get the new project object
    let data = available_apps[app_index]
    change_innerhtml("project-title", data.title)
    change_innerhtml("project-description", data.description)
    update_medias(data.medias)
    update_logo(data.logo)
}
document.getElementById("logo-trans-left").onclick = e => {
    app_index -= 1
    if(app_index < 0) app_index = available_apps.length - 1
    let data = available_apps[app_index]
    change_innerhtml("project-title", data.title)
    change_innerhtml("project-description", data.description)
    update_medias(data.medias)
    update_logo(data.logo)
}