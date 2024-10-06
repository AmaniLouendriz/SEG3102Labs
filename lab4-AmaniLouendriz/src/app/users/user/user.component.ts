import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/users.service';
import { User } from '../model/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  loggedUser!: User;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private usersService: UsersService = inject(UsersService);
  private router: Router = inject(Router);


  ngOnInit(): void {
      this.route.params.subscribe(params=> {
        const id:number = params['id'];
        this.loggedUser = this.usersService.getUser(Number(id));
      })
  }

  goBack():void {
    this.router.navigate(['/home'],{relativeTo: this.route}).then(()=>{});
  }

  // debug():void {
  //   console.log("activated route is: ",this.route);
  // }
}
