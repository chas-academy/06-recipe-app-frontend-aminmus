import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {

  constructor(private apollo: Apollo) { }

  public searchRecipes(searchQuery: string, filters: any) {
    this.apollo.query({
      query: gql`
      {
        searchRecipes(searchQuery: ${searchQuery}) {
          label,
          image,
          uri,
          source,
        }
      }
      `,
    });
  }
}
