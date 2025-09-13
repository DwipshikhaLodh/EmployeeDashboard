import { Component } from "@angular/core";
import { DashboardEmployees } from "../../shared/component/macro/DashboardEmployees/dashboard-employees.component";

@Component({
    selector: 'ed-employeespage-wrapper',
    templateUrl: 'employees.component.html',
    styleUrl: 'employees.component.css',
    imports: [DashboardEmployees]
})

export class EmployeesPage{
    
}