import { Component, inject, ViewChild } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import {  MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-employee-view',
  imports: [
    MatTableModule,  
    DatePipe],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.scss'
})
export class EmployeeViewComponent { 
  resultsLength = 0;
  displayedColumns: string[] = ['employeeId', 'employeeName', 'contactNo', 'emailId', 'deptId', 'gender', 'role', 'createDate'];
  private employeeService: EmployeeService = inject(EmployeeService);
  //dataSource = this.employeeService.employees; **didn't work as rxResource, was getting empty data

  //old way
  employees = this.employeeService.getEmployees();


  
}

