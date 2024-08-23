import { Component } from '@angular/core';


@Component({
  selector: 'app-expressions',
  standalone: true,
  imports: [],
  templateUrl: './expressions.component.html',
  styleUrl: './expressions.component.css'
})
export class ExpressionsComponent {
  name='swathi';//interpolation
  student={name:'sri',age:21}//object interpolation
  students=["viswa","akash","venima"];//onject interpolation 
 username='sriviswa'; //property binding
  isActive=true;
  isDisabled=false;
  fontsize='24px';

  
}
