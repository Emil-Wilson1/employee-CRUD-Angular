import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit():void{
   this.loadEmployees()
  }

  loadEmployees():void{
    this.employeeService.getAllEmployees().subscribe({
      next:(data)=> this.employees=data,
      error:(err)=>console.log(err)
    })
  }

  updateEmployee(id: number): void {
    this.router.navigate(['/update-employee', id]);
}

deleteEmployee(id: number): void {
      this.employeeService.deleteEmployee(id).subscribe({
          next: () => this.loadEmployees(),
          error: (e) => console.error(e)
      });
}

}
