import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'Spiderman';
  age: number = 18;
  deletedHero?: string = '';
  heroes: string[] = ['Superman', 'Batman', 'Wonder Woman'];

  changeName(): void {}

  changeAge(): void {}

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
