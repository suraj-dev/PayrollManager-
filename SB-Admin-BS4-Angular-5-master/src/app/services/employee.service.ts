import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {IEmployee} from "../interfaces/IEmployee";

/**
 * This service provides functions to retrieve, create and delete employees
 */
@Injectable()
export class EmployeeService {
    serverUrl: string = "http://localhost:63187";
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    /**
     * Constructor used for injecting services and initializing class variables
     * @param http
     */
    constructor(private http: Http) {

    }

    /**
     * This function sends a GET request to a Web API to retrieve all the employees from the database
     * @returns {Observable<Response>}
     */
    getEmployees() {
        let options = new RequestOptions();
        options.headers = this.headers;
        return this.http.get(this.serverUrl + "/api/employee", options);
    }

    /**
     * This function sends a POST request with the given employee object to a Web API for employee creation.
     * @param employee - a json object containing the employee information
     * @returns {Observable<Response>}
     */
    createEmployee(employee: IEmployee) {
        let options = new RequestOptions();
        options.headers = this.headers;
        return this.http.post(this.serverUrl + "/api/employee", employee, options);
    }

    /**
     * This function sends a DELETE request with the given employeeId to a Web API for employee deletion
     * @param employeeId - a number containing the Id of the employee to be deleted
     * @returns {Observable<Response>}
     */
    deleteEmployee(employeeId: number) {
        return this.http.delete(this.serverUrl + "/api/employee/" + employeeId);
    }
}
