import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:3000/api/employees";
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,employee);
  }

  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/${id}`,employee)
  }

  deleteEmployee(id:number):Observable<string>{
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
}
