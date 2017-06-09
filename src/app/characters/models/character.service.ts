import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ICharacter } from './character';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CharacterService {
  private baseUrl = 'api/characters';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http: Http) { }

  getCharacters(): Observable<ICharacter[]> {
    return this._http
      .get(this.baseUrl)
      .map(this.extractData)
      .do(data => console.log('getCharacters: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCharacter(id: number): Observable<ICharacter> {
    if (id === 0) {
      return Observable.of(this.initializeCharacter());
    };
    const url = `${this.baseUrl}/${id}`;
    return this._http
      .get(url)
      .map(this.extractData)
      .do(data => console.log('getCharacter: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteCharacter(id: number): Observable<ICharacter> {
    const options = new RequestOptions({ headers: this.headers });
    const url = `${this.baseUrl}/${id}`;
    return this._http
      .delete(url, options)
      .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveCharacter(character: ICharacter): Observable<ICharacter> {
    const options = new RequestOptions({ headers: this.headers });
    if (character.id === 0) {
      return this.createCharacter(character, options);
    }
    return this.updateCharacter(character, options);
  }

  private createCharacter(character: ICharacter, options: RequestOptions): Observable<ICharacter> {
    character.id = undefined;
    return this._http
      .post(this.baseUrl, character, options)
      .map(this.extractData)
      .do(data => console.log('createCharacter: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private updateCharacter(character: ICharacter, options: RequestOptions): Observable<ICharacter> {
    const url = `${this.baseUrl}/${character.id}`;
    return this._http
      .put(url, character, options)
      // .map(this.extractData)
      .map(() => character)
      .do(data => console.log('updateCharacter: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }
  private handleError(error: Response): Observable<any> {
    //  we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

  private initializeCharacter(): ICharacter {
    // Return an initialized object
    const character = {
      id: 0,
      name: null,
      side: null
    };
    return character;
  }

}
