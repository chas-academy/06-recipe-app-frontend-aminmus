import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRecipes(searchTerm) {
    console.log('have some recipes');
  }

}
