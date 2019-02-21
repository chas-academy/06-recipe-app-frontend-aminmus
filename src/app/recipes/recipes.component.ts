import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from '../get-recipes.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

    constructor(private GetRecipesService: GetRecipesService) { }

    public recipes: [];

    ngOnInit() {
    }

    getRecipes(searchTerm) {

        const observer = {
            next: result => console.log(this.recipes = result.matches),
            error: err => console.log('An error has occured: ' + err)
        }

        this.GetRecipesService.getRecipes(searchTerm)
            .subscribe(observer);
        
    }

}
