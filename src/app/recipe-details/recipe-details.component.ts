import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from '../get-recipes.service';
import { Recipe } from '../types';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private getRecipesService: GetRecipesService) { }

  public recipe: Recipe;

  ngOnInit() {
  //     this.getRecipe(window.location.pathname);   // Get url path from browser and make api call
  }

  // private getRecipe(recipeId: string) {
  //     const observer = {
  //         next: result => console.log(this.recipe = result),
  //         error: err => console.log('An error has occured: ' + err)
  //     }

  //     this.GetRecipesService.getRecipe(recipeId)
  //         .subscribe(observer);
  // }
}

