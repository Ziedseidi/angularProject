import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent  implements OnInit{
  teamForm: FormGroup | undefined
objj:any={}
title:String="Add-Team"
  constructor(){}

  ngOnInit(): void {
      
  }
  Enregistrerteam(){
    console.log("enregistrement team avec succe", this.objj)
  }

}
