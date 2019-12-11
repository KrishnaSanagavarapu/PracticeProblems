import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: '<div> This is inline template </div>',
  styleUrls: ['./tempsty.component.scss']
})
export class TempstyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//Inline Template Example Component

// In this we can write single line of html
