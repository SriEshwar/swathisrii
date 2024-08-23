import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  standalone: true,
  imports: [],
  templateUrl: './parentcomponent.component.html',
  styleUrl: './parentcomponent.component.css'
})
export class ParentcomponentComponent {
  handleChildEvent(event:string){
    console.log(event);
  }

}
