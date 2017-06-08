import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersRoutingModule, routedComponents } from './characters-routing.module';
import { CharacterFilterPipe } from './shared/character-filter.pipe';
import { SortCharactersPipe } from './shared/sort-characters.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule
  ],
  declarations: [routedComponents, CharacterFilterPipe, SortCharactersPipe]
})
export class CharactersModule { }
