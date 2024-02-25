import { Component, OnInit } from '@angular/core';
import { allteams } from 'src/app/data/teamsData';



@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teams:any=[]
  constructor( ){}

  ngOnInit(): void {
      this.teams=allteams;
  }

}
