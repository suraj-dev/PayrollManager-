import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-charts',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss'],
    animations: [routerTransition()]
})
export class CreateEmployeeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
