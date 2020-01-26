import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  public searchForm: FormGroup;
  @Output() getRecipes = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      query: '',
      filters: ''
    });
  }

  onSubmit() {
    this.getRecipes.emit(this.searchForm.value);
  }
}
