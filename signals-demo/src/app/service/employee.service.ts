import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, map, Observable, retry } from 'rxjs';
import { EmployeeResponse } from '../model/employee-response';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  //base url is in proxyconfig.json file
  //for detail, see in https://dev-academy.com/angular-cors/
  private employeeAPIUrl: string = 'http://localhost:3000/employees';  
  private http = inject(HttpClient);
  
  //data that are required in our UI  * didn't work
  // employeeResource = rxResource({
  //   loader: () => this.http.get<EmployeeResponse>(this.employeeAPIUrl).pipe(
  //     map(e => e.results)
  //   )
  // });
  // employees = computed(() => this.employeeResource.value() ?? [] as Employee[]);

  //old way
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeAPIUrl)
  }
}
