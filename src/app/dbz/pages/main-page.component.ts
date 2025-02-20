import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  constructor(private readonly dbzService: DbzService) {}

  ngOnInit() {}

  get characters(): Character[] {
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
