import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  GET_RECIPE_LISTS_QUERY,
  GetRecipeListsResponse,
  CreateRecipeListMutationResponse,
  CREATE_RECIPE_LIST_MUTATION,
  GetRecipeListResponse,
  GET_RECIPE_LIST_QUERY
} from './graphql';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  constructor(private apollo: Apollo) { }

  /** Gets recipe lists for the logged in user, looks at the Authorization header for auth token */
  public getRecipeLists() {
    return this.apollo.query<GetRecipeListsResponse>({
      query: GET_RECIPE_LISTS_QUERY,
    }).toPromise();
  }

  /** Gets recipe lists for the logged in user, looks at the Authorization header for auth token */
  public getRecipeList(id: string) {
    return this.apollo.query<GetRecipeListResponse>({
      query: GET_RECIPE_LIST_QUERY,
      variables: { id },
    }).toPromise();
  }

  /** Create a recipe list for the given user */
  public createRecipeList(ownerEmail: string, listName: string) {
    return this.apollo.mutate<CreateRecipeListMutationResponse>({
      mutation: CREATE_RECIPE_LIST_MUTATION,
      variables: { ownerEmail, name: listName },
    }).toPromise();
  }
}
