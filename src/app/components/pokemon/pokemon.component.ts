import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Pokemon {
  constructor(
    public id : number,
    public name : string,
    public hp : number,
    public attack : number,
    public defense : number,
    public speed : number,
    public image : string
  ){}
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getPokemon(){
    this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon').subscribe
  }

}
