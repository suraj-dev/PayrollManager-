import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
import {CreateEmployeeComponent} from "./layout/create-employee/create-employee.component";
import {ListOfEmployeesComponent} from "./layout/list-of-employees/list-of-employees.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
    { path: 'dashboard', component: LayoutComponent , canActivate: [AuthGuard] },
    { path: 'create-employee', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'list-of-employees', component: ListOfEmployeesComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
