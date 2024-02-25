import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit{
matches:any=[];
title:String="matches"
  constructor(){}

  ngOnInit(): void {
    this.matches=[{id:1,teamOne:"FCB", teamTwo:"RMD", ScoreOne:1, ScoreTwo:2},
      {id:2,teamOne:"Liv", teamTwo:"FCP", ScoreOne:1, ScoreTwo:0},
      {id:3,teamOne:"FCB",teamTwo:"RMD", ScoreOne:1, ScoreTwo:3},
      ]
      
  }

}
