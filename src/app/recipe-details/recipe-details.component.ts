import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetRecipesService } from '../get-recipes.service';
import { FindRecipeQueryResponse } from '../graphql';
import { Recipe } from '../types';
import { RecipeListService } from 'app/recipe-list.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private getRecipesService: GetRecipesService,
    private route: ActivatedRoute,
    private recipeListService: RecipeListService,
  ) { }

  public recipe: Recipe;
  public myRecipeLists;
  private loading: boolean;
  private recipeUri: string;
  public chosenListId = new FormControl();
  public isLoggedIn = localStorage.getItem('token');

  async ngOnInit() {
    this.route.params.subscribe((params) => this.recipeUri = params.uri);
    this.getRecipe(encodeURIComponent(this.recipeUri));

    const { data: { myRecipeLists } } = await this.recipeListService.getRecipeLists();
    this.myRecipeLists = myRecipeLists;
  }

  private getRecipe(encodedUri: string) {
    this.getRecipesService.findRecipe(encodedUri).subscribe((response: FindRecipeQueryResponse) => {
      this.recipe = response.data.findRecipe;
      this.loading = response.loading;
      console.log(this.recipe);
    });
  }

  public async saveToList() {
    const response = await this.recipeListService.addRecipeToList(this.recipe.encodedUri, this.chosenListId.value);
    console.log(response);
  }
}

