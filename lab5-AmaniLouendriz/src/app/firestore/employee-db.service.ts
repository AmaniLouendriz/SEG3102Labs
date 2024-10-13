import { inject, Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore"
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDbService {
  private firestore : Firestore = inject(Firestore);

  getEmployees(): Observable<Employee[]> {
    const employees = collection(this.firestore,'employees');
    return collectionData(employees) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee) {
    const employees = collection(this.firestore,'employees');
    return addDoc(employees,{...employee});
  }

}
