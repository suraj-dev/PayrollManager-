import {ISalary} from "./ISalary";

export interface IEmployee {
    FirstName?: string;
    LastName?:string;
    Email?:string;
    PhoneNumber?: string;
    Address?: string;
    SSN?: string;
    empSalary?: ISalary;
}
