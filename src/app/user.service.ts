import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public Users:Array<User>=[]
  public protfolieform:boolean=false;
  public loginform:boolean=true;
  public signform:boolean=false;
  public loginusername="";

  constructor() { }
}
