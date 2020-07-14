import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeListService } from 'app/recipe-list.service';
import { RecipeList } from 'app/types';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  private listId: string;
  public recipeList: RecipeList;
  public isRenamingList = false;
  public newListName: FormControl = new FormControl('', [Validators.minLength(1), Validators.required]);

  constructor(private route: ActivatedRoute, private recipeListService: RecipeListService, private router: Router) { }

  async ngOnInit() {
    this.route.params.subscribe((params) => this.listId = params.id);
    const { data: { recipeList } } = await this.recipeListService.getRecipeList(this.listId);
    this.recipeList = recipeList;
  }

  async deleteList() {
    const response = await this.recipeListService.deleteRecipeList(this.listId);

    if (response.data.deleteRecipeList.id) { this.router.navigateByUrl('/my-lists'); }
  }

  async renameList() {
    if (this.newListName.valid) {
      const response = await this.recipeListService.updateRecipeList(this.listId, { name: this.newListName.value.toString() });
      this.recipeList.name = response.data.updateRecipeList.name;
      this.isRenamingList = false;
    }
  }

  async removeRecipe(encodedUri: string) {
    const response = await this.recipeListService.updateRecipeList(this.listId, { recipes: { disconnect: [{ encodedUri }] } });
    this.recipeList = response.data.updateRecipeList;
  }
}
