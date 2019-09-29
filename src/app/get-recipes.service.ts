import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { SEARCH_RECIPES_QUERY, FIND_RECIPE_QUERY } from './graphql';
import { SearchFilter } from './types';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor(private apollo: Apollo) { }

  public searchRecipes(searchQuery: string, filters?: SearchFilter): any {
    return this.apollo.watchQuery({
      query: SEARCH_RECIPES_QUERY,
      variables: {
        searchQuery,
        filters,
      },
    }).valueChanges;
  }

  public findRecipe(uri: string): any {
    return this.apollo.watchQuery({
      query: FIND_RECIPE_QUERY,
      variables: { uri },
    }).valueChanges;
  }
}
