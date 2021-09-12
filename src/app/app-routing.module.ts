import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmploysComponent } from './employs/employs.component';
//import { AddEmployComponent } from './add-employ/add-employ.component';
import { DisplayComponent } from './display/display.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'pipes', component: PipesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'employs', component: EmployeeListComponent },
  //{ path: 'add-employ', component: AddEmployComponent },
  { path: 'update-employ/:id', component: UpdateEmployeeComponent},
  { path: 'employ-details/:id', component: EmployeeDetailsComponent},
  //{ path: '',redirectTo: 'employ',pathMatch: 'full'},
  { path: 'display', component: DisplayComponent,
children: [
  { path: 'create-employee', component: CreateEmployeeComponent},
  { path: 'employs', component: EmployeeListComponent},
  { path: 'update-employ/:id', component: UpdateEmployeeComponent},
  { path: 'employ-details/:id', component: EmployeeDetailsComponent},
] },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }