import { Component, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'ed-employees-list-wrapper',
    templateUrl: 'employees-list.component.html',
    styleUrl: 'employees-list.component.css',
    imports: [MatIconModule]
})

export class EmployeesList{
    employees = signal([
        {
            id: '1',
            name: 'Dwipshikha Lodh',
            email: 'lodhdwipshikha@gmail.com',
            dept: 'Engineering',
            DOJ: '2nd Jan 2024'
        },
        {
            id: '2',
            name: 'Disha Das',
            email: 'dishadas@gmail.com',
            dept: 'Marketing',
            DOJ: '4th Feb 2024'
        }
    ])
}