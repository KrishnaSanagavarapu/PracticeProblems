import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngfor",
  template: `
    <div>
      <h1>ngFor Directive - Structural Directive</h1>

      <div *ngFor="let color of colors">
        <h2>{{ color }}</h2>
      </div>

      Index

      <div *ngFor="let color of colors; index as i">
        <h2>{{ color }} {{ i }}</h2>
      </div>

      First

      <div *ngFor="let color of colors; first as f">
        <h2>{{ color }} {{ f }}</h2>
      </div>

      Last

      <div *ngFor="let color of colors; last as l">
        <h2>{{ color }} {{ l }}</h2>
      </div>

      Even

      <div *ngFor="let color of colors; even as e">
        <h2>{{ color }} {{ e }}</h2>
      </div>

      Odd

      <div *ngFor="let color of colors; odd as o">
        <h2>{{ color }} {{ o }}</h2>
      </div>
    </div>
  `,
  styleUrls: ["./ngfor.component.scss"]
})
export class NgforComponent implements OnInit {
  public colors = ["red", "blue", "green", "yellow"];
  constructor() {}

  ngOnInit() {}
}
