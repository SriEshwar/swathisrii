import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';

import { ExpressionsComponent } from './expressions/expressions.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,CommonModule,FormsModule,ShopComponent,ProductComponent,RouterLink,ExpressionsComponent,ChildcomponentComponent,ParentcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';
}
