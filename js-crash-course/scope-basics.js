// basics of scope

// variable scope


let a = 'first';

function scopeTest(){
    console.log(a);
if(a != ''){
    console.log(a);
}
  //  let b = 'second';
}

scopeTest();
//console.log(b); this statement will give error, 

