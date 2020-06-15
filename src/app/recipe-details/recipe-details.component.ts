import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetRecipesService } from '../get-recipes.service';
import { FindRecipeQueryResponse } from '../graphql';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private getRecipesService: GetRecipesService,
    private route: ActivatedRoute
  ) { }

  public recipe: Recipe;
  private loading: boolean;
  private recipeUri: string;
  public isChoosingList = false;
  public isLoggedIn = localStorage.getItem('token');

  ngOnInit() {
    this.route.params.subscribe((params) => this.recipeUri = params.uri);
    this.getRecipe(encodeURIComponent(this.recipeUri));
  }

  private getRecipe(encodedUri: string) {
    this.getRecipesService.findRecipe(encodedUri).subscribe((response: FindRecipeQueryResponse) => {
      this.recipe = response.data.findRecipe;
      this.loading = response.loading;
      console.log(this.recipe);
    });
  }

  public setIsChoosingList(state: boolean) {

    // Set isChoosingList to true on press
    // Render lists to choose from
    // Upon choosing a list, set isChoosingList to false again

    this.isChoosingList = state;
    console.log(this.isChoosingList);
  }
}

