import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';
// Routing Module
import { AppRoutingModule, routedComponents } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from '../api/in-memory-store.service';
// Core Modules
import { CoreModule } from './core/core.module';
// CharacterService
import { CharacterService } from 'app/characters/models';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 300 })
  ],
  declarations: [ AppComponent, routedComponents ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
