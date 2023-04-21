import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  onAddIngredient(newIngredietn: { name: string, amount: number }) {
    this.ingredients.push(newIngredietn);
  }
}
