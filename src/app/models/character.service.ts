import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

import { Character } from './character.model';

@Injectable()
export class CharacterService {
  private charactersUrl = 'api/characters.json';

  constructor(private _http: Http) { }

  getCharacters(): Observable<Character[]> {
    return this._http
      .get(this.charactersUrl)
      .map((res: Response) => res.json().data as Character[])
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}
