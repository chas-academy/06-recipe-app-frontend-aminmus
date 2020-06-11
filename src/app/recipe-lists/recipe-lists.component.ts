import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RecipeListService } from 'app/recipe-list.service';
import { create } from 'domain';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.scss']
})
export class RecipeListsComponent implements OnInit {

  constructor(private recipeListService: RecipeListService, private formBuilder: FormBuilder) { }

  public recipeLists;
  public listForm: FormGroup;

  async ngOnInit() {
    this.listForm = this.formBuilder.group({
      listName: [''],
    });

    const { data: { myRecipeLists: myRecipeLists } } = await this.recipeListService.getRecipeLists();
    this.recipeLists = myRecipeLists;

    console.log('all my lists ', this.recipeLists);
  }

  /** Create a new recipe list and update recipeLists variable */
  async onSubmit() {
    const { listName } = this.listForm.value;
    const { data: { createRecipeList } } = await this.recipeListService.createRecipeList(localStorage.getItem('email'), listName);

    this.recipeLists.push(createRecipeList);
  }
}
