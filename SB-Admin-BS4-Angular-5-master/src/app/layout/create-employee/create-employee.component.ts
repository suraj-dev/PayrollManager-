import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployeeService} from "../../services/employee.service";

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
    salary: string = "";
    showSuccess: boolean;
    showError:boolean;
    showConflictError:boolean;

    /**
     * Constructor used for injecting services and initializing class variables
     * @param employeeService
     */
    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {}

    /**
     * This function accepts the form data from the view and constructs employee object that is sent to the
     * employee service for employee creation
     * @param form
     */
    createEmployee(form: NgForm) {

        let formInput = form.value;

        let employeeObject = {
            "FirstName": formInput.firstName,
            "LastName": formInput.lastName,
            "Email": formInput.email,
            "PhoneNumber": formInput.phoneNumber,
            "SSN": formInput.socialSecurityNumber,
            "Address": formInput.address,
            "empSalary": {
                "grossPay": formInput.grossPay == "" ? 0: formInput.grossPay,
                "stateTax": formInput.stateTax == "" ? 0: formInput.stateTax,
                "federalTax": formInput.federalTax == "" ? 0: formInput.federalTax,
                "socialSecurityTax": formInput.ssnTax == "" ? 0: formInput.ssnTax,
                "bonus": formInput.bonus == "" ? 0: formInput.bonus,
                "reimbursements": formInput.reimbursements == "" ? 0: formInput.reimbursements,
                "healthInsurance": formInput.healthInsurance == "" ? 0: formInput.healthInsurance
            }
        };

        console.log(employeeObject);

        this.employeeService.createEmployee(employeeObject).subscribe(result => {
            console.log(result);
            this.salary = result["_body"];
            this.showSuccess = true;
        }, error => {
            console.log("Error: "+ error.status);
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
    public closeAlert(status: string) {
        if(status === 'success')
            this.showSuccess = false;
        else if(status === 'error')
            this.showError = false;
        else if(status === 'conflict')
            this.showConflictError= false;
    }
}
