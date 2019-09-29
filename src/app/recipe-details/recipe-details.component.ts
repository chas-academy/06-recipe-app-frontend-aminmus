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

  private recipe: Recipe;
  private loading: boolean;
  private recipeUri: string;

  ngOnInit() {
    // Example URI, change later to get dynamically
    // this.getRecipe('http://www.edamam.com/ontologies/edamam.owl#recipe_48ed6e7ba8720ac3b782d7f388660adb');
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
}

