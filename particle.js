let nrOfParticles = 120;
let densityOfParticles = 1100;
let lineColor = "#ADD8E6";
let lineWidth = 0.5;
let movementSpeed = 8;

particlesJS("particles", {
  particles: {
    number: { value: nrOfParticles, density: { enable: true, value_area: densityOfParticles } },
    size: { value: 4 }, 
    shape: { type: 'circle' }, 
    line_linked: {
      enable: true,
      distance: 250,
      color: lineColor,
      opacity: 1,
      width: lineWidth
    },
    move: {
      enable: true,
      speed: movementSpeed,
      direction: "top",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 600, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

var count_particles, stats, update;

document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
