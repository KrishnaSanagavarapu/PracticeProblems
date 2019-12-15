import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngswitch",
  template: `
    <div>
      <h1>ngSwitch Directive - Structural Directive</h1>

      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You choose red </div>
        <div *ngSwitchCase="'green'">You choose green </div>
        <div *ngSwitchCase="'blue'">You choose blue </div>
        <div *ngSwitchDefault>Pick Again</div>
      </div>
    </div>
  `,
  styleUrls: ["./ngswitch.component.scss"]
})
export class NgswitchComponent implements OnInit {
  color: string = "blue";
  constructor() {}

  ngOnInit() {}
}
