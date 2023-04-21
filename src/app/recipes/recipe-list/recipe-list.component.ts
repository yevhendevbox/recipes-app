import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Ramen', 'Ichiracu Ramen with cool topings', 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg'),
    new Recipe('Pasta Carbonara', 'Pretty good pasta!', 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg')
  ];

  constructor() {

  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
