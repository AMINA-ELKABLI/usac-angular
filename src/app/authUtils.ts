import firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import {User} from "./core/models/auth.models";
import {JwtAuthenticationResponse} from "./account/auth/jtw-authentication-response.model";

class AuthUtils {

  constructor() {
  }


  /**
   * Logout the user
   */
  logout() {
    sessionStorage.removeItem('authUser');
    sessionStorage.clear();
  }

  setLoggedCredentials(jwtAuthenticationResponse: JwtAuthenticationResponse) {
    if (jwtAuthenticationResponse) {
      this.setAccessToken(jwtAuthenticationResponse.access_token);
      this.setRefreshToken(jwtAuthenticationResponse.refresh_token);
    }
  }

  setRefreshToken(refreshToken: string) {
    sessionStorage.setItem('refresh_token', refreshToken);
  }

  setAccessToken(accessToken: string) {
    sessionStorage.setItem('access_token', accessToken);
  }

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser(): User | null {
    const authUserString = sessionStorage.getItem('authUser');
    if (!authUserString) {
      return null;
    }
    return JSON.parse(authUserString) as User;
  }

  getRefrechToken() {
    return sessionStorage.getItem('refresh_token') ?? null;
  }



  /**
   * Handle the error
   * @param {*} error
   */
  handleError(error) {
    return error.message;
  }

  currentAccessToken() {
    return sessionStorage.getItem('access_token') ?? null;
  }
  getAccessToken() {
    return sessionStorage.getItem('access_token') ?? null;
  }

  currentUserValue() {
    return this.getAuthenticatedUser();
  }

}


export const authUtils = new AuthUtils();
