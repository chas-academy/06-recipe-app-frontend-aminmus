import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  GET_RECIPE_LISTS_QUERY,
  GetRecipeListsResponse,
  CreateRecipeListMutationResponse,
  CREATE_RECIPE_LIST_MUTATION,
  GetRecipeListResponse,
  GET_RECIPE_LIST_QUERY,
  AddRecipeToListMutationResponse,
  ADD_RECIPE_TO_LIST_MUTATION,
  DeleteRecipeListMutationResponse,
  DELETE_RECIPE_LIST_MUTATION,
  UpdateRecipeListMutationResponse,
  UPDATE_RECIPE_LIST_MUTATION
} from './graphql';
import { Recipe } from './types';
import { RecipeListUpdateInput } from 'generated/globalTypes';

// interface UpdateRecipeListInput {
//   name?: string;
//   recipes?: {
//     add?: [Recipe['encodedUri']];
//     remove?: [Recipe['encodedUri']];
//   };
// }

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
  public getRecipeList(listId: string) {
    return this.apollo.query<GetRecipeListResponse>({
      query: GET_RECIPE_LIST_QUERY,
      variables: { listId },
    }).toPromise();
  }

  /** Create a recipe list for the given user */
  public createRecipeList(ownerEmail: string, listName: string) {
    return this.apollo.mutate<CreateRecipeListMutationResponse>({
      mutation: CREATE_RECIPE_LIST_MUTATION,
      variables: { ownerEmail, name: listName },
    }).toPromise();
  }

  public addRecipeToList(encodedRecipeUri: string, listId: string) {
    return this.apollo.mutate<AddRecipeToListMutationResponse>({
      mutation: ADD_RECIPE_TO_LIST_MUTATION,
      variables: { encodedRecipeUri, listId }
    }).toPromise();
  }

  public deleteRecipeList(listId: string) {
    return this.apollo.mutate<DeleteRecipeListMutationResponse>({
      mutation: DELETE_RECIPE_LIST_MUTATION,
      variables: { listId },
    }).toPromise();
  }

  public updateRecipeList(listId: string, data: RecipeListUpdateInput) {
    return this.apollo.mutate<UpdateRecipeListMutationResponse>({
      mutation: UPDATE_RECIPE_LIST_MUTATION,
      variables: {
        listId,
        data,
        // ...(data?.name ? { shouldRename: true, name: data.name } : { shouldRename: false }),
        // ...(data?.recipes?.add ? { shouldAddRecipes: true, recipesToAdd: data.recipes.add } : { shouldAddRecipes: false }),
        // ...(data?.recipes?.remove ? { shouldRemoveRecipes: true, recipesToRemove: data.recipes.remove } : { shouldRemoveRecipse: false }),
      },
    }).toPromise();
  }
}
