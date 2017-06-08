import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICharacter, CharacterService } from '../models';


@Component({
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  title = 'Characters';
  characters: ICharacter[];
  errorMessage: string;

  constructor(private _characterService: CharacterService, private _router: Router) { }

  ngOnInit() { this.getCharacters(); }

  getCharacters(): void {
    this._characterService.getCharacters()
      .subscribe(
      characters => this.characters = characters,
      error => this.errorMessage = <any>error
      );
  }

  gotoDetail(id: number): void {
    this._router.navigate(['/characters', id]);
  }
}
