import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  studentName:String="swathi";
  studentMark:number=500;
  message:String="This is event binding";
  fontColor:String="pink"
  displayMessage(){
    alert(this.message)

  }

}
