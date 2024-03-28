import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import Swal from "sweetalert2";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from '../../../core/models/auth.models';
import {authUtils} from '../../../authUtils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  user: User;
  access: string;

  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add('auth-body-bg');
    this.loginForm = this.formBuilder.group({
      email: ['admin.elkabli@gmail.com', [Validators.required, Validators.email]],
      password: ['admin', [Validators.required]],
    });


    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



  get dataForm() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('Invalid login form');
      return;
    }

    this.authenticationService.login(this.dataForm.email.value, this.dataForm.password.value)
      .subscribe({
        next: () => {
          this.access = authUtils.getAccessToken();
          console.log(this.access);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log("error")
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.error = 'Invalid email or password. Please try again.';
            }
            if (error.status === 400) {
              const errorMessage = 'The server is currently undergoing maintenance. Please try again later.';
              console.log(errorMessage);
              Swal.fire({
                title: 'Error Your account is disabled ?',
                text: 'Contact the administrator !',
                icon: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#34c38f',
                cancelButtonColor: '#f46a6a',
                confirmButtonText: 'Ok!'
              })
            }
            else {
              this.error = 'An unexpected error occurred. Please try again later.';
            }
          } else {
            this.error = 'An unexpected error occurred. Please try again later.';
          }
        }
      });
  }

}
