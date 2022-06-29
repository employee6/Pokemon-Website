import { Component } from '@angular/core';
import { PokemonDataService } from './services/pokemon-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private pokemonData : PokemonDataService){}
  title = 'pokemon-site';
}
