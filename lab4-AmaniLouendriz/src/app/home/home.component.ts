import { Component, inject } from '@angular/core';
import {AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { User } from '../users/model/user';
import { UsersService } from '../users/service/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // form builder, in order to have a reactive form
  private builder: FormBuilder = inject(FormBuilder);
  private usersService: UsersService = inject(UsersService);
  private router: Router = inject(Router);
  private route:ActivatedRoute = inject(ActivatedRoute);

  // reactive form start
  userForm = this.builder.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    phoneNumber:['',[Validators.pattern('[1-9][0-9]{2}[1-9][0-9]{6}')]],
    email:['',[Validators.email]] 
  })
  // reactive form end

  // Getters to get reference to the form controls more easily in the html
  get first():AbstractControl<string> {return <AbstractControl>this.userForm.get('firstName');}
  get last():AbstractControl<string> {return <AbstractControl>this.userForm.get('lastName');}
  get phoneNumber():AbstractControl<string> {return <AbstractControl>this.userForm.get('phoneNumber');}
  get email():AbstractControl<string> {return <AbstractControl>this.userForm.get('email');}

  // submission manager
  // create user and calls usera service to add new instance of user to the users collection
  onSubmit(): void {
    //console.log("in on submit: ",this.usersService.getNextId());
    const user = new User(this.usersService.getNextId(),
      <string>this.userForm.value.firstName,
      <string>this.userForm.value.lastName,
      <string>this.userForm.value.phoneNumber,
      <string>this.userForm.value.email
    )
    //console.log("should call the user service now to add user to the list of users")
    //console.log("user is: ",user);
    this.usersService.addUser(user);
    this.userForm.reset();
    this.router.navigate(['../users',user.id],{relativeTo: this.route}).then(()=>{});
  }

}
