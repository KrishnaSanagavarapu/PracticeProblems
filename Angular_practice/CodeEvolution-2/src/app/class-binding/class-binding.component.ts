import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'data-binding-class-binding',
  template: `
    <div>
      <h1> {{ title }}</h1>
      <h3 class= "text-sucess" > Krishna Sanagavarapu</h3>
      <h3 [class]= "successClass" > Krishna Sanagavarapu</h3>

      <h3 [class.text-fail] = "hasError"> Chaitanya</h3>
    
    <h3 [ngClass]="messageClasses" >Krishna Sanagavarapu </h3>
    
      </div>
  `,
  styles: [`
  .text-sucess{
  color : green;
  }
  .text-fail {
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  
  `]
})
export class ClassBindingComponent implements OnInit {

  title: string = "Data Binding - Class Binding ";
  successClass:string = "text-sucess";
  hasError: boolean = false;
  isSpecial:boolean= true;
  messageClasses = {
    "text-sucess": !this.hasError,
    "text-fail": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() {}

  ngOnInit() {}
}

//for multiple classes we need to use directive

// directive is a custom html that angular provides
