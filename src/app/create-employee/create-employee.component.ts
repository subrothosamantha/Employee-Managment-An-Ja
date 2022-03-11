import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeFetchService } from '../service/employee-fetch.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(public employeeService:EmployeeFetchService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmaployee(this.employee).subscribe(data=>{
      console.log(data);
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(values:any){
     this.employee.firstName  = values.firstName;
     this.employee.lastName = values.lastName;
     this.employee.emailId = values.email;
     this.saveEmployee();
     this.goToEmployeeList();
    

  }

}
