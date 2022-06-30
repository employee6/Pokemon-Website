import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonDataService {
  constructor(private http:HttpClient) { }

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) { }

  getPokemonData(name:string):Observable<any>{
    return this.httpClient.get<any>(this.pokemonAPIChamp1+name.toLowerCase());
=======
  getPokemon(): Observable<any>{
    var randomNumber:number = Math.floor(Math.random() * 50);
    let apiURL:string = "https://pokeapi.co/api/v2/pokemon/"+randomNumber.toString();
    let pokemonData = this.http.get(apiURL);
    console.log(pokemonData);
    return pokemonData;
>>>>>>> d36910e (merge)
  }
  
}
