import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class EmployeeService {
    serverUrl: string = "http://localhost:63187";
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http) {

    }

    getEmployees() {
        let options = new RequestOptions();
        options.headers = this.headers;
        return this.http.get(this.serverUrl + "/api/employee", options);
    }

    createEmployee(employee) {
        let options = new RequestOptions();
        options.headers = this.headers;
        return this.http.post(this.serverUrl + "/api/employee", employee, options);
    }

    deleteEmployee(employeeId) {
        return this.http.delete(this.serverUrl + "/api/employee/" + employeeId);
    }
}
