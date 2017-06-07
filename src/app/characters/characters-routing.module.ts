import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule { }
export const routedComponents = [CharacterListComponent]
