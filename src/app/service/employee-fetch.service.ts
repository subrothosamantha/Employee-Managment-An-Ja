import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeFetchService {

  url : any = 'http://localhost:8080/api/v1/employees';
  constructor(private httpClient : HttpClient) {
   }

   getEmployeeList(): Observable<Employee[]>{
     return this.httpClient.get<Employee[]>(`${this.url}`);
   }

   createEmaployee(employee: Employee): Observable<Object>{
     return this.httpClient.post(`${this.url}`,employee);
   }

   getEmployeeById(id : number): Observable<Employee>{
     return this.httpClient.get<Employee>(`${this.url}/${id}`);
   }

   updateEmployee(id:number, employee:Employee):Observable<Object>{
      return this.httpClient.put(`${this.url}/${id}`,employee);
   }
  // getEmployeeList() {
  //   return this.httpClient.get(this.url);
  // }
}
