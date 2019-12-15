import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-ref-var",
  template: `
    <div>
      <h2>{{ title }}</h2>

      <input #myInput type="text" />

      <button (click)="logMessage(myInput.value)">Login</button>

      <button (click)="logMessage(myInput)">Login</button>
      
    </div>
  `,
  styleUrls: ["./template-ref-var.component.scss"]
})
export class TemplateRefVarComponent implements OnInit {
  title: string = " Template Reference Variable";
  constructor() {}

  ngOnInit() {}

  logMessage(value) {
    console.log("THis is krishna - using template reference variable");
  }
}
