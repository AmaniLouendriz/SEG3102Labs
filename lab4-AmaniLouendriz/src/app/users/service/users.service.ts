import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // hard coming users
  private users = [
    new User(1,'Alicia','Lou','1234567890','alicia.lou@hotmail.ca'),
    new User(2,'Christopher','Fitzgeral','9871235460','christopher.fi@gmail.com')
  ];

  // add a user
  public addUser(b:User):void {
    this.users.push(b);
  }

  // get a user
  public getUser(id:number):User {
    //console.log("the users are: ",this.users)
    //console.log("the id is: ",id);
    return <User>this.users.find(user=>user.id === id);
  }

  // get next id
  public getNextId():number {
    return this.users[this.users.length-1].id+1;
  }

}
