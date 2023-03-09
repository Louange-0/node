//functions
//a function that say hi 
const names=require('./names')
const {sayhi, add,multiplication,poem,area} =require('./modules')

console.log(names);
console.log(sayhi(names.peter));
// sayhi(names.peter)this won't work because in the function we used the retun instead of using console.log
console.log(add(names.num1,names.num2));
console.log(multiplication(names.num3,names.num4));
console.log(poem(names.color1,names.color2,names.taste,names.peter));
console.log(area(names.width,names.length));
