
import { animate, inView, stagger } from "motion"


const h2 = document.querySelectorAll(".home-section h2") as NodeListOf<HTMLElement>
const p = document.querySelectorAll(".home-section p") as NodeListOf<HTMLElement>
const card = document.querySelectorAll(".home-section .card") as NodeListOf<HTMLElement>
const animations = document.querySelectorAll(".home-section canvas") as NodeListOf<HTMLElement>

h2.forEach((el, i) => {
  el.style.opacity = "0"
  inView(el, (info) => {
    animate(el, { opacity: [0, 1], y: [100, 0] }, { ease: "easeInOut", duration: 0.6 })
  })
})

p.forEach((el, i) => {
  el.style.opacity = "0"
  inView(el, (info) => {
    animate(el, { opacity: [0, 1], y: [20, 0] }, { ease: "easeInOut", duration: 0.6, delay: 0.5 })
  })
})

card.forEach((el, i) => {
  el.style.opacity = "0"
  inView(el, (info) => {
    animate(el, { opacity: [0, 1], y: [20, 0] }, { ease: "easeInOut", duration: 0.6, delay: 0.5 })
  })
})

animations.forEach((el, i) => {
  el.style.opacity = "0"
  inView(el, (info) => {
    animate(el, { opacity: [0, 1], y: [20, 0] }, { ease: "easeInOut", duration: 0.6, delay: 0.5 })
  })
})


