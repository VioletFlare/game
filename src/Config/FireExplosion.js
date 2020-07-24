import texPng from '../../assets/particles/particles0_tex.png';
import texJson from '../../assets/particles/particles0_tex.json';

class FireExplosion {
    
    constructor() {
        this.emitterConfiguration = {
            active: true,
            visible: true,
            collideBottom: true,
            collideLeft: true,
            collideRight: true, 
            collideTop: true, 
            on: true, 
            particleBringToTop: true, 
            radial: true, 
            frame: { 
                frames: ["scorch_03"], 
                cycle: false, 
                quantity: 1 
            }, 
            frequency: 13, 
            gravityX: 150, 
            gravityY: 30, 
            maxParticles: 10, 
            timeScale: 2, 
            blendMode: 0, 
            accelerationX: { 
                ease: "Linear", 
                min: 0, 
                max: 10 
            }, 
            accelerationY: { 
                start: 0, 
                end: 10, 
                ease: "Linear" 
            }, 
            alpha: 1, 
            angle: { 
                min: 0, 
                max: 360, 
                ease: "Linear" 
            }, 
            bounce: { 
                ease: "Linear", 
                start: 0, 
                end: "" 
            }, 
            delay: { 
                ease: "Linear", 
                start: "", 
                end: "" 
            }, 
            lifespan: 1000, 
            maxVelocityX: { 
                ease: "Sine.easeIn", 
                min: 0, 
                max: 100 
            }, 
            maxVelocityY: { 
                ease: "Linear", 
                min: 0, 
                max: 100 
            }, 
            moveToX: { 
                ease: "Linear", 
                min: 0, 
                max: 100 
            }, 
            moveToY: { 
                start: 0, 
                end: 100, 
                ease: "Linear" 
            }, 
            quantity: { 
                ease: "Linear", 
                min: 0, 
                max: 1 
            }, 
            rotate: 0, 
            scale: { 
                ease: "Expo.easeIn", 
                min: 0, 
                max: 3 
            }, 
            speed: 0, 
            x: 401, 
            y: 235, 
            tint: [16738816], 
            emitZone: { 
                source: new Phaser.Geom.Rectangle(0, 0, 50, 50), 
                type: "edge", 
                quantity: 10, 
                stepRate: 0, 
                yoyo: false, 
                seamless: false 
            }
        }
        this.physicConfiguration = {
            width: 100,
            height: 100
        };
        this.atlasName = "particles";
    }

    preload() {
        this.scene.load.atlas(this.atlasName, texPng, texJson);
    }

}

export default FireExplosion;