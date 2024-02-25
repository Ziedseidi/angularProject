import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  listmatches:any={};
constructor(private router: Router
  ){}

ngOnInit(): void {
  this.listmatches=allMatches;
    
}
goTodisplay(id:number) {
  this.router.navigate([`matchInfo/${id}`]);

}
}