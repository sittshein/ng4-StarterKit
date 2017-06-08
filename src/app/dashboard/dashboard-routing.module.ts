import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardButtonComponent } from './shared/dashboard-button/dashboard-button.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Top Characters' } },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CommonModule, RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent, DashboardButtonComponent];
