import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-two-way-binding",
  template: `
    <div>
      <h1>{{ title }}</h1>

      <input [(ngModel)]="name" type="text" />
      {{ name }}

    </div>
  `,
  styleUrls: ["./two-way-binding.component.scss"]
})
export class TwoWayBindingComponent implements OnInit {
  title: string = " Two-Way Binding";

  name = "";
  constructor() {}

  ngOnInit() {}
}

//from input values -> class -> flows back to the template
// view and property are consistent
