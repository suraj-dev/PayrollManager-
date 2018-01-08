import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../interfaces/IEmployee";

/**
 * This component serves data to the list of employees view and interacts with the employee service
 * to retrieve employee information and delete employees.
 */
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

    /**
     * This function fetches the list of employees and their information using the employee service
     * on initialization of this component.
     */
    ngOnInit() {
        this.employeeService.getEmployees().subscribe(result  => {
             this.employeeList = JSON.parse(result["_body"]);
            console.log(this.employeeList);
        }, error => {
            console.log("Could not retrieve employees: " + error);
        })
    }

    /**
     * This function accepts the name of the modal to be triggered, opens the modal and sets the selected employee using
     * the index.
     * @param content - string containing the name of the modal
     * @param index - number containing the index of the employee object inside the array
     */
    open(content: string, index: number) {
        this.selectedEmployeeIndex = index;
        this.employeeModalReference= this.modalService.open(content);
        this.selectedEmployee = this.employeeList[index];
    }

    /**
     * This function deletes the employee from the list of employees using the employeeId and the
     * employee service
     */
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

    /**
     * This function accepts the name of the modal and triggers it.
     * @param content - string containing the name of the modal to be opened
     */
    openDeleteDialog(content) {
        this.deleteDialogModalReference = this.modalService.open(content);
    }



}
