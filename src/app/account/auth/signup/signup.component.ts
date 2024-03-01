import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;

  year: number = new Date().getFullYear();


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private userService: UserProfileService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get dataForm() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      this.authenticationService.register(
        this.signupForm.get('firstname').value ,
        this.signupForm.get('lastname').value ,
        this.signupForm.get('email').value ,
        this.signupForm.get('password').value).subscribe({
        next: () => {
          this.successmsg = true;
          if (this.successmsg) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Create Success , administrator will be notified ',
              showConfirmButton: false,
              timer: 3500
            });
            this.router.navigate(['/account/auth/login']);
          }
        },
        error(error) {
          this.error = error ? error : '';
        },
        complete: () => {
        }
      })

    }
  }
}
