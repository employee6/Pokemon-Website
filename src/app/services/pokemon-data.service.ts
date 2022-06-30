import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from "rxjs";
import { catchError, retry } from "rxjs/operators";
// import { Pokemon } from '../components/pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  private pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
  

  constructor(private httpClient: HttpClient) { }

  
  buildAPI(name:string){
    this.pokemonAPI=this.pokemonAPI+name;
    console.log(this.pokemonAPI)
  }

  getPokemonData(name:string){
    this.httpClient.get<any>(this.pokemonAPI+name).subscribe(data => {
      console.log(data);
      console.log(data.name);
      console.log(data.stats[0].base_stat);
    });
  }
}
