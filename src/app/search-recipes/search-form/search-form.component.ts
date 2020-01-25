import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  protected searchForm: FormGroup;
  protected searchInput;

  ngOnInit() { }

  constructor(private formBuilder: FormBuilder) {

    this.searchForm = this.formBuilder.group({
      query: '',
      filters: ''
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }
}
