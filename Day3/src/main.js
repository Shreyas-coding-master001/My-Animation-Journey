// import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


gsap.set(".two img",{
  scale: 0.3,
  opacity: 0.1,
})

gsap.set(".two .content",{
  gap: "50rem"
})
gsap.set(".two .content h2",{
  opacity: 0,
  color: "grey",
  fontSize: "2rem"
})

//Scroll-trigger animations
const t1 = gsap.timeline({
  ease: "bound.in",
  scrollTrigger:{
    trigger: ".two",
    start: "top 30%",
    end: "top top",
    scrub: true
  }
})
const t2 = gsap.timeline();


t1.to(".two img",{
  scale: 1,
  opacity: 1,
  
}).to(".two .content", {
  gap: "5rem"
},"<")
.to(".content h2",{
  opacity: 1,
  color: "#EAF6FF",
  fontSize: "8rem"

}, "<");



// Additional GSAP animation for the `.three .content` (entrance + push effect)
// This does not modify existing timelines; it adds a new timeline triggered on scroll.
const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 20%",
    toggleActions: "play none none reverse",
  }
});

t3
.fromTo(
  ".three .content",
  { y: 36, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
)
.fromTo(
  ".three .content h2",
  { y: "100%", scale: 0.98, opacity: 0 },
  { y: 0, scale: 1, opacity: 1, stagger: 0.08, duration: 0.7, ease: "back.out(1.2)" },
  "<"
)
.to(
  ".three img",
  { y: -6, scale: 0.985, duration: 0.7, ease: "power3.out" },
  "<"
);
