import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { BattlegroundComponent } from './components/battleground/battleground.component';
import { PokemonComponent } from './components/pokemon/pokemon.component'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomeComponent,
    CardsComponent,
    ContactComponent,
    BattlegroundComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
