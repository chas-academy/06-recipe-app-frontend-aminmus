import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../types';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  @Input() public recipes: Recipe[];

  ngOnInit() {
  }

}
