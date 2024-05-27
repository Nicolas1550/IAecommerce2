import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";

const BackgroundAnimation: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    // Precarga completa de la configuración de tsparticles
    await loadFull(main);
  };

  // Define opciones de partículas con tipado estricto
  const particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: false,
      zIndex: -1, // Asegura que las partículas permanezcan en el fondo
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#3A8EBA", "#ffffff", "#A2FACF"],
        animation: {
          enable: true,
          speed: 30,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        random: true,
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 4 },
        random: true,
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#A2FACF",
        opacity: 0.5,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          size: 8,
          duration: 2,
          opacity: 0.8,
        },
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default BackgroundAnimation;
