import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CharactersRoutingModule, routedComponents } from './characters-routing.module';
import { FilterPipe } from '../shared/filter.pipe';
import { SortPipe } from '../shared/sort.pipe';

@NgModule({
  imports: [SharedModule, CharactersRoutingModule],
  declarations: [routedComponents, FilterPipe, SortPipe]
})
export class CharactersModule { }
