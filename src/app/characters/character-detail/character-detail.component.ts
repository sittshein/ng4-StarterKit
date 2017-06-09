import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ICharacter, CharacterService } from '../models';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  title = 'Character Detail';
  character: ICharacter;
  errorMessage: string;
  private subscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    // this.character = this._route.snapshot.data['character'];
    // console.log('OnInit: ' + JSON.stringify(this.character));
    this.subscription = this._route.params
      .subscribe(params => {
        const id = +params['id'];
        this.getCharacter(id);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCharacter(id: number): void {
    this._characterService.getCharacter(id)
      .subscribe(
      character => this.character = character,
      error => this.errorMessage = <any>error
      );
  }

  save(editForm: NgForm): void {
    // console.log('save is called');
    console.log(editForm);
    this._characterService
      .saveCharacter(this.character)
      .subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
      );
  }

  cancel(): void {
    // console.log('cancel is called');
    this._router.navigate(['/characters']);
  }

  delete(): void {
    // console.log('delete is called');
    if (this.character.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the movie: ${this.character.name}?`)) {
        this._characterService.deleteCharacter(this.character.id)
          .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(): void {
    // Navigate back to the movie list
    this._router.navigate(['/characters']);
  }

}
