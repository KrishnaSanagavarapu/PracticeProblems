import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stlcomp',
  templateUrl: './stlcomp.component.html',
  styles: [`
div {
  color: red;
}
  `]
})
export class StlcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
