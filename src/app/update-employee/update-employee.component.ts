import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeFetchService } from '../service/employee-fetch.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeFetchService,private router:ActivatedRoute,
    private pageRouter:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },error => console.log(error));
  }


  saveEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data => {
     this.goToEmployeeList();
    });
    
  }

  goToEmployeeList(){
    this.pageRouter.navigate(['/employee']);
  }

  onSubmit(){
    console.log('console comes')
     this.saveEmployee();
  }
}
