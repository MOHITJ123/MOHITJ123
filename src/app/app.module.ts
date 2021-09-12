import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEmploysComponent } from './add-employs/add-employs.component';
import { HlightDirective } from './directive/hlight.directive';
import { ArrangeorderPipe } from './pipes/arrangeorder.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CreateListComponent } from './pipes/create-list/create-list.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
//import { DisplayDirective } from './display.directive';
import { DisplayComponent } from './display/display.component';
import { EmployService } from './service/employ.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardServiceService } from './service/authguard-service.service';
import { EmploysComponent } from './employs/employs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    AddEmploysComponent,
    HlightDirective,
    ArrangeorderPipe,
    SortPipe,
    FilterPipe,
    EmployeeDetailsComponent,
  //  DisplayDirective,
    DisplayComponent,
    UpdateEmployeeComponent,
    EmploysComponent,
  
  
  
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    HttpClientModule
    

  ],
  providers: [EmployService,AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
