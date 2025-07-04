import { Component } from '@angular/core';

@Component({
selector: 'app-footer',
standalone: true,
imports: [],
templateUrl: './footer.html',
styleUrl: './footer.css'
})
export class Footer {
  currentYear: number;
  authorName: string = 'Mikail Akar';
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}