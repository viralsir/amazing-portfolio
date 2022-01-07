import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfoliearray:Array<any>=[]
  portfolieFormRef=new FormGroup({
    name:new FormControl(),
    phno:new FormControl()
  })
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  portfolieclick(){
    let portfolieform=this.portfolieFormRef.value;
    this.portfoliearray.push({name:portfolieform.name,phno:portfolieform.phno})
  }
}
