import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../serives/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  success = "";


  addEmployee = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    task: new FormControl(''),
    deadLine: new FormControl('')
  });



  constructor(private employeeService: EmployeeService) {
    /*this.addEmployee = new FormGroup({
      empId: new FormControl(''),
      name: new FormControl(''),
      task: new FormControl(''),
      deadLine: new FormControl('')
    });*/
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const emp2:Employee = Object.assign({}, this.addEmployee.value);
    this.employeeService.addEmployee(emp2).subscribe(data => {
      this.success="Added Employee successfully";
    })
    this.addEmployee.reset();
    console.log(emp2);
  }

}
