import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  username:string="rajesh";
  password:string="rajesh@2809"
  ctr:number=0;
  isDisabled:boolean=false;
  counter():void{
   this.ctr++;

  }
  saveData():void{
console.log("date saved")
this.isDisabled=true;
  }
  
}
