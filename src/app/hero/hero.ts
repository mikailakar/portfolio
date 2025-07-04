import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MoveDirection,
  //ClickMode,
  //HoverMode,
  OutMode,
} from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  id = 'tsparticles';

  particlesOptions = {
    preset: "links",
    background: {
      color: {
        value: '#121212',
      }
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      }
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  };

  async particlesInit(engine: any): Promise<void> {
    await loadLinksPreset(engine);
  }
}