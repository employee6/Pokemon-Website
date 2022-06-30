import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-fightercards',
  templateUrl: './fightercards.component.html',
  styleUrls: ['./fightercards.component.css']
})
export class FightercardsComponent implements OnInit {

  url = 'https://hello.com'; 

  constructor() { }

  ngOnInit(): void {
  }

}

