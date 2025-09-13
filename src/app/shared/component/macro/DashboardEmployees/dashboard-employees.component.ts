import { Component, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { EmployeesList } from "../EmployeesList/employees-list.component";
import { EmployeeForm } from "../../micro/EmployeeForm/employee-form.component";

@Component({
    selector: 'ed-dashboard-employees-wrapper',
    templateUrl: 'dashboard-employees.component.html',
    styleUrl: 'dashboard-employees.component.css',
    imports: [MatIconModule, EmployeesList, EmployeeForm]
})

export class DashboardEmployees{
    isFormModalVisible = signal(false)

    openFormModal(){
        this.isFormModalVisible.set(true)
        console.log(this.isFormModalVisible());
        
    }
    closeFormModal(){
        this.isFormModalVisible.set(false)
    }
}