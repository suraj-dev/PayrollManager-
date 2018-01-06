import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    @Output() isLoggedIn : EventEmitter<boolean>;
    constructor(public router: Router) {
        this.isLoggedIn = new EventEmitter<boolean>();
    }

    ngOnInit() {}

    onLoggedin() {
       // localStorage.setItem('isLoggedin', 'true');
        this.isLoggedIn.emit(true);
        localStorage["loggedIn"] = true;
        console.log("On Login Component - " + localStorage["loggedIn"]);
    }
}
