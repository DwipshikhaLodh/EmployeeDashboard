import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'ed-employee-form-wrapper',
    templateUrl: 'employee-form.component.html',
    styleUrl: 'employee-form.component.css',
    imports: [ReactiveFormsModule]
})

export class EmployeeForm implements OnInit{
    addNewEmployee!: FormGroup

    constructor(private fb: FormBuilder){

    }

    ngOnInit(): void {
        this.addNewEmployee = this.fb.group({
            name: ['', Validators.required, Validators.minLength(3)],
            email: ['', Validators.required, Validators.email],
            dept: ['', Validators.required],
            doj: ['', Validators.required]
        })
    }

    get name(){
        return this.addNewEmployee.get('name')
    }

    get email(){
        return this.addNewEmployee.get('email')
    }

    get dept(){
        return this.addNewEmployee.get('dept')
    }

    get doj(){
        return this.addNewEmployee.get('doj')
    }

    submit(){
        console.log(this.addNewEmployee.value)
    }
}