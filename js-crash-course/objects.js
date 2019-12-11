
// object is similar to array, array stores the list of data
// stored in different element of array

// object consists of the single related of the one related with attributes

// object will let you store all the properties of a group


let car = {
    make : 'bmw',
    model:'2lkksd',
    year: 2001,
  getPrice: function(){
     return 5000;
  },
    printDescription : function(){
        console.log(this.make+''+this.model);
    }
}

car.printDescription();
console.log(car.year);
console.log(car['year']); // unrecommended syntax

// function inside the object is called methods

var anotherCar = {};
anotherCar.whatever = 'koo';
console.log(anotherCar.whatever);



var a = {
    myProperty: { b: 'hi'}
};
console.log(a.myProperty.b);


var c = {
    myProperty: [
        {d: 'this'},
        {e: 'i can'},
        {f: 'bad'},
    ]
};


// object can contain array of objects of properties