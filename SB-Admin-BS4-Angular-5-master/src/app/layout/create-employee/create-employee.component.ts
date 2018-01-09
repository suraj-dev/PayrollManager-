import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployeeService} from "../../services/employee.service";
import {IEmployee} from "../../interfaces/IEmployee";

/**
 * This component serves data to the create employee view and interacts with the employee service
 * to create an employee.
 */
@Component({
    selector: 'app-charts',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
    salary:string = "";
    showSuccess:boolean;
    showError:boolean;
    showConflictError:boolean;

    /**
     * Constructor used for injecting services and initializing class variables
     * @param employeeService
     */
    constructor(private employeeService:EmployeeService) {
    }

    ngOnInit() {
    }

    /**
     * This function accepts the form data from the view and constructs employee object that is sent to the
     * employee service for employee creation
     * @param form
     */
    createEmployee(form:NgForm) {

        let formInput: IEmployee = form.value;
        let sanitizedInput: IEmployee = this.sanitize(formInput);

        console.log(sanitizedInput);

        this.employeeService.createEmployee(sanitizedInput).subscribe(result => {
            console.log(result);
            this.salary = result["_body"];
            this.showSuccess = true;
            form.reset();
        }, error => {
            console.log("Error: "+ error._body);
            if(error.status === 409)
                this.showConflictError = true;
            else
                this.showError = true;
        });
    }

    /**
     * This function accepts the type of alert to be closed and sets its boolean value to false
     * @param status - a string containing the type of alert to be closed
     */
    closeAlert(status:string) {
        if (status === 'success')
            this.showSuccess = false;
        else if (status === 'error')
            this.showError = false;
        else if (status === 'conflict')
            this.showConflictError = false;
    }

    /**
     * This function checks non required values in the form and sets default values for them if they are null or
     * empty
     * @param employee object
     * @returns {IEmployee}
     */
    sanitize(employee) {
        employee.Address = employee.Address == null ? "" : employee.Address;
        employee.empSalary.grossPay = employee.empSalary.grossPay == "" ? 0 : employee.empSalary.grossPay;
        employee.empSalary.stateTax = employee.empSalary.stateTax == "" ? 0 : employee.empSalary.stateTax;
        employee.empSalary.federalTax = employee.empSalary.federalTax == "" ? 0 : employee.empSalary.federalTax;
        employee.empSalary.socialSecurityTax = employee.empSalary.socialSecurityTax == "" ? 0 : employee.empSalary.socialSecurityTax;
        employee.empSalary.bonus = employee.empSalary.bonus == "" ? 0 : employee.empSalary.bonus;
        employee.empSalary.reimbursements = employee.empSalary.reimbursements == "" ? 0 : employee.empSalary.reimbursements;
        employee.empSalary.healthInsurance = employee.empSalary.healthInsurance == "" ? 0 : employee.empSalary.healthInsurance;
        return employee;
    }
}
