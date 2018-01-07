import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-charts',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss'],
    animations: [routerTransition()]
})
export class CreateEmployeeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    createEmployee(form: NgForm) {

        let formInput = form.value;

        let employeeObject = {
            "firstName": formInput.firstName,
            "lastName": formInput.lastName,
            "email": formInput.email,
            "phoneNumber": formInput.phoneNumber,
            "socialSecurityNumber": formInput.socialSecurityNumber,
            "address": formInput.address,
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
    }
}
