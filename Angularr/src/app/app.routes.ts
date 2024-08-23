import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {
        path:"shop",
        component:ShopComponent
    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"student",
        component:StudentComponent
    },
    {
        path:'**',
        component:ProductComponent
    }
];
