import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployeeService} from "../../services/employee.service";


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
    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {}

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

    public closeAlert(status: string) {
        if(status === 'success')
            this.showSuccess = false;
        else if(status === 'error')
            this.showError = false;
        else if(status === 'conflict')
            this.showConflictError= false;
    }
}
