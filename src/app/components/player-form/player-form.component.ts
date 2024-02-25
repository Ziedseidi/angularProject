import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm!: FormGroup;
  title:String="Add-Player"

  constructor(private Y:FormBuilder){}

  ngOnInit(): void {
     this.playerForm=this.Y.group({
      name:['',[Validators.required, Validators.minLength(4)]],
      age:[''],
      number:[''],
      position:['']

    })
      
  }
  addOrEditplayer(){
    console.log('signup click' , this.playerForm!.value);
  }

}
