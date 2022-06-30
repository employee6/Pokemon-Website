import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';
// import { POKEMON } from 'src/app/mock-pokemon';
// import { Pokemon } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent{

  constructor(private pokemon : PokemonDataService) { }

  fighterOne!: any; 
  fighterTwo!: any; 
  public Champion1="";
  public Champion2="";
  public APIcallChampion1="https://pokeapi.co/api/v2/pokemon/";
  public APIcallChampion2="https://pokeapi.co/api/v2/pokemon/";
  

  getPokemon1(name:string){
    this.pokemon.getPokemonData(name).subscribe(data => { 
      this.fighterOne = (({name, base_experience, stats, sprites}) => ({name, base_experience, stats, sprites}))(data);   
    });
  }
  
  getPokemon2(name:string){
    this.pokemon.getPokemonData(name).subscribe(data => { 
      this.fighterTwo = (({name, base_experience, stats, sprites}) => ({name, base_experience, stats, sprites}))(data); 
    });
  }

  getFightResults(fighterOne: any, fighterTwo: any) {
    if (fighterOne.base_experience > fighterTwo.base_experience){
      return fighterOne
    } else {
      return fighterTwo
    }
  }

  
  


  // pokemon = POKEMON; 

  // fighterOne!: Pokemon;
  // fighterTwo!: Pokemon;

  // ngOnInit(): void {
  // }

  // getFighterOne() {
  //   randomNumber: Number; 
  //   const randomNumber = Math.floor(Math.random() * 6); 
  //   console.log(randomNumber);
  //   console.log(this.pokemon[randomNumber]);
  //   this.fighterOne = this.pokemon[randomNumber]; 
  
  // }

  // getFighterTwo() {
  //   randomNumber: Number; 
  //   const randomNumber = Math.floor(Math.random() * 6); 
  //   console.log(randomNumber);
  //   console.log(this.pokemon[randomNumber]);
  //   this.fighterTwo = this.pokemon[randomNumber]; 
  // }

  
  // getFightResults(fighterOne: any, fighterTwo: any) {
  //   let fighterOneStrength =  fighterOne.stats.hp;
  //   let fighterTwoStrength = fighterTwo.stats.hp; 
  //   if (fighterOneStrength > fighterTwoStrength) {
  //     console.log(fighterOne.name);
  //     return fighterOne;
  //   } else {
  //     console.log(fighterTwo.name)
  //     return fighterTwo;
  //   }
  // }

}
