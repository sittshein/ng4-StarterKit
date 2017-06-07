import { Component, OnInit } from '@angular/core';
import { Character, CharacterService } from '../../models';

@Component({
  selector: 'my-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  title = 'Characters';
  characters: Character[];
  errorMessage: string;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() { this.getCharacters(); }

  getCharacters(): void {
    this._characterService.getCharacters()
      .subscribe(
      characters => this.characters = characters,
      error => this.errorMessage = <any>error
      );
  }

}
