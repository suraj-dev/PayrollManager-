import { Component, OnInit , OnChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

    public loggedIn : boolean

    constructor() {
        this.loggedIn = false;
    }

    ngOnInit() {
        console.log("init");
        localStorage["loggedIn"] = true;
    }

    ngOnChanges(){
        this.loggedIn = localStorage["loggedIn"];
        console.log("On App Component - " + this.loggedIn);
    }

    checkLoggedIn(data){
       console.log("I got fired " + data);
    }
}
