import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from '../get-recipes.service';
import { Recipe } from '../types';
import { FindRecipeQueryResponse } from '../graphql';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(private getRecipesService: GetRecipesService) { }

  private recipe: Recipe;
  private loading: boolean;

  ngOnInit() {
    // Example URI, change later to get dynamically
    this.getRecipe('http://www.edamam.com/ontologies/edamam.owl#recipe_48ed6e7ba8720ac3b782d7f388660adb');
  }

  private getRecipe(uri: string) {
    this.getRecipesService.findRecipe(uri).subscribe((response: FindRecipeQueryResponse) => {
      this.recipe = response.data.findRecipe;
      this.loading = response.loading;
      console.log(this.recipe);
    });
  }
}

