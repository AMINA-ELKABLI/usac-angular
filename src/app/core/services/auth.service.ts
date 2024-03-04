import { Injectable } from '@angular/core';

import {authUtils} from '../../authUtils';

import { User } from '../models/auth.models';
import {environment} from "../../../environments/environment";
import {Observable, throwError} from "rxjs";
import {map} from "rxjs/internal/operators";
import {JwtAuthenticationResponse} from "../../account/auth/jtw-authentication-response.model";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })

export class AuthenticationService {


  private apiUrl: string = "http://localhost:8080/api/v1/auth/";

  user: User;

  constructor(private http: HttpClient) {
  }

  register(firstname :string , lastname :string ,email :string , password :string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "register", {firstname, lastname ,email , password});
  }

  login(email: string, password: string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "authenticate", { email, password })
      .pipe(
        map((response: JwtAuthenticationResponse) => {
          if (response && response.access_token && response.refresh_token) {
            authUtils.setLoggedCredentials(response);
            return response;
          } else {
            throw new Error('Invalid response format');
          }
        }),
        catchError((error: any) => {
          console.error('Error during login:', error);
          return throwError(error);
        })
      );
  }

  resetPassword(email: string) {
    return this.http.post(this.apiUrl + "forget-password", {email});
  }

  logout() {
    // logout the user
    authUtils.logout();
  }
  getRefreshToken(){
    return authUtils.getRefrechToken();
  }

  refreshToken(refresh_token: string): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(this.apiUrl + "token/refresh", {}, {headers: {Authorization: `Bearer ${refresh_token}`}})
      .pipe(
        map((response: JwtAuthenticationResponse) => {
          if (response) {
            authUtils.setAccessToken(response.access_token);
          }
          return response;
        })
      );
  }
}

