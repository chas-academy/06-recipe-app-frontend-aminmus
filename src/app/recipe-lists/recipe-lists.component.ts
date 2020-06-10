import { Component, OnInit } from '@angular/core';
import { RecipeListService } from 'app/recipe-list.service';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.scss']
})
export class RecipeListsComponent implements OnInit {

  constructor(private recipeListService: RecipeListService) { }

  private recipeLists;

  async ngOnInit() {
    const { data: { myRecipeLists: myRecipeLists } } = await this.recipeListService.getRecipeLists();
    this.recipeLists = myRecipeLists;

    console.log('all my lists ', this.recipeLists);
  }
}
