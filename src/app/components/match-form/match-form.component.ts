import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  matcheform : FormGroup | undefined;

  matche:any={}
  title:String="Add-match"

  constructor(){

  }
  ngOnInit():void{
   
    }
    Ajoutmatche(){
      console.log("ok", this.matche)

  }


}
