import gql from 'graphql-tag';
import { Recipe } from './types';

export const SEARCH_RECIPES_QUERY = gql`
query searchForRecipes($searchQuery: String!, $filters: Filters) {
 searchRecipes(searchQuery: $searchQuery, filters: $filters) {
   label,
   encodedUri,
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
query findRecipe($encodedUri: String!) {
  findRecipe: findRecipeByURI(encodedUri: $encodedUri) {
    label,
    dietLabels,
    healthLabels,
    encodedUri,
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

export interface SignupMutationResponse {
  signup?: {
    token: string;
    user: {
      id: string,
      name: string,
      email: string,
    };
  };
}

export const SIGNUP_MUTATION = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token,
      user {
        id,
        name,
        email,
      }
    }
  }
`;

export interface LoginMutationResponse {
  login?: {
    token: string;
    user: {
      id: string,
      name: string,
      email: string,
    };
  };
}

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        id,
        name,
        email,
      }
    }
  }
`;
export interface GetUserResponse {
  me?: {
    id: string,
    name: string,
    email: string,
  };
}

export const GET_USER_QUERY = gql`
  query me {
    me {
        id,
        name,
        email,
    }
  }
`;
