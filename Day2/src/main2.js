let count = 0;
let h4 = document.querySelector("h4");
let slider = document.querySelector(".slider");

function animateLoader(){
    let interval = setInterval(() => {
        if(count >= 99){
            clearInterval(interval);
        }
        count= Math.round(count + 0.5);
        h4.innerHTML = `${count}%`;
        slider.style.width = `${count}%`;
    }, 50);
}

const t1 = gsap.timeline();

t1.to(".slider",{
    duration: 5.5,
    onStart: animateLoader,
})
.to(".loader",{
    duration: 0.8,
    opacity: 0,
},"label1")
.to(".second-loader h4",{
    duration: 1,
    opacity: 0,
}, "<")
.to(".second-loader", {
    duration: 0.5,
    yPercent: -100,
}, "label1+=0.4")
.from(".page h1,.page h4",{
    yPercent: 100,
    duration: 1,
    opacity: 0,
},"label1+=0.4")
