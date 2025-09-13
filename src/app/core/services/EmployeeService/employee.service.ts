import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Employee } from "../../models/EmployeeModel/employee.model";

@Injectable({
    providedIn: 'root'
})

export class EmployeesService{
    private employeesSubject = new BehaviorSubject<any>([])
    employees = this.employeesSubject.asObservable()
    private storageKey = 'employees'

    private saveEmployees(data: any[]){
        localStorage.setItem(this.storageKey, JSON.stringify(data))
        this.employeesSubject.next(data)
    }

    private getEmployees(){
        const employees = localStorage.getItem(this.storageKey)
        return employees? JSON.parse(employees) : []
    }

    addEmployee(emp: Employee){
        const employees = this.getEmployees()
        emp.id = Date.now()
        employees.push(emp)
        this.saveEmployees(employees)
    }

    loadEmployees(){
        const employees = this.getEmployees()
        this.saveEmployees(employees)
    }

    editEmployee(emp: Employee){
        const employees = this.getEmployees()
        const index = employees.findIndex((e: any) => e.id == emp.id)

        if(index !== -1){
            employees[index] = { ...employees[index], ...emp}
            this.saveEmployees(employees)
        }
    }

    removeEmployee(emp: Employee){
        const employees = this.getEmployees()
        const updatedEmployees = employees.filter((e: any) => e.id !== emp.id)
        this.saveEmployees(updatedEmployees)
    }
}