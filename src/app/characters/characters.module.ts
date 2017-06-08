import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharactersRoutingModule, routedComponents } from './characters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule
  ],
  declarations: [routedComponents]
})
export class CharactersModule { }
