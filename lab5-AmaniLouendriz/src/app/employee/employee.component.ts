import {Component, ElementRef, inject, TemplateRef, ViewChild} from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import { Router, RouterLink } from "@angular/router";
import {Employee} from "../model/employee";
import { EmployeeDbService } from '../firestore/employee-db.service';
import { NgStyle } from '@angular/common';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule,NgStyle]
})
export class EmployeeComponent {
  private builder: FormBuilder = inject(FormBuilder);
  private employeeService: EmployeeService = inject(EmployeeService);
  private router: Router = inject(Router);
  // database
  private store:EmployeeDbService = inject(EmployeeDbService);
  message:string='';
  msgStyle = {
    color:'',
    'background-color':'white',
    'font-size':'100%',
  }
  currentEmployee:Employee | null = null;
  private type:string = "";
  employeeForm = this.builder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    city: ['', Validators.required],
    salary: [0, Validators.required],
    gender: ['', Validators.pattern('^[MFX]$')],
    email: ['', Validators.email]
  });

  @ViewChild('myModal') modalElement!:TemplateRef<any>;
  modalRef!: NgbModalRef;

  constructor(private modalService:NgbModal) {}

  get name(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('name'); }
  get dateOfBirth(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('dateOfBirth'); }
  get city(): AbstractControl<string> {return <AbstractControl>this.employeeForm.get('city'); }
  get salary(): AbstractControl<number> {return <AbstractControl<number>>this.employeeForm.get('salary'); }
  get gender(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('gender'); }
  get email(): AbstractControl<string> {return <AbstractControl<string>>this.employeeForm.get('email'); }

  onSubmit() {
    // construct the employee object
    const employee: Employee = new Employee(this.name.value,
      new Date(this.dateOfBirth.value),
      this.city.value,
      this.salary.value,
      this.gender.value,
      this.email.value);

    // assign the current employee to the one we just constructed
    this.currentEmployee = employee;
    // use the db service to add them employee to the firestore document.
    this.store.addEmployee(this.currentEmployee)
      .then(
        (docRef: any) => {
          this.showMessage('info','The employee entry was successfully saved');
          this.openModal();
        }
      )
      .catch((_:any)=> {
        this.showMessage('error','Error unable to save the employee entry');
        this.openModal();
  });
    this.employeeService.addEmployee(employee);
    this.employeeForm.reset();
  }

  showMessage(type:string,msg:string):void {
    this.type = type;
    this.msgStyle.color = type === 'error' ? 'red' :'blue';
    this.message = msg;
  }

  openModal():void {
    this.modalRef = this.modalService.open(this.modalElement,{ariaLabelledBy:'modal-basic-title'});
  }

  OkModal():void {
    // if everything is fine then go to the list of all employees, if not, stay in the form page.
    this.type === 'error' ? 
    this.router.navigate(['/']).then(() => {}):  this.router.navigate(['/employees']).then(() => {});
    this.modalRef.close('closing...');
  }
}
