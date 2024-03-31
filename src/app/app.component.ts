import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  btnValue: any ="plus.png"
  btnValue1: any ="plus.png"
  btnValue2: any ="plus.png"
  btnValue3: any ="plus.png"
  btnValue4: any ="plus.png"
  openCollapse(){
    if (this.btnValue==="plus.png") {
      this.btnValue="moins.png"
    }else{
      this.btnValue="plus.png"
    }
  }
  openCollapse1(){
    if (this.btnValue1==="plus.png") {
      this.btnValue1="moins.png"
    }else{
      this.btnValue1="plus.png"
    }
  }
  openCollapse2(){
    if (this.btnValue2==="plus.png") {
      this.btnValue2="moins.png"
    }else{
      this.btnValue2="plus.png"
    }
  }
  openCollapse3(){
    if (this.btnValue3==="plus.png") {
      this.btnValue3="moins.png"
    }else{
      this.btnValue3="plus.png"
    }
  }
  openCollapse4(){
    if (this.btnValue4==="plus.png") {
      this.btnValue4="moins.png"
    }else{
      this.btnValue4="plus.png"
    }
  }
}
