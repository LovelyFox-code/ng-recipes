import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Potato', 4),
    new Ingredient('Beetroot', 2),
    new Ingredient('Tomato', 3),
    new Ingredient('Meat', 1),
    new Ingredient('Onion', 3),
    new Ingredient('Carrot', 2),
  ];

  onAddIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
