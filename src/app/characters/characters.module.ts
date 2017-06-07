import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule, routedComponents } from 'app/characters/characters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [routedComponents]
})
export class CharactersModule { }
