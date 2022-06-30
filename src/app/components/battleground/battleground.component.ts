import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';
import { POKEMON } from 'src/app/mock-pokemon';
import { Pokemon } from 'src/app/models/pokemon.model';


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
  pokemon = POKEMON; 

  fighterOne!: Pokemon;
  fighterTwo!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  getFighterOne() {
    randomNumber: Number; 
    const randomNumber = Math.floor(Math.random() * 6); 
    console.log(randomNumber);
    console.log(this.pokemon[randomNumber]);
    this.fighterOne = this.pokemon[randomNumber]; 
  
  }

  getFighterTwo() {
    randomNumber: Number; 
    const randomNumber = Math.floor(Math.random() * 6); 
    console.log(randomNumber);
    console.log(this.pokemon[randomNumber]);
    this.fighterTwo = this.pokemon[randomNumber]; 
  }

  
  getFightResults(fighterOne: any, fighterTwo: any) {
    let fighterOneStrength =  fighterOne.stats.hp;
    let fighterTwoStrength = fighterTwo.stats.hp; 
    if (fighterOneStrength > fighterTwoStrength) {
      console.log(fighterOne.name);
      return fighterOne;
    } else {
      console.log(fighterTwo.name)
      return fighterTwo;
    }
  }

}
