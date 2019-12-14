import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multin',
  template: `<div>
  This is the multi-line. Instead of templateurl we need to type template here.
  </div>`,
  styleUrls: ['./multin.component.scss']
})
export class MultinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
