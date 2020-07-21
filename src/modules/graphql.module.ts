import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { environment } from 'environments/environment';

const uri = environment.apiUrl; // <-- URL of GraphQL server
export function createApollo(httpLink: HttpLink) {

  const token = localStorage.getItem('token');
  const authLink = setContext((_operation, _context) => {
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };
    }
  });

  return {
    link: ApolloLink.from([authLink, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
