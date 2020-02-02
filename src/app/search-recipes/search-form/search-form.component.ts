import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchFilter, HealthEnum, DietEnum } from '../../types';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  public searchForm: FormGroup;
  @Output() getRecipes = new EventEmitter();
  protected options;

  constructor(private formBuilder: FormBuilder) {
    this.options = this.makeOptions();
    this.searchForm = this.formBuilder.group({
      query: '',
      filters: ''
    });
  }

  onSubmit() {
    this.getRecipes.emit(this.searchForm.value);
    console.log(this.makeOptions())
  }

  private makeOptions() {
    const healthLabels = [];
    const dietLabels = [];
    for (const healthLabel in HealthEnum) {
      healthLabels.push(healthLabel);
    }
    for (const dietLabel in DietEnum) {
      dietLabels.push(dietLabel);
    }
    return { healthLabels, dietLabels };
  }
}