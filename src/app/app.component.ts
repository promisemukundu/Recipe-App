import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'receipe-app';



  recipeList: any[] = [];

  onAddReceipe(form: NgForm) {
    this.recipeList.push(form.value);
    console.log(form.value);
    console.log(this.recipeList);

    form.reset();
  }
}
