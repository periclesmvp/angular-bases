import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false,
})
export class ListDbzComponent implements OnInit {
  // Con esto indicamos que podemos recibir una propertie
  @Input()
  characterList: Character[] = [
    {
      name: 'trunks',
      power: 1000,
    },
  ];
  constructor() {}

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string) {
    this.onDeleteCharacter.emit(id);
  }

  ngOnInit() {}
}
