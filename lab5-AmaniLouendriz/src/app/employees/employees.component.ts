import {Component, inject, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { EmployeeDbService } from '../firestore/employee-db.service';
import { Employee } from '../model/employee';
import { Timestamp } from '@angular/fire/firestore';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit {
  private store:EmployeeDbService = inject(EmployeeDbService);
  protected employeesDb: Employee[] = [];

  ngOnInit():void {
    this.store.getEmployees().subscribe(data => {
      this.employeesDb = data.map(e => {
        return {
          ...e,
          dateOfBirth:e.dateOfBirth.toDate()
        } as Employee;
      });
    });
  }

}
