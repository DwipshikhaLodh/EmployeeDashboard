import { Component, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'ed-dashboard-home-wrapper',
    templateUrl: 'dashboard-home.component.html',
    styleUrl: 'dashboard-home.component.css',
    imports: [MatIconModule]
})

export class DashboardHome{
    employeesCount = signal(2)
    activeEmployeesCount = signal(1)
    inactiveEmployeesCount = signal(1)
    departmentCount = signal(3)
}