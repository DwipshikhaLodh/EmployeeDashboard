import { Component, OnInit, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { EmployeesList } from "../EmployeesList/employees-list.component";
import { EmployeeForm } from "../../micro/EmployeeForm/employee-form.component";
import { EmployeesService } from "../../../../core/services/EmployeeService/employee.service";
import { DeleteModal } from "../../micro/DeleteModal/delete-modal.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'ed-dashboard-employees-wrapper',
    templateUrl: 'dashboard-employees.component.html',
    styleUrl: 'dashboard-employees.component.css',
    imports: [MatIconModule, EmployeesList, EmployeeForm, DeleteModal, FormsModule]
})

export class DashboardEmployees implements OnInit{
    isFormModalVisible = signal(false)
    isDeleteModalVisible = signal(false)
    removedData = signal({}) // to be removed employee
    formData = signal({}) // to be editted employee
    isEditForm = signal(false)
    employees = signal(null)
    searchText = signal('')
    exportMsg = signal('')

    constructor(private employeesService: EmployeesService){}

    ngOnInit(): void {
        this.employeesService.loadEmployees()
        this.employeesService.employees.subscribe({
            next: (data) => {
                this.employees.set(data)
            },
            error: (err) => {
                console.log(err.message);
            }
        })
    }

    openFormModal(){
        this.isFormModalVisible.set(true)
        console.log(this.isFormModalVisible());
        
    }
    closeFormModal(){
        this.isFormModalVisible.set(false)
        this.formData.set({})
        this.isEditForm.set(false)
    }
    modalSetter(value: any){
        this.isFormModalVisible.set(value)
        this.formData.set({})
        this.isEditForm.set(false)
    }
    editModalSetter(value: any){
        this.isFormModalVisible.set(value)
    }
    employeeSetter(emp: any){
        this.formData.set(emp)
        this.isEditForm.set(true)
    }
    deleteModalSetter(value:any){
        this.isDeleteModalVisible.set(value)
    }
    closeDeleteModal(){
        this.isDeleteModalVisible.set(false)
    }
    deleteModalOpen(emp: any){
        this.isDeleteModalVisible.set(true)
        this.removedData.set(emp)
    }

    onSearch(){
        const searchResult = this.employeesService.searchEmployee(this.searchText())
        this.employees.set(searchResult)
    }

    filter(value: string){
        const filterResult = this.employeesService.filterEmployee(value)
        this.employees.set(filterResult)
    }

    sort(value: string){
        const sortResult = this.employeesService.sortEmployees(value)
        this.employees.set(sortResult)
    }

    exportToCSV(){
        const flag = this.employeesService.exportToCSV()
        if(flag == -1){
            this.exportMsg.set('Employee list is empty.')
        }
    }
}