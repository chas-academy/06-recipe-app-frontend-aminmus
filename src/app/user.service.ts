import { Injectable } from '@angular/core';


import { Apollo } from 'apollo-angular';
import { GET_USER_QUERY, GetUserResponse, LOGIN_MUTATION, LoginMutationResponse, SIGNUP_MUTATION, SignupMutationResponse } from './graphql';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) { }

  public async login(email, password): Promise<boolean> {
    try {
      const response = await this.apollo.mutate<LoginMutationResponse>({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password,
        },
      }).toPromise();

      localStorage.setItem('token', response.data.login.token);
      return true;
    } catch (error) {
      console.log('There was an error during authentication', error);
      return false;
    }
  }

  logout() { }

  public async signup(name, email, password): Promise<SignupMutationResponse['signup']> {
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
    if (localStorage.getItem('token')) {
      const userResponse = await this.getCurrentUser();
      // Check if token is valid
      if (userResponse.data.me.id) {
        return true;
      }
    }
    return false;
  }

  private getCurrentUser() {
    return this.apollo.query<GetUserResponse>({
      query: GET_USER_QUERY,
    }).toPromise();
  }
}
