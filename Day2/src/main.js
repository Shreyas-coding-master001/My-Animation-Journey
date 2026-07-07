import {gsap} from "gsap";

gsap.from("h2 span",{
  yPercent: 100,
  delay: 0.6,
  ease: "back.out",
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  repeat: -1,
  yoyo: true,
});

gsap.from(".shadow",{
  duration: 1.9,
  scaleX: 0,
  delay: 0.6,
  transformOrigin: "left center",
  repeat: -1,
  yoyo: true,
});