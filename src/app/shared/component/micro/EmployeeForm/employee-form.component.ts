import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { EmployeesService } from "../../../../core/services/EmployeeService/employee.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'ed-employee-form-wrapper',
    templateUrl: 'employee-form.component.html',
    styleUrl: 'employee-form.component.css',
    imports: [ReactiveFormsModule, MatIconModule]
})

export class EmployeeForm implements OnInit{
    @Output() modalSetter = new EventEmitter<boolean | null>()
    @Input() formData: any
    @Input() isEditForm: any
    today: string = new Date().toISOString().split('T')[0];
    addNewEmployee!: FormGroup

    constructor(private fb: FormBuilder, private employeesService: EmployeesService){

    }

    ngOnInit(): void {
        this.addNewEmployee = this.fb.group({
            name: [ this.formData?.name || '', [Validators.required, Validators.minLength(3)]],
            email: [ this.formData?.email || '', [Validators.required, Validators.email]],
            dept: [ this.formData?.dept || '', [Validators.required]],
            doj: [ this.formData?.doj || '', [Validators.required]]
        })
    }

    get name(){
        return this.addNewEmployee?.get('name')
    }

    get email(){
        return this.addNewEmployee?.get('email')
    }

    get dept(){
        return this.addNewEmployee?.get('dept')
    }

    get doj(){
        return this.addNewEmployee?.get('doj')
    }

    submit(){
        if(this.isEditForm){
            const edittedEmployee = { ...this.addNewEmployee.value, id: this.formData?.id}
            this.employeesService.editEmployee(edittedEmployee)
            this.modalSetter.emit(false)
        }
        else{
            this.employeesService.addEmployee(this.addNewEmployee.value)
            this.modalSetter.emit(false)
        }
    }

    closeForm(){
        this.modalSetter.emit(false)
    }
}