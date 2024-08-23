import { Component, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [],
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.css'
})
export class ChildcomponentComponent {
  @output() childEvent=new EventEmitter<string>();
  handleClick(){
    this.childEvent.emit('welcome to this page eventemitter');
  }

}
