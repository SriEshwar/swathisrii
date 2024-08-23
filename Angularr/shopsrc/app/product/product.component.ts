import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //creating collection of the product
  categoryInput:String="Stationary"
  products:product[]=[{productId:101,productName:"Laptop",cost:40000,category:"Electronics"},
    {productId:102,productName:"Poco",cost:28000,category:"Electronics"},
    {productId:103,productName:"Vivo",cost:18000,category:"Electronics"},
    {productId:104,productName:"Oppo",cost:15000,category:"Electronics"},
    {productId:105,productName:"Pen",cost:15,category:"Stationary"},
    {productId:106,productName:"pencil stand",cost:1500,category:"Furniture"},
    {productId:107,productName:"kitchen cabinet",cost:10000,category:"Furniture"},
    {productId:108,productName:"Ink",cost:50,category:"Stationary"},

  ]

  

}
