import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: ''
  };
  id!: number;

  constructor(
      private employeeService: EmployeeService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe({
          next: (data) => this.employee = data,
          error: (e) => console.error(e)
      });
  }

  onSubmit(): void {
      this.employeeService.updateEmployee(this.id, this.employee).subscribe({
          next: () => this.router.navigate(['/employees']),
          error: (e) => console.error(e)
      });
  }
}
