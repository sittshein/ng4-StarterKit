import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, [NavComponent]],
  declarations: [NavComponent]
})
export class CoreModule { }
