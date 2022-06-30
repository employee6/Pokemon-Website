import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { Pokemon } from '../models/pokemon.model';
// import { Pokemon } from '../components/pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  private pokemonAPIChamp1 = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemonAPIChamp2 = 'https://pokeapi.co/api/v2/pokemon/';
  

  constructor(private httpClient: HttpClient) { }

  // getPokemonDataChamp1(name:string){
  //   this.httpClient.get<any>(this.pokemonAPIChamp1+name.toLowerCase()).subscribe(data => {
  //     console.log(data);
  //     console.log(data.name);
  //     console.log("HP is "+data.stats[0].base_stat);
  //     console.log("Attack is "+data.stats[1].base_stat);
  //     console.log("Defense is "+data.stats[2].base_stat);
  //     console.log("Speed is "+data.stats[5].base_stat);
  //   });
  // }

  // getPokemonDataChamp2(name:string){
  //   this.httpClient.get<any>(this.pokemonAPIChamp2+name.toLowerCase()).subscribe(data => {
  //     console.log(data);
  //     console.log(data.name);
  //     console.log("HP is "+data.stats[0].base_stat);
  //     console.log("Attack is "+data.stats[1].base_stat);
  //     console.log("Defense is "+data.stats[2].base_stat);
  //     console.log("Speed is "+data.stats[5].base_stat);
  //   });
  // }

  getPokemonData(name:string):Observable<any>{
    return this.httpClient.get<any>(this.pokemonAPIChamp1+name.toLowerCase());
  }
}
