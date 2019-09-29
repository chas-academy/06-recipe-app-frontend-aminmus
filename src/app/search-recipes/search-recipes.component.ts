import { Component, OnInit } from '@angular/core';

import { GetRecipesService } from '../get-recipes.service';
import { SearchFilter, Recipe } from '../types';
import { SearchRecipesQueryResponse } from '../graphql';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent implements OnInit {
  constructor(private getRecipesService: GetRecipesService) { }

  protected recipes: Recipe[];
  private loading = false;

  private searchQuery = 'chicken'; // <- Example, get this from template instead
  private filters: SearchFilter;

  ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.getRecipesService.searchRecipes(this.searchQuery, this.filters).subscribe((response: SearchRecipesQueryResponse) => {
      this.recipes = response.data.searchRecipes;
      this.loading = response.loading;
      console.log(response);
    });
  }
}
