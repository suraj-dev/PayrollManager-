import {ISalary} from "./ISalary";

/**
 * Interface containing Employee related information
 */
export interface IEmployee {
    FirstName: string;
    LastName:string;
    Email:string;
    PhoneNumber: string;
    Address: string;
    SSN: string;
    empSalary: ISalary;
}
