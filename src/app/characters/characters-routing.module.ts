import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterResolverService } from './models/character-resolver.service';

import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      { path: '', component: CharacterListComponent },
      { path: ':id', component: CharacterDetailComponent, resolve: { character: CharacterResolverService } },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharacterResolverService]
})
export class CharactersRoutingModule { }

export const routedComponents = [
  CharactersComponent,
  CharacterListComponent,
  CharacterDetailComponent
]
