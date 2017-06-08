import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICharacter } from '../models';


@Component({
  selector: 'my-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  title = 'Character Detail';
  character: ICharacter;
  errorMessage: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character = this._route.snapshot.data['character'];
    console.log('OnInit: ' + JSON.stringify(this.character));
  }

  save(): void {
    console.log('save is called');
  }

  cancel(): void {
    console.log('cancel is called');
  }

  delete(): void {
    console.log('delete is called');
  }

}
