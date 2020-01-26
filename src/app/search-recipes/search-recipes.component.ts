import { Component, OnInit, ViewChild, OnChanges, AfterViewInit } from '@angular/core';

import { GetRecipesService } from '../get-recipes.service';
import { SearchFilter, Recipe } from '../types';
import { SearchRecipesQueryResponse } from '../graphql';

import { SearchFormComponent } from './search-form/search-form.component';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent {
  constructor(private getRecipesService: GetRecipesService) { }

  @ViewChild(SearchFormComponent, { static: false })
  private formComponent: SearchFormComponent;

  protected recipes: Recipe[];
  private loading = false;

  private filters: SearchFilter;

  protected getRecipes(formValues): void {
    this.getRecipesService
      .searchRecipes(formValues.query, formValues.filter)
      .subscribe((response: SearchRecipesQueryResponse) => {
        this.recipes = response.data.searchRecipes;
        this.loading = response.loading;
        console.log(response);
      });
  }
}
