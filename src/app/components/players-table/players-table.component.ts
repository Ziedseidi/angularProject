import { Component, OnInit } from '@angular/core';
import { allplayers } from 'src/app/data/playersData';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players:any=[]
  constructor(){}

  ngOnInit(): void {
      this.players=allplayers;
}
}