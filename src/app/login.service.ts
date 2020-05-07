import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { LOGIN_MUTATION } from './graphql';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private apollo: Apollo) { }

  public login(email, password) {
    return this.apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        email,
        password,
      },
    });
  }
}
