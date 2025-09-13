import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EmployeesService } from "../../../../core/services/EmployeeService/employee.service";

@Component({
    selector: 'ed-delete-modal',
    templateUrl: 'delete-modal.component.html',
    styleUrl: 'delete-modal.component.css'
})

export class DeleteModal{
    @Output() deleteModalSetter = new EventEmitter<boolean | null>()
    @Input() removedData: any

    constructor(private employeesService: EmployeesService){}

    cancelRemove(){
        this.deleteModalSetter.emit(false)
    }
    remove(){
        this.employeesService.removeEmployee(this.removedData)
        this.deleteModalSetter.emit(false)
    }
}