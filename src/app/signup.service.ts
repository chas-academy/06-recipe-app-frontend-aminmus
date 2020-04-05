import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { SIGNUP_MUTATION } from './graphql';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private apollo: Apollo) { }

  public signup(name, email, password) {
    return this.apollo.mutate({
      mutation: SIGNUP_MUTATION,
      variables: {
        name,
        email,
        password,
      },
    }).subscribe(({ data }) => {
      return data;
    }, (error) => console.log('There was an error sending the query', error));
  }
}
