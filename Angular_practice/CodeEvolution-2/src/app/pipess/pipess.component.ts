import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipess',
  template: `
  <h1> Pipes </h1>

 <h3>{{ "Krishna" | lowercase }} </h3>
 <h3>{{ "Krishna" | uppercase }} </h3>
 <h3>{{ "Krishna sanagavarapu" | titlecase }} </h3>
 <h3>{{ "Krishna" | lowercase }} </h3>
 <h3>{{ laptop | lowercase }} </h3>

 <h3>{{ "Krishna" | slice:0:4 }} </h3>
 <h3>{{ person | json }} </h3>

 <h3>{{ 1.2346 | number: '1.2-3' }} </h3>
 <h3>{{ 1.2346 | number: '2.1-2' }} </h3>

 <h3>{{ 0.37 | percent }} </h3>
 <h3>{{ 0.37 | currency }} </h3>
 <h3>{{ 0.37 | currency: 'GBP' }} </h3>
 <h3>{{ 0.37 | currency: 'GBP':'code' }} </h3>

 <h3>{{ datez }} </h3>
 <h3>{{ datez | date }} </h3>
 <h3>{{ datez | date:'short' }} </h3>
 <h3>{{ datez | date: 'shortDate' }} </h3>
 <h3>{{ datez | date: 'shortTime' }} </h3> 
 
 `,
  styleUrls: ['./pipess.component.scss']
})
export class PipessComponent implements OnInit {

 public laptop:string = "mAc";
  public person = {
    firstName : "krishan",
    lastName : 'sanagavarapu'
  }

  public datez = new Date();
  constructor() { }

  ngOnInit() {
  }


}
