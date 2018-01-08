import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
import {CreateEmployeeComponent} from './layout/create-employee/create-employee.component';
import {ListOfEmployeesComponent} from './layout/list-of-employees/list-of-employees.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './layout/components/header/header.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpModule,
        ToastModule.forRoot(),
    ],
    declarations: [AppComponent,
        CreateEmployeeComponent,
        ListOfEmployeesComponent,
        LayoutComponent,
        SidebarComponent,
        HeaderComponent
    ],
    providers: [AuthGuard, NgbModal, EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
