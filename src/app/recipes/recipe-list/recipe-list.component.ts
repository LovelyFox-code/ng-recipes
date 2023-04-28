import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Borscht',
      'This borscht recipe makes a delicious version of the classic beet soup',
      'https://ychef.files.bbci.co.uk/live/624x351/p07qd3m8.jpg'
    ),
    new Recipe(
      'Soup',
      'This borscht recipe makes a delicious version of the classic beet soup',
      'https://www.thespruceeats.com/thmb/caEnO4TirsLmDFTrZ21t7Uezkds=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/instant-pot-chicken-and-rice-soup-4782002-hero-c06a5c2d655f4b2089ee63ad0a73a9bf.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
