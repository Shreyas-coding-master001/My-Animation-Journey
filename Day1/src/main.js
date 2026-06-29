import './style.css'
import {gsap} from "gsap"

gsap.fromTo(".cicleRotation", {
    y:0,
    x:0
},{
    delay: 0.6,
    rotate: 360,
    ease: "bounce.out",
    height: 160,
    yPercent: 90,    
});

gsap.set(".some", { 
    x: 100, y: 50, opacity: 0 ,
    delay: 1
});

const t1 = gsap.timeline();
t1.to(".red", {
    duration: 1,
    delay: 1,
    x: "50rem",
    backgroundColor: "rgb(164, 0, 0)",
});
t1.to(".blue", {
    duration: 2,
    x: "55rem",
    backgroundColor: "rgb(0, 0, 189)",
});
t1.from(".yellow", {
    duration: 2.5,
    x: "60rem",
    backgroundColor: "rgb(148, 133, 0)",
});

