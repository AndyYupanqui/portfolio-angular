import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-effects',
  templateUrl: './background-effects.component.html',
  styleUrls: ['./background-effects.component.scss']
})
export class BackgroundEffectsComponent implements OnInit {
  floatingShapes: any[] = [];

  ngOnInit(): void {
    this.generateFloatingShapes();
  }

  generateFloatingShapes(): void {
    for (let i = 0; i < 15; i++) {
      this.floatingShapes.push({
        size: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        rotate: Math.random() * 360,
        shape: Math.random() > 0.5 ? 'square' : 'triangle'
      });
    }
  }
}
