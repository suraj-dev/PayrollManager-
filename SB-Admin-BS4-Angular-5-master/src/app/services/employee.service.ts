import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class EmployeeService {
    serverUrl: string = "http://localhost:4500/";
    constructor(private http: Http) {

    }

    getEmployees() {
        const headers = new Headers({
           'Content-Type': 'application/json'
        });
        let options = new RequestOptions();
        options.headers = headers;
        return this.http.get(this.serverUrl + "employees", options);
    }
}
