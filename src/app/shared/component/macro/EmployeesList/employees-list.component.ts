import { Component, EventEmitter, Input, OnInit, Output, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'ed-employees-list-wrapper',
    templateUrl: 'employees-list.component.html',
    styleUrl: 'employees-list.component.css',
    imports: [MatIconModule]
})

export class EmployeesList{
    @Output() editModalSetter = new EventEmitter<boolean | null>()
    @Output() employeeSetter = new EventEmitter<any>()
    @Output() deleteModalOpen = new EventEmitter<boolean | null>()
    @Input() employees: any

    editAddress(emp: any){
        this.editModalSetter.emit(true)
        this.employeeSetter.emit(emp)
    }
    openDeleteModal(emp: any){
        this.deleteModalOpen.emit(emp)

    }
}