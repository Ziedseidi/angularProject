import { Component, OnInit } from '@angular/core';
import { allplayers } from 'src/app/data/playersData';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{
players:any=[];
title:String="Players"
  constructor(){}

  ngOnInit(): void {
    this.players=allplayers
    
  }

}
