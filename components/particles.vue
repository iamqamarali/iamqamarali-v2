<script setup>

options = {
    fullScreen: {
        "enable": false,
    },

  particles: {

    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["rgba(255, 255, 255, 0.5)", "#55340c", "#f3d758", "#c37210"]
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#55340c",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}


import { loadFull } from "tsparticles";

const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

</script>

<template>
    <Particles
        class="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="options"
    />
</template>



<style lang="scss">
.tsparticles{
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;

}

</style>