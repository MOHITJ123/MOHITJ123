// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//     formGroup!: FormGroup;
//     message: string;
//     sto = false;
//     user ='';
//     // public register: Register[] = [];
  
//     isFormValid = true;
  
//   constructor(private router: Router, private activatedRoute: ActivatedRoute) {
//       this.message = '';
//       }
//      ngOnInit() {
//        this.formGroup = new FormGroup({
//          UserName: new FormControl('', [
//            Validators.required,
//           // Validators.pattern(/^[a-zA-Z0-9.!#$%&â€™+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)
//          ]),
//          Password: new FormControl('', [
//            Validators.required,
//            Validators.minLength(8),
//            Validators.maxLength(20)
//          ])
//        });
//      }
//       onSubmit() {
//        console.log(this.formGroup);
//        this.isFormValid = true;
//        if (this.isFormValid) {
//       /* const user = {
//          username: this.formGroup.value('Username'), // Username input field
//          password: this.formGroup.value('Password') // Password input field
//        };*/
//        console.log('Form valid');
//       // console.log(user.username + '  ' + user.password );
//        console.log('Formgroup value :' + this.formGroup.value);
//        this.router.navigate(['/display']);
//        }
  
//       }
  
//      onReset() {
//        this.formGroup.reset();
//      }
  
//     //  isValid(controlName) {
//     //   return this.formGroup.get(controlName).invalid && this.formGroup.get(controlName).touched;
//     //  }
  
//   moveToRegister() {
//       this.router.navigate(['../signup'], { relativeTo: this.activatedRoute});
//   }
  
//   }
//   //export class LoginComponent implements OnInit {
  
//     //constructor() { }
  
//     //ngOnInit(): void {
//     //}
  
//   //}

import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';
import { EmployService } from  '../service/employ.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
 templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
 })
 export class SignupComponent implements OnInit {
 employ: Employ = new Employ();

  constructor(private employService: EmployService, private router: Router) { }

  ngOnInit(): void {
  }
  saveEmploy(){
    this.employService.createEmploy(this.employ).subscribe(data =>{
      console.log(data);
      this.goToEmployList();
    }, error => console.log(error));
  }

  goToEmployList(){
    this.router.navigate(['/display/employs']);
  }

  onSubmit(){
    console.log(this.employ);
    this.saveEmploy();
  }
}