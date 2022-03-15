let change_innerhtml = (id, new_val, no_transition) => {
    if(!no_transition){
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
        return
    }
    document.getElementById(id).innerHTML = new_val;
}

let update_medias = (target) => {
    document.querySelectorAll(".connection-img").forEach(e => {
        if(target[e.id] === undefined){
            // e.classList.add("noheight")
            e.parentElement.classList.add("noheight")
        } else {
            if(target[e.id] !== 1) e.parentElement.href = target[e.id]
            // e.classList.remove("noheight")
            e.parentElement.classList.remove("noheight")
        }
    })
}

let update_logo = (target) => {
    document.querySelectorAll(".logo-3d").forEach(e => {
        if(e.id === target){
            e.classList.remove("logo-icon-hidden")
        } else {
            e.classList.add("logo-icon-hidden")
        }
    })
}

let app_index = 0
// let available_apps = ["lemonorange", "deepfusion", "musiccat", "aivis", "renderingengine"]
let available_apps = [
    { // original one
        title:"My Projects 📦",
        description:"This app icon is interactive! You can browse through my featured projects on there if you like, and the description for each one will pop up here.",
        medias:{"twitter-conn":"https://twitter.com/LemonOrangeTW",
                "reddit-conn":"https://www.reddit.com/user/The747IsDead",
                "youtube-conn":"https://www.youtube.com/channel/UCut2xeBl7HcPEPatqpEUoQw",
                "github-conn":"https://github.com/LemonOrangeWasTaken"},
        logo:"logo-container",
        maintain:"🎉 This website is actively maintained!"
    },
    { // DeepFusion
        title:"DeepFusion",
        description:"DeepFusion is a graphical neural network creation platform. It allows you to create, train, and test neural networks without any code. It was also won several awards, so that's pretty neat.",
        medias:{"github-conn":"https://github.com/LemonOrangeWasTaken/DeepFusion",
                "launch-conn":"https://deepfusion.org"},
        logo:"deepfusion-icon",
        maintain:"🎉 This app is actively maintained!"
    },
    { // Cat Midi
        title:"Cat & Midi",
        description:"A glorified ML MIDI transcriber that I made to make cats sing songs I like. It was trained with <i>only</i> procedurally generated data, and it somehow works pleasantly well with real world music",
        medias:{"youtube-conn":"https://www.youtube.com/watch?v=5jNqtmPrc80",
                "github-conn":"https://github.com/LemonOrangeWasTaken/CatMusicV2",
                "reddit-conn":"https://www.reddit.com/r/programming/comments/o8qesl/i_taught_an_ai_to_make_cats_sing/"},
        logo:"catmidi-icon",
        maintain:"This project is no longer being maintained<br>(although I might come back to it later)."
    },
    { // AIVIS
        title:"AIVIS",
        description:"AIVIS (AI Visualized) is the predecessor to DeepFusion and has the same idea to it, just that its functionalities are more watered down and also don't have the graphical sophitication as DeepFusion. It does, however, provide you with a customizable MLP & custom datasets to play with",
        medias:{"github-conn":"https://github.com/LemonOrangeWasTaken/AIVIS",
                "launch-conn":"https://aivisualized.com"},
        logo:"aivis-icon",
        maintain:"This app is no longer being maintained<br>(It's been replaced by DeepFusion)."
    },{ // Java plane designer
        title:"Aerodesigner",
        description:"Aerodesigner is a Java software I designed for a club called <a href=\"https://aerovate.org/\" target=\"_blank\">Aerovate™</a>, a aerospace engineering club.<br>It acts as an interface to an open source CLI simulation program (MachUpX), so that users can create and test aeroplane designs easier.",
        medias:{"github-conn":"https://github.com/LemonOrangeWasTaken/Aero-Designer"},
        logo:"aerodesiner-icon",
        maintain:"This project is no longer being maintained."
    },{ // Java 3d renderer
        title:"3D \"Game\" Engine",
        description:"This was one of the first big projects that I made. I designed this makeshift engine in desmos (yes, really), and coded it in Java with Jframe. It render edges and vertecies quite well, but can't handle faces.",
        medias:{"github-conn":"https://github.com/LemonOrangeWasTaken/3d-Renderer-V1"},
        logo:"render3d-icon",
        maintain:"This project is no longer being maintained."
    }
]


let update_project_to = (index, set=false)=> {
    if(set && is_mobile()) {
        app_index = index
    }

    let data = available_apps[index]

    change_innerhtml("project-title", data.title, true)
    change_innerhtml("project-description", data.description, true)
    change_innerhtml("project-maintain", data.maintain, true)
    update_medias(data.medias)
    update_logo(data.logo)

    // update carosel indicators
    for(let i = 0; i < document.querySelectorAll(".carousel-indicator").length; i++){
        if(i != index){
            document.querySelectorAll(".carousel-indicator")[i].classList.remove("carousel-indicator-active")
        } else {
            document.querySelectorAll(".carousel-indicator")[i].classList.add("carousel-indicator-active")
        }
    }

}
let update_connections_to = (index) => {
    update_medias(available_apps[index].medias)
}
let hide_connections = (index) => {
    update_medias([])
}

// event listner for buttons
document.getElementById("logo-trans-right").onclick = e => {
    app_index += 1
    if(app_index > available_apps.length-1) app_index = 0

    // get the new project object
    update_project_to(app_index, true)
}
document.getElementById("logo-trans-left").onclick = e => {
    app_index -= 1
    if(app_index < 0) app_index = available_apps.length - 1

    update_project_to(app_index, true)
}