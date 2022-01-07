import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg:string="";
  singupformRef=new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    username:new FormControl(),
    password:new FormControl()
  })

  constructor(public userService:UserService) { }  // DI for UserService

  ngOnInit(): void {
  }

  singupclick(){
     let singupform=this.singupformRef.value;
      let user1=new User(singupform.firstname,
        singupform.lastname,
        singupform.username,
        singupform.password)
      this.userService.Users.push(user1);
      this.singupformRef.reset();
      this.msg="Record successfully inserted.";
  }

}
