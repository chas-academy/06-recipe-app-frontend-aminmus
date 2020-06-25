import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { GET_USER_QUERY, GetUserResponse, LOGIN_MUTATION, LoginMutationResponse, SIGNUP_MUTATION, SignupMutationResponse } from './graphql';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private apollo: Apollo, private router: Router) {
    console.log('User Service');
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.loggedIn.next(true);
      console.log('Logged in from memory');
    } else {
      this.logout();
      console.log('Session invalidated, logged out');
    }
  }

  public async login(email, password): Promise<boolean> {
    try {
      const response = await this.apollo.mutate<LoginMutationResponse>({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password,
        },
      }).toPromise();

      const { token, user } = response.data.login;
      this.setLoggedIn(true, token, user.email);
      return true;
    } catch (error) {
      console.log('There was an error during authentication', error);
      return false;
    }
  }

  logout(redirect = false) {
    this.setLoggedIn(false);
    if (redirect) {
      this.router.navigate(['/']);
    }
  }

  public async signupAndLogin(name, email, password): Promise<boolean> {
    try {
      const response = await this.signup(name, email, password);
      this.setLoggedIn(true, response.token, response.user.email);
      return true;
    } catch (error) {
      console.error('There was an error during sign up or authentication', error);
      return false;
    }
  }

  private setLoggedIn(isLoggedIn: boolean, token?: string, email?: string) {
    if (isLoggedIn) {
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      this.token = token;
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
      delete this.token;
      localStorage.clear();
    }
  }

  private async signup(name, email, password): Promise<SignupMutationResponse['signup']> {
    try {
      const signupResponse = await this.apollo.mutate<SignupMutationResponse>({
        mutation: SIGNUP_MUTATION,
        variables: {
          name,
          email,
          password,
        },
      }).toPromise();

      return signupResponse.data.signup;
    } catch (error) {
      console.error('There was an error registering new user:', error);
    }
  }

  public async checkAuth(): Promise<boolean> {
    try {
      if (localStorage.getItem('token')) {
        const userResponse = await this.getCurrentUser();
        // Check if token is valid
        if (userResponse?.data?.me?.id) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private getCurrentUser() {
    return this.apollo.query<GetUserResponse>({
      query: GET_USER_QUERY,
    }).toPromise();
  }
}
