import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeFetchService } from '../service/employee-fetch.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 

  employees: Employee[];
  constructor(private fetchEmployee : EmployeeFetchService,private router:Router) { }

   ngOnInit(): void {
     this.getEmployees();
  }

  getEmployees(){
    this.fetchEmployee.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
 

  updateEmployee(id:number){
     this.router.navigate(['update-employee',id]);
  }


  //  = [{"id": 2,
  // "firstName":"vikram",
  //    "lastName":"aditya",
  //       "emailId":"vikram@gmail.com",
  //            }];

  
  

}
