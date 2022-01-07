import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazing-portfolio';
  //loginform:boolean=true;
  //signform:boolean=false;

  constructor(public userService:UserService) {
  }
  clicksignpu(){
    this.userService.signform=true;
    this.userService.loginform=false;
  }

  clicklogin(){
    this.userService.loginform=true;
    this.userService.signform=false;
  }

}
