import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from './services/pokemon-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  pokemonData:any;

  constructor(private service : PokemonDataService){}

  title = 'pokemon-site';


}
