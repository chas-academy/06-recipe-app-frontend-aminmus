import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { GET_RECIPE_LISTS_QUERY, GetRecipeListsResponse, CreateRecipeListMutationResponse, CREATE_RECIPE_LIST_MUTATION } from './graphql';

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

  /** Create a recipe list for the given user */
  public createRecipeList(ownerEmail: string) {
    return this.apollo.mutate<CreateRecipeListMutationResponse>({
      mutation: CREATE_RECIPE_LIST_MUTATION,
      variables: { ownerEmail },
    }).toPromise();
  }
}



