import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding-property-binding',
  template: `
  <div>

  <h3> {{ title }} </h3>

  <input [id]="myId" type="text" value="Krishna">

  <input  id="{{ myId }}" type="text" value="Krishna">

  <input disabled = "false" id ="{{ myId }}" type="text" value="Krishna">

  <input [disabled]="isDisabled" id ="{{myId}}" type="text" value="Krishna">

  </div>
  `,
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  title :string = "HTML Attribut vs DOM Property";
myId: string = "testId";
isDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}


//html attribute  - this will not change
//DOM property - this will change 

//interpoaltion can only work with string properties

// property binding can be used to any type

//$0.getAttribute('value')
//$0.value

// other syntax [disabled]    bind-disabled
