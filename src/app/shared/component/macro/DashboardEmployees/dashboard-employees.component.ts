import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { EmployeesList } from "../EmployeesList/employees-list.component";

@Component({
    selector: 'ed-dashboard-employees-wrapper',
    templateUrl: 'dashboard-employees.component.html',
    styleUrl: 'dashboard-employees.component.css',
    imports: [MatIconModule, EmployeesList]
})

export class DashboardEmployees{

}