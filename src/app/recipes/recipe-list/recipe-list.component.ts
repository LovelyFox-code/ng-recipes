import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Borscht', 'This borscht recipe makes a delicious version of the classic beet soup', 'https://ychef.files.bbci.co.uk/live/624x351/p07qd3m8.jpg')
  ];

  constructor() {

  }
  ngOnit() {

  }

}
