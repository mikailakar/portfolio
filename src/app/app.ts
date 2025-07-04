import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Hero } from "./hero/hero";
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterOutlet, Header, Footer, Hero, NgxParticlesModule]
})
export class App {
  title = 'portfolio';
}