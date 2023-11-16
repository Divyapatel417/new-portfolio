import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Particleeffect = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
  return (
    
    <div><Particles
    init={particlesInit}
 options={{
   fpsLimit: 60,
   interactivity: {
     events: {
       onClick: {
         enable: true,
         mode: "push",
       },
       onHover: {
         enable: true,
         mode: "repulse",
       },
       resize: true,
     },
     modes: {
       bubble: {
         distance: 400,
         duration: 2,
         opacity: 0.8,
         size: 40,
       },
       push: {
         quantity: 9,
       },
       repulse: {
         distance: 200,
         duration: 0.4,
       },
     },
   },
   particles: {
     color: {
       value: '#5eead4',
     },
     lineLinked: {
       color: {
         value: '#5eead4',
       },
       distance: 150,
       enable: true,
       opacity: 0.2,
       width: 1.8,
     },
     collisions: {
       enable: true,
     },
     move: {
       direction: "none",
       enable: true,
       outMode: "bounce",
       random: true,
       speed: 3,
       straight: true,
     },
     number: {
       density: {
         enable: true,
         value_area: 1500,
       },
       value: 80,
     },
     opacity: {
       value: 0.1,
     },
     shape: {
       type: "circle",
     },
     size: {
       random: true,
       value: 5,
     },
   },
   detectRetina: true,
 }}>
</Particles> </div>
  )
}

export default Particleeffect