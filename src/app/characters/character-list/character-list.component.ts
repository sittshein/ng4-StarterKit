import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICharacter, CharacterService } from '../models';


@Component({
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  title = 'Characters';
  characters: ICharacter[];
  listFilter: string;
  errorMessage: string;

  constructor(private _characterService: CharacterService,
              private _router: Router,
              private _route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.listFilter = this._route.snapshot.queryParams['filterBy'] || '';
    this.getCharacters();
  }

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
