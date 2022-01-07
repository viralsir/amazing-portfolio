import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";
  loginFormRef=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  loginclick(){
    let loginform=this.loginFormRef.value;
    this.msg="wrong username or password";
    for(let user of this.userService.Users){
        if(loginform.username==user.username && loginform.password==user.password){
            //this.msg="login successfully";
            this.userService.loginform=false;
            this.userService.signform=false;
            this.userService.loginusername=user.username;
            this.userService.protfolieform=true;

            break;
        }

    }
    this.loginFormRef.reset()
  }

}
