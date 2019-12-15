import { Component, OnInit } from "@angular/core";

@Component({
  selector: "data-binding-interpolation",
  template: `
    <div>
      <h1>
        This is the Data Binding Tutorial
      </h1>

      <h2>
        Here we will discuss about the interpolation
      </h2>
      <h4>{{ name }} -- this is from the template inline interpolation</h4>

      <h4>
        {{ 223 + 23 }} this is for data binding - interpolation - expresssions
      </h4>

      <h4>
        {{ "Krishna is learning " + name }} -- this is for the data binding-
        interpolation - string concatenation
      </h4>

      <h4>
        {{ name.length }} - {{ name.toUpperCase() }} -- databinding --
        interpolatin -- js property methods
      </h4>

      <h4>{{ greetUser() }}</h4>

      <h4>{{ siteUrl }} - This is how we can access the globale variables</h4>
    </div>
  `,
  styles: []
})
export class InterpolationComponent implements OnInit {
  public name: string = "Interpolation";
  public siteUrl: string = window.location.href;
  // move to template inline - name property
  // Expresssions
  //string concatenation
  // js property with methods

  constructor() {}

  ngOnInit() {}

  //use methods
  greetUser() {
    return (
      "hello" +
      this.name +
      "This is calling methods in databinding-interpolation"
    );
  }

  // we cant assing to variable in the interpolation
  // we cant access gloabal variables - using the interpolation
  // but we can bind it in .ts and use it
}
