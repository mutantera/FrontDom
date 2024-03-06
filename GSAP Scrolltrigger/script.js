// gsap.from("#page1 #circle",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page1 #circle",
//         scroller:"body",
//         markers:2
//     }
// })
// gsap.from("#page2 #circle",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #circle",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2
//     } 
// })
// gsap.from("#page3 #circle",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:720,
//     scrollTrigger:"#page2 #circle"
// })


// --> Pin Property in Scrolltriggering

// gsap.to("#page2 img",{
//     width:"100%",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0",
//         end:"top -100%",
//         scrub:2,
//         pin:true
//     }
// })



// --> GSAP Horizontal triggering
gsap.to("#page2 h1",{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})