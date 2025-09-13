import { Component, EventEmitter, Input, OnInit, Output, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { EmployeesService } from "../../../../core/services/EmployeeService/employee.service";

@Component({
    selector: 'ed-employees-list-wrapper',
    templateUrl: 'employees-list.component.html',
    styleUrl: 'employees-list.component.css',
    imports: [MatIconModule]
})

export class EmployeesList implements OnInit{
    @Output() editModalSetter = new EventEmitter<boolean | null>()
    @Output() employeeSetter = new EventEmitter<any>()
    @Output() deleteModalOpen = new EventEmitter<boolean | null>()
    @Input() employees: any

    ngOnInit(): void {
        console.log(this.employees());
        
    }

    editAddress(emp: any){
        this.editModalSetter.emit(true)
        this.employeeSetter.emit(emp)
    }
    openDeleteModal(emp: any){
        this.deleteModalOpen.emit(emp)

    }
}