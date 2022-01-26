import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = "This is the appName";

  header1 = "Number Interpolation"
// numeric binding
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

 // property binding
 clientName:string = "Mark";

 // style binding
 appliedCSSClass = "green";
 notappliedCSSClass = false;
 myColor = "red";


// two way data binding

showData($event:any){
  console.log("Button is clicked!");
  if($event){
    console.log($event.target);
    console.log($event.target.value);
  }
}

getData(data:any){
  console.warn(data);
}
}
