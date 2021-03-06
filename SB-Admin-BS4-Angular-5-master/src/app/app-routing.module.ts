import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
import {CreateEmployeeComponent} from "./layout/create-employee/create-employee.component";
import {ListOfEmployeesComponent} from "./layout/list-of-employees/list-of-employees.component";
import {LayoutComponent} from "./layout/layout.component";

/**
 * Routes specification for the application
 * @type {{path: string, component: LayoutComponent}|{path: string, component: CreateEmployeeComponent}|{path: string, component: ListOfEmployeesComponent}[]}
 */
const routes: Routes = [
    { path: '', component: LayoutComponent},
    { path: 'create-employee', component: CreateEmployeeComponent},
    { path: 'list-of-employees', component: ListOfEmployeesComponent},
];

/**
 * Module handling importing and exporting of routes
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
