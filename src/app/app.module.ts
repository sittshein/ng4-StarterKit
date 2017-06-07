import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// Feature Modules
import { CoreModule } from './core/core.module';
import { CharactersModule } from 'app/characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CharactersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
