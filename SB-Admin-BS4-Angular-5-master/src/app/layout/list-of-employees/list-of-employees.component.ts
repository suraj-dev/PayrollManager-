import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './list-of-employees.component.html',
    styleUrls: ['./list-of-employees.component.scss'],
    animations: [routerTransition()]
})
export class ListOfEmployeesComponent implements OnInit {

    ngOnInit() {}

    constructor(private modalService: NgbModal) {}

    open(content) {
        this.modalService.open(content).result.then((result) => {

        }, (reason) => {

        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
