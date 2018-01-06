import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
import {CreateEmployeeComponent} from './layout/create-employee/create-employee.component';
import {ListOfEmployeesComponent} from './layout/list-of-employees/list-of-employees.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { LoginComponent } from './login/login.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http:HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent,
        CreateEmployeeComponent,
        ListOfEmployeesComponent,
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        LoginComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
