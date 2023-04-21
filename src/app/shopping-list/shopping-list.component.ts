import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Potato', 4),
    new Ingredients('Beetroot', 2),
    new Ingredients('Tomato', 3),
    new Ingredients('Meat', 1),
    new Ingredients('Onion', 3),
    new Ingredients('Carrot', 2),
  ];
  constructor() {

  }
  ngOnInit() {

  }

}
