import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { SearchFilter, HealthEnum, DietEnum, ICheckBoxItem } from '../../types';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public searchForm: FormGroup;
  @Output() getRecipes = new EventEmitter();
  public options;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.options = this.makeOptions();
    this.searchForm = this.formBuilder.group({
      query: [''],
      filters: this.formBuilder.group({
        healthLabels: this.mapToCheckboxArrayGroup(this.options.healthLabels),
        dietLabels: this.mapToCheckboxArrayGroup(this.options.dietLabels),
      })
    });
  }

  get healthLabels() {
    return this.searchForm.get('filters.healthLabels') as FormArray;
  }

  get dietLabels() {
    return this.searchForm.get('filters.dietLabels') as FormArray;
  }

  onSubmit() {
    this.getRecipes.emit(this.searchForm.value);
  }

  private mapToCheckboxArrayGroup(data: string[]): FormArray {
    return this.formBuilder.array(data.map(element => {
      return this.formBuilder.group({
        id: element,
        selected: false,
        name: element,
      });
    }));
  }

  private makeOptions() {
    const healthLabels = [];
    const dietLabels = [];
    for (const healthLabel in HealthEnum) {
      if (HealthEnum.hasOwnProperty(healthLabel)) {
        healthLabels.push(healthLabel);
      }
    }
    for (const dietLabel in DietEnum) {
      if (DietEnum.hasOwnProperty(dietLabel)) {
        dietLabels.push(dietLabel);
      }
    }
    return { healthLabels, dietLabels };
  }
}
