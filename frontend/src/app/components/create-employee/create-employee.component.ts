import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: ''
  };

   constructor(private employeeService:EmployeeService,private router:Router){}

   onSubmit():void{
    this.employeeService.createEmployee(this.employee).subscribe({
      next:()=>this.router.navigate(['/employees']),
      error:(err)=>console.log(err)
    })
   }

}
