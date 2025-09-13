import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EmployeesService{
    private employeesSubject = new BehaviorSubject<any>([])
    employees = this.employeesSubject.asObservable()

    constructor(){

    }

    addEmployee(){

    }
}