import gql from 'graphql-tag';
import { Recipe } from './types';

export const SEARCH_RECIPES_QUERY = gql`
query searchForRecipes($searchQuery: String!, $filters: Filters) {
 searchRecipes(searchQuery: $searchQuery, filters: $filters) {
   label,
   uri,
   image,
   source,
   dietLabels,
   healthLabels,
 }
}`;

export interface SearchRecipesQueryResponse {
  searchRecipes: Recipe[];
  loading: boolean;
}

export const FIND_RECIPE_QUERY = gql`
query findRecipe($uri: String!) {
  findRecipe: findRecipeByURI(uri: $uri) {
    label,
    uri,
    image,
    source,
    dietLabels,
    healthLabels,
  }
}`;

export interface FindRecipeQueryResponse {
  findRecipe: Recipe;
  loading: boolean;
}
