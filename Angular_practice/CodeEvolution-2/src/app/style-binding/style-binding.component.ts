import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
  <div>
  
  <h2> {{title}}</h2>

  <h3 [style.color]= "color"> Krishna </h3>
  <h3 [style.color]= "hasError ? 'red' : 'yellow'"> Krishna </h3>

  <h2 [ngStyle]= "titleStyles"> Sanagavarapu </h2>
  
  </div>
  `,
  styleUrls: []
})
export class StyleBindingComponent implements OnInit {

  title: string = "Style Binding";
  color: string = "blue";
  hasError: boolean = true;

  titleStyles = {
    color: "brown",
    fontStyle: "italic",
  }
  constructor() { }

  ngOnInit() {
  }

}
