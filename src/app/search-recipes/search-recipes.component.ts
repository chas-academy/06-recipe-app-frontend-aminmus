import { Component, OnInit, ViewChild, OnChanges, AfterViewInit } from '@angular/core';

import { GetRecipesService } from '../get-recipes.service';
import { SearchFilter, Recipe, ICheckBoxItem } from '../types';
import { SearchRecipesQueryResponse } from '../graphql';

import { SearchFormComponent } from './search-form/search-form.component';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent {
  constructor(private getRecipesService: GetRecipesService) { }

  @ViewChild(SearchFormComponent)
  private formComponent: SearchFormComponent;

  public recipes: Recipe[];
  private loading = false;

  private filters: SearchFilter;

  public getRecipes(formValues): void {

    const filters = formValues.filters;

    const selectedHealthLabels = filters.healthLabels.filter((label: ICheckBoxItem) => label.selected).map((label) => label.id);

    const selectedDietLabels = filters.dietLabels.filter((label: ICheckBoxItem) => label.selected).map((label) => label.id);

    const selectedLabels = {
      healthLabels: selectedHealthLabels,
      dietLabels: selectedDietLabels,
    };

    if (selectedLabels.healthLabels.length > 0 || selectedLabels.dietLabels.length > 0) {
      const searchFilters: any = {};

      if (selectedLabels.healthLabels.length > 0) {
        searchFilters.healthLabels = selectedLabels.healthLabels;
      }
      if (selectedLabels.dietLabels.length > 0) {
        searchFilters.dietLabels = selectedLabels.dietLabels;
      }
      this.getRecipesService
        .searchRecipes(formValues.query, searchFilters)
        .subscribe((response: SearchRecipesQueryResponse) => {
          this.recipes = response.data.searchRecipes;
          this.loading = response.loading;
          console.log(response);
        });
      return;
    }

    this.getRecipesService
      .searchRecipes(formValues.query)
      .subscribe((response: SearchRecipesQueryResponse) => {
        this.recipes = response.data.searchRecipes;
        this.loading = response.loading;
        console.log(response);
      });
    return;
  }
}
