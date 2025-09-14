import { Component, OnInit, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { EmployeesService } from "../../../../core/services/EmployeeService/employee.service";

@Component({
    selector: 'ed-dashboard-home-wrapper',
    templateUrl: 'dashboard-home.component.html',
    styleUrl: 'dashboard-home.component.css',
    imports: [MatIconModule]
})

export class DashboardHome implements OnInit{
    employeesCount = signal(2)
    activeEmployeesCount = signal(1)
    inactiveEmployeesCount = signal(1)
    departmentCount = signal(3)

    constructor(private employeeService: EmployeesService){}

    ngOnInit(): void {
        this.employeeService.loadEmployees()
        this.employeeService.employees.subscribe({
            next: (data) => {
                this.employeesCount.set(data.length)
            },
            error: (err) => {
                console.log(err.message);
            }
        })
    }
}