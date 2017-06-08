import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// Core Modules
import { CoreModule } from './core/core.module';
// CharacterService
import { CharacterService } from 'app/characters/models';


@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 300 })
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
