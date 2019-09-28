import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { SEARCH_RECIPES_QUERY } from './grapqhql';
import { SearchFilter } from './types';

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor(private apollo: Apollo) { }

  public searchRecipes(searchQuery: string, filters: SearchFilter): any {
    return this.apollo.watchQuery({
      query: SEARCH_RECIPES_QUERY,
      variables: {
        searchQuery,
        filters,
      }
    }).valueChanges;
  }
}
