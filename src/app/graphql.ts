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

interface SearchRecipesData {
  searchRecipes: Recipe[];
}

export interface SearchRecipesQueryResponse {
  data: SearchRecipesData;
  loading: boolean;
}

export const FIND_RECIPE_QUERY = gql`
query findRecipe($uri: String!) {
  findRecipe: findRecipeByURI(uri: $uri) {
    label,
    dietLabels,
    healthLabels,
    uri,
    image,
    source,
    sourceUrl,
    servings,
    calories,
    totalWeight,
    ingredients,
  }
}`;

export interface FindRecipeQueryResponse {
  data: FindRecipeData;
  loading: boolean;
}

interface FindRecipeData {
  findRecipe: Recipe;
}
