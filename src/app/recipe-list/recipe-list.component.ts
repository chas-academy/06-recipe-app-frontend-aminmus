import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListService } from 'app/recipe-list.service';
import { RecipeList } from 'app/types';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  private listId: string;
  public recipeList: RecipeList;

  constructor(private route: ActivatedRoute, private recipeListService: RecipeListService, private router: Router) { }

  async ngOnInit() {
    console.log('yo');
    this.route.params.subscribe((params) => this.listId = params.id);
    const { data: { recipeList } } = await this.recipeListService.getRecipeList(this.listId);
    this.recipeList = recipeList;
    console.log(this.recipeList);
  }

  async deleteList() {
    const response = await this.recipeListService.deleteRecipeList(this.listId);

    if (response.data.deleteRecipeList.id) { this.router.navigateByUrl('/profile'); }
  }
}
