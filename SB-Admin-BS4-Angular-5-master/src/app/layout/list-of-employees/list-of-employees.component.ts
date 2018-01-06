import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './list-of-employees.component.html',
    styleUrls: ['./list-of-employees.component.scss'],
    animations: [routerTransition()]
})
export class ListOfEmployeesComponent implements OnInit {

    ngOnInit() {}
}
