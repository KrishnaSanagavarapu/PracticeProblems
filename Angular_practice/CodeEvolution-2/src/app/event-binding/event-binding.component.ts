import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  template: `
    <div>
      <h1>{{ title }}</h1>

      <button (click)="onClick()">Press Me</button> {{ greeting }}

      <button (click)="oonClick($event)">Press Me</button> {{ greetings }}

      <button (click)="greetingz = 'Welcome Krishna' "> KRISHNA </button>  {{greetingz}}

    </div>
  `,
  styleUrls: ["./event-binding.component.scss"]
})
export class EventBindingComponent implements OnInit {
  title: string = "Data Binding - Event Binding";
  greeting: string = "";
  greetings: string = "";

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("This is our Event Handling");
    this.greeting = " This is our Event Handling DOM";
  }

  oonClick() {
    console.log(event);
    this.greetings = event.type;
  }
}
