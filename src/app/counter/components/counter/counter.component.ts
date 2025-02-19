import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>App Counter Ready!!</h2>

    <h3>Contandor: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetCounter()">Reset Counter</button> `,
  standalone: false,
})
export class CounterComponent {
  counter: number = 10;

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
