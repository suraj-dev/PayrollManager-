import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../interfaces/IEmployee";

@Component({
    selector: 'app-dashboard',
    templateUrl: './list-of-employees.component.html',
    styleUrls: ['./list-of-employees.component.scss'],
})
export class ListOfEmployeesComponent implements OnInit {
    employeeList: Array<IEmployee>;
    selectedEmployee: IEmployee;
    selectedEmployeeIndex: number;
    employeeModalReference: NgbModalRef;
    deleteDialogModalReference: NgbModalRef;
    constructor(private modalService: NgbModal, private employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe(result  => {
             this.employeeList = JSON.parse(result["_body"]);
            console.log(this.employeeList);
        }, error => {
            console.log("Could not retrieve employees: " + error);
        })
    }

    open(content, index) {
        this.selectedEmployeeIndex = index;
        this.employeeModalReference= this.modalService.open(content);
        this.selectedEmployee = this.employeeList[index];
    }

    deleteEmployee() {
        let employeeId = this.employeeList[this.selectedEmployeeIndex].empSalary.EmployeeId;

        this.employeeService.deleteEmployee(employeeId).subscribe(result => {
            this.employeeList.splice(this.selectedEmployeeIndex, 1);
            this.deleteDialogModalReference.close();
            this.employeeModalReference.close();
            console.log("Employee deleted successfully");
        }, error => {
            console.log("Failed to delete employee");
        })
    }

    openDeleteDialog(content) {
        this.deleteDialogModalReference = this.modalService.open(content);
    }



}
