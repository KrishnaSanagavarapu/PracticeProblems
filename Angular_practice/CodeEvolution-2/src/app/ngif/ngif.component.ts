import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngif",
  template: `
    <div>
      <h1>Structural Directive</h1>

      <h2 *ngIf="true">This is True case for ngIf Condition</h2>

      <h2 *ngIf="false">This is True case for ngIf Condition</h2>

      // lets assing property value

      <h2 *ngIf="displayProperty">
        This is True case for ngIf Condition -=- lets assing property value
      </h2>

      // else block for this ngif block

      <h2 *ngIf="displayProperty; else elseBlock">
        This is True case for ngIf Condition -=- lets assing property value
      </h2>

      <ng-template #elseBlock>
      <h3> This is Hidden</h3>
      </ng-template>

      // Simpliefied Version of if,else logic

      <div *ngIf="displayName;then thenBlock;else elseBlock"> </div>

      <ng-template #thenBlock>
      <h5> using the then block</h5>
      </ng-template>


      <ng-template #elseBlock>
      <h5> using the then block for false</h5>
      </ng-template>


    </div>
  `,
  styleUrls: ["./ngif.component.scss"]
})
export class NgifComponent implements OnInit {
  displayProperty: boolean = false;
  constructor() {}

  ngOnInit() {}
}
