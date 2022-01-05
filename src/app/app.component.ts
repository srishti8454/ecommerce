import { Component } from '@angular/core';
import shop from './shopping/shop.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  public fruitList:{p_name:string, p_id:number, p_cost:number, p_availability:number, p_details:string, p_category:string, p_imageUrl:any }[] = shop;
}
