import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  character: Character[] = [
    { id: uuid(), name: 'Goku', power: 10000 },
    { id: uuid(), name: 'Vegeta', power: 9500 },
    { id: uuid(), name: 'Gohan', power: 8000 },
    { id: uuid(), name: 'Piccolo', power: 7500 },
  ];

  ngOnInit() {}

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.character.push(newCharacter);

    console.log(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    this.character = this.character.filter((character) => character.id !== id);
  }
}
