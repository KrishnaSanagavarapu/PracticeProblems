import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componenet-interaction',
  template: `
  <h1> Parent-Child Componenet Interaction</h1>
  
  <h3> {{ parentData }} </h3>
  <h3> {{ myname }} </h3>

  <button (click)="fireEvent($event)" >Send Event </button>
  `,
  styleUrls: ['./componenet-interaction.component.scss']
})
export class ComponenetInteractionComponent implements OnInit {

 @Input()  public parentData;
 @Input('parentData') public myname; 

 @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Child to Parent Data');
  }
}

// parent - child component

//  component interaction - with input and output decorators

// child can only send to parent data to parent by events

// create a new instance of the event emitter class 