import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent implements OnInit {

  constructor(private pokemon : PokemonDataService) { }

  public Champion1="";
  public Champion2="";
  public APIcallChampion1="https://pokeapi.co/api/v2/pokemon/";
  public APIcallChampion2="https://pokeapi.co/api/v2/pokemon/";

  searchChampion1ByName(name:string): void{
    this.Champion1=name;
    this.APIcallChampion1=this.APIcallChampion1+name;
    console.log("Champion 1 is "+name);
    console.log(this.APIcallChampion1)
  }

  searchChampion2ByName(name:string): void{
    this.Champion2=name;
    this.APIcallChampion2=this.APIcallChampion2+name;
    console.log("Champion 2 is "+name);
    console.log(this.APIcallChampion2)
  }

  showChampion1(name:string){
    return this.Champion1
  }
  
  getPokemon(name:string){
    this.pokemon.getPokemonData(name)
  }

  ngOnInit(): void {
  }

}
