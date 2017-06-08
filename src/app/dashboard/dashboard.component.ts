import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ICharacter, CharacterService } from '../characters/models';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: Observable<ICharacter[]>;
  title: string;

  constructor(
    private _route: ActivatedRoute,
    private _characterService: CharacterService,
    private _router: Router) { }

  getCharacters() {
    this.characters = this._characterService.getCharacters()
      .do(() => console.log('Got characters for the dashboard'))
      .catch(error => {
        console.log(`${error}`);
        return Observable.of(null);
      });
  }

  gotoDetail(id: number) {
    const link = ['/characters', id];
    this._router.navigate(link);
  }

  trackByCharacters(index: number, character: ICharacter) {
    return character.id;
  }

  ngOnInit() {
    this._route.data.subscribe((data: { title: string }) => {
      this.title = data.title;
    });
    this.getCharacters();
  }

}
