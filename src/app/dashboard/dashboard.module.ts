import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { DashboardButtonComponent } from './dashboard-button/dashboard-button.component';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [routedComponents, DashboardButtonComponent]
})
export class DashboardModule { }
