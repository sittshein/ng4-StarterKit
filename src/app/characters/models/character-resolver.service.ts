import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { ICharacter, CharacterService } from './index';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CharacterResolverService implements Resolve<ICharacter> {

  constructor(private _characterService: CharacterService, private _router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter> {
    // tslint:disable-next-line:prefer-const
    let id = route.params['id'];
    if (isNaN(+id)) {
      console.log(`Character id was not a number: ${id}`);
      this._router.navigate(['/characters']);
      return Observable.of(null);
    }

    return this._characterService
      .getCharacter(+id)
      .map(character => {
        if (character) {
          return character;
        }
        console.log(`Character was not found: ${id}`);
        this._router.navigate(['/characters']);
      })
      .catch(error => {
        console.log(`Retrieval error: ${error}`);
        this._router.navigate(['/characters']);
        return Observable.of(null);
      });
  }

}
