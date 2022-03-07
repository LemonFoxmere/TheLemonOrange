let logo_reveal_tl_delay = 500

let logo_reveal_tl = anime.timeline({autoplay:false})
let logo_reveal_tl_size = anime.timeline({autoplay:false})
let logo_reveal_tl_color = anime.timeline({autoplay:false})

let logo_reveal_text = anime.timeline({autoplay:false})

logo_reveal_tl.add({
    targets: ".topL-shadow",
    strokeDashoffset: [-65,10],
    strokeDasharray: ["0 150", "150 150"],
    easing: 'easeInOutCubic',
    duration: 700,
}, `+=${logo_reveal_tl_delay}`)

logo_reveal_tl.add({
    targets: ".bottomS-shadow",
    strokeDashoffset: [-13, 0],
    strokeDasharray: ["0 35", "26.5 35"],
    easing: 'easeInOutCubic',
    duration: 200,
},"-=550")

logo_reveal_tl.add({
    targets: ".bottomL-shadow",
    strokeDashoffset: [-63,10],
    strokeDasharray: ["0 150", "150 150"],
    easing: 'easeInOutCubic',
    duration: 700,
},"-=550")

logo_reveal_tl.add({
    targets: ".topS-shadow",
    strokeDashoffset: [-13, 0],
    strokeDasharray: ["0 35", "26.5 35"],
    easing: 'easeInOutCubic',
    duration: 500,
},"-=450")


logo_reveal_tl_size.add({
    targets: "#visible-logo, .shadow-logo",
    translateX: ["5%", 0],
    translateY: ["5%", 0],
    scale:[0.9,1],
    easing: 'easeOutExpo',
    duration: 1900,
}, `+=${logo_reveal_tl_delay}`)
logo_reveal_tl_color.add({
    targets: "#icongrad-top-1, #icongrad-top-2",
    stopColor: "#dadada",
    easing: 'easeOutExpo',
    duration: 1000,
}, `+=${logo_reveal_tl_delay+500}`)


let color_fade_duration = 3000
logo_reveal_tl_color.add({
    targets: "#icongrad-top-1",
    stopColor: "#ef8204",
    easing: 'easeOutQuint',
    duration: color_fade_duration,
}, "-=1200")
logo_reveal_tl_color.add({
    targets: "#icongrad-bottom-1",
    stopColor: "#f99625",
    easing: 'easeOutQuint',
    duration: color_fade_duration,
}, `-=${color_fade_duration}`)
logo_reveal_tl_color.add({
    targets: "#icongrad-top-2",
    stopColor: "#e2ab04",
    easing: 'easeOutQuint',
    duration: color_fade_duration,
}, `-=${color_fade_duration}`)
logo_reveal_tl_color.add({
    targets: "#icongrad-bottom-2",
    stopColor: "#fcc214",
    easing: 'easeOutQuint',
    duration: color_fade_duration,
}, `-=${color_fade_duration}`)
// get rid of shadow
logo_reveal_tl_color.add({
    targets: ".shadow-logo",
    opacity: "0.5",
    easing: 'easeOutQuint',
    duration: color_fade_duration-1500,
}, `-=${color_fade_duration}`)