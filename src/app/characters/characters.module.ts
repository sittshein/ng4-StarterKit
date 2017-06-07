import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule, routedComponents } from 'app/characters/characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [routedComponents, CharacterListComponent]
})
export class CharactersModule { }
