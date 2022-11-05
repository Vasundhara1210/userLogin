import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model:Users=new Users();
  constructor(private userservice: UserserviceService,private router:Router) { }

  ngOnInit():void{
  }

  loginUser(){

    /*var username=this.model.username;
    var password=this.model.password;
    this.userservice.getUserData(username,password).subscribe((res:boolean)=>{
      this.getData=res;

      if(this.getData==true){
        this.router.navigate(["/home"]);
      }*/
    console.log(this.model);
    this.userservice.getUserData(this.model).subscribe(data=>{
      alert("Log in successfully")
    },error=>alert("Sorry please enter correct credentials"));
    

  }

}
