gsap.registerPlugin(MorphSVGPlugin);

document.getElementById("morphBtn").addEventListener("click", () => {
  gsap.to("#shape", {
    duration: 0.6,
    morphSVG: "M25 52 L45 70 L78 35",
    ease: "power2.inOut",
  });
});
