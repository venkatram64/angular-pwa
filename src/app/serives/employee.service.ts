import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { Employee } from '../model/employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appliation/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  addEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, payload);
  }
}
